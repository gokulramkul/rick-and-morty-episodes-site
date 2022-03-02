import React, { useEffect } from "react";
import cx from "classnames/bind";
import { connect } from "react-redux";
import { useParams } from "react-router-dom";

import EpisodeList from "./episode_list/EpisodeList";
import { characterPageClearStateAction, characterPageGetCharacterDetailsAndEpisodesApiAction } from "../../redux/actions/CharacterPageActions";

import styles from "./CharacterPage.module.scss";

function CharacterPage(props) {
  const { id } = useParams();
  const {
    getCharacterDetailsAndEpisodesApiAction,
    clearCharacterPageState,
    name,
    episodeCount,
    gender,
    location,
    image,
  } = props;

  useEffect(() => {
    getCharacterDetailsAndEpisodesApiAction(id);
    return () => {
      clearCharacterPageState();
    };
  }, []);

  return (
    <div className={styles.Container}>
      <div className={styles.Header}>
        <img src={image} />
        <div className={styles.TitleSection}>
          <p className={styles.CharacterTitle}>{name}</p>
          <p className={styles.CharacterSubTitle}>
            {gender} <span className={styles.Dot}>•</span> {location}
            <span className={styles.Dot}>•</span> {episodeCount}
          </p>
        </div>
      </div>
      <EpisodeList />
    </div>
  );
}

const mapDispatchToProps = (dispatch) => {
  return {
    getCharacterDetailsAndEpisodesApiAction: (characterId) =>
      dispatch(
        characterPageGetCharacterDetailsAndEpisodesApiAction(characterId)
      ),
    clearCharacterPageState: () => dispatch(characterPageClearStateAction()),
  };
};

const mapStateToProps = (state) => {
  const {
    CharacterPageReducer,
    CharacterPageReducer: { characterDetails },
  } = state;
  return {
    isLoading: CharacterPageReducer.isLoading,
    ...characterDetails,
    episodeList: CharacterPageReducer.episodeList,
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(CharacterPage);
