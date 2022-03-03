import React from "react";
import { connect } from "react-redux";
import { useNavigate } from "react-router-dom";

import CharacterCard from "../../../components/character_card/CharacterCard";
import ResponseHandler from "../../../components/response_handler/ResponseHandler";
import {
  landingPageGetAllCharactersApiAction,
  landingPageSetSearchValueAction,
} from "../../../redux/actions/LandingPageActions";
import { LANDING_PAGE_STRINGS } from "../../../strings/Strings";
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
    getAllCharactersApiAction,
    hasRecommendations,
  } = props;
  let characterCards = [];

  const homeButtonClickHandler = () => {
    if (trimString(searchValue)) {
      setSearchValueAction("");
      getAllCharactersApiAction();
    }
  };

  if (isLoading) {
    characterCards = new Array(19)
      .fill()
      .map((data, index) => <CharacterCard key={`loader${index}`} isLoading />);
  } else if (characterList?.length > 0) {
    characterCards = characterList.map((eachCharacter, index) => {
      const { id, species, ...otherCharacterProps } = eachCharacter;
      return (
        <CharacterCard
          key={`characterCard${index}`}
          onClick={() => {
            navigate(`${CHARACTER_PAGE}${id}`);
            if (trimString(searchValue)) {
              localStorage.setItem("recent_search_species", species);
            }
          }}
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
    <ResponseHandler homeButtonOnClick={homeButtonClickHandler} />
  ) : (
    <>
      {hasRecommendations && (
        <h2 className={styles.RecommendationTitle}>{LANDING_PAGE_STRINGS.RECOMMENDATIONS.TITLE}</h2>
      )}
      <ul className={styles.Container}>{characterCards}</ul>
    </>
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
    hasRecommendations: characterList.hasRecommendations,
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(CharacterList);
