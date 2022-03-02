import React from "react";
import { connect } from "react-redux";
import { useNavigate } from "react-router-dom";

import CharacterCard from "../../../components/character_card/CharacterCard";
import { CHARACTER_PAGE } from "../../../utils/RouteConstants";
import styles from "./CharacterList.module.scss";

function CharacterList(props) {
  const navigate = useNavigate();
  const { characterList } = props;

  const characterCards = characterList.map((eachCharacter) => {
    const { id, ...otherCharacterProps } = eachCharacter;
    return (
      <CharacterCard
        {...otherCharacterProps}
        onClick={() => navigate(`${CHARACTER_PAGE}${id}`)}
      />
    );
  });

  return <ul className={styles.Container}>{characterCards}</ul>;
}

const mapDispatchToProps = (dispatch) => {
  return {
    //   setSearchValueAction: (searchValue) => dispatch(landingPageSetSearchValueAction(searchValue)),
    //   getAllCharactersApiAction: (...params)=> dispatch(landingPageGetAllCharactersApiAction(...params)),
  };
};

const mapStateToProps = (state) => {
  return {
    characterList: state.LandingPageReducer.characterList.list,
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(CharacterList);
