import React from "react";
import { connect } from "react-redux";
import { useNavigate } from "react-router-dom";

import CharacterCard from "../../../components/character_card/CharacterCard";
import ResponseHandler from "../../../components/response_handler/ResponseHandler";
import { landingPageGetAllCharactersApiAction, landingPageSetSearchValueAction } from "../../../redux/actions/LandingPageActions";
import { CHARACTER_PAGE } from "../../../utils/RouteConstants";
import { trimString } from "../../../utils/UtilityFunctions";
import styles from "./CharacterList.module.scss";

function CharacterList(props) {
  const navigate = useNavigate();
  const {
    characterList,
    isLoading,
    isLoadMoreLoading,
    setSearchValueAction,
    searchValue,
    getAllCharactersApiAction
  } = props;
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
    <ResponseHandler
      homeButtonOnClick={() => {
        if (trimString(searchValue)) {
          setSearchValueAction("");
          getAllCharactersApiAction({
            page: 1,
          });
        }
      }}
    />
  ) : (
    <ul className={styles.Container}>{characterCards}</ul>
  );
}

const mapDispatchToProps = (dispatch) => {
  return {
    setSearchValueAction: (searchValue) =>
      dispatch(landingPageSetSearchValueAction(searchValue)),
    getAllCharactersApiAction: (params, isPaginated) =>
      dispatch(landingPageGetAllCharactersApiAction(params, isPaginated)),
  };
};

const mapStateToProps = (state) => {
  const {
    LandingPageReducer: { characterList },
  } = state;
  return {
    characterList: characterList.list,
    isLoading: characterList.isLoading,
    isLoadMoreLoading: characterList.isLoadMoreLoading,
    searchValue: state.LandingPageReducer.searchValue,
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(CharacterList);
