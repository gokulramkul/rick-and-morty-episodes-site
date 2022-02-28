import React, { useEffect } from "react";
import cx from "classnames/bind";
import { connect } from "react-redux";

import RickAndMortyLogo from "../../assets/logo/RickAndMortyLogo";
import styles from "./LandingPage.module.scss";
import SearchBar from "../../components/search_bar/SearchBar";
import {
  landingPageGetAllCharactersApiAction,
  landingPageSetSearchValueAction,
} from "../../redux/actions/LandingPageActions";
import CharacterList from "./character_list/CharacterList";

function LandingPage(props) {
  const { searchValue, setSearchValueAction, getAllCharactersApiAction } =
    props;

  useEffect(() => {
    getAllCharactersApiAction();
  }, []);

  return (
    <>
      <div className={cx(styles.Header)}>
        <RickAndMortyLogo className={styles.Logo} />
        <SearchBar
          onChange={(event) => setSearchValueAction(event.target.value)}
          value={searchValue}
        />
      </div>
      <CharacterList />
    </>
  );
}

const mapDispatchToProps = (dispatch) => {
  return {
    setSearchValueAction: (searchValue) =>
      dispatch(landingPageSetSearchValueAction(searchValue)),
    getAllCharactersApiAction: (...params) =>
      dispatch(landingPageGetAllCharactersApiAction(...params)),
  };
};

const mapStateToProps = (state) => {
  return {
    searchValue: state.LandingPageReducer.searchValue,
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(LandingPage);
