import React from "react";
import { connect } from "react-redux";
import { useNavigate } from "react-router-dom";

import CharacterCard from "../../../components/character_card/CharacterCard";
import ResponseHandler from "../../../components/response_handler/ResponseHandler";
import { CHARACTER_PAGE } from "../../../utils/RouteConstants";
import styles from "./CharacterList.module.scss";

function CharacterList(props) {
  const navigate = useNavigate();
  const { characterList, isLoading, isLoadMoreLoading } = props;
  let characterCards = [];

  if (isLoading) {
    characterCards = new Array(19)
      .fill()
      .map((data, index) => <CharacterCard key={`loader${index}`} isLoading />);
  } else if (characterList?.length > 0) {
    characterCards = characterList.map((eachCharacter, index) => {
      const { id, ...otherCharacterProps } = eachCharacter;
      return (
        <CharacterCard
          key={`characterCard${index}`}
          onClick={() => navigate(`${CHARACTER_PAGE}${id}`)}
          {...otherCharacterProps}
        />
      );
    });
  }

  if (isLoadMoreLoading) {
    characterCards.push(
      ...new Array(19)
        .fill()
        .map((data, index) => (
          <CharacterCard key={`moreLoader${index}`} isLoading />
        ))
    );
  }


  return characterCards.length === 0 ? (
    <ResponseHandler />
  ) : (
    <ul className={styles.Container}>{characterCards}</ul>
  );
}

const mapStateToProps = (state) => {
  const {
    LandingPageReducer: { characterList },
  } = state;
  return {
    characterList: characterList.list,
    isLoading: characterList.isLoading,
    isLoadMoreLoading: characterList.isLoadMoreLoading,
  };
};

export default connect(mapStateToProps, null)(CharacterList);
