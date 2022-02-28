import React from "react";
import { connect } from "react-redux";
import CharacterCard from "../../../components/character_card/CharacterCard";
import styles from "./CharacterList.module.scss";

function CharacterList(props) {
  const { characterList } = props;

  const characterCards = characterList.map((eachCharacter) => {
    return <CharacterCard {...eachCharacter} />;
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
