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
import { trimString } from "../../utils/UtilityFunctions";
import Button from "../../components/button/Button";
import { LANDING_PAGE_STRINGS } from "../../strings/Strings";

function LandingPage(props) {
  const {
    searchValue,
    searchValueServer,
    setSearchValueAction,
    getAllCharactersApiAction,
    hasMoreCharacters,
    isLoading,
  } = props;

  useEffect(() => {
    getAllCharactersApiAction();
  }, []);

  const onSearchHandler = () => {
    const trimmedSearchValue = trimString(searchValue);
    if (trimString(searchValueServer) !== trimmedSearchValue) {
      getAllCharactersApiAction({
        ...(trimmedSearchValue ? { name: trimmedSearchValue } : {}),
        page: 1,
      });
    }
  };

  const onLoadMoreHandler = () => {
    getAllCharactersApiAction(undefined, true);
  };

  return (
    <div className={styles.Container}>
      <div className={cx(styles.Header)}>
        <RickAndMortyLogo className={styles.Logo} />
        <SearchBar
          onChange={(event) => setSearchValueAction(event.target.value)}
          value={searchValue}
          valueServer={searchValueServer}
          onSearchButtonClick={onSearchHandler}
          disabled={isLoading}
        />
      </div>
      <div className={styles.CharacterList}>
        <CharacterList />
        {!isLoading && hasMoreCharacters && (
          <div className={styles.ShowMoreButton}>
            <Button onClick={onLoadMoreHandler}>{LANDING_PAGE_STRINGS.LOAD_MORE_BUTTON.LABEL}</Button>
          </div>
        )}
      </div>
    </div>
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
    LandingPageReducer,
    LandingPageReducer: { characterList },
  } = state;
  return {
    searchValue: LandingPageReducer.searchValue,
    searchValueServer: characterList.searchValue,
    hasMoreCharacters: characterList.hasMore,
    isLoading: characterList.isLoading,
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(LandingPage);
