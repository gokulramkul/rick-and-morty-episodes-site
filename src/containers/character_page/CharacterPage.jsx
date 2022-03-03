import React, { useEffect, useState } from "react";
import cx from "classnames/bind";
import { connect } from "react-redux";
import { useParams, useNavigate } from "react-router-dom";
import Skeleton from "react-loading-skeleton";

import EpisodeList from "./episode_list/EpisodeList";
import ModalWrapper from "../../components/modal/ModalWrapper";
import {
  characterPageClearStateAction,
  characterPageGetCharacterDetailsAndEpisodesApiAction,
} from "../../redux/actions/CharacterPageActions";
import styles from "./CharacterPage.module.scss";
import { HOME } from '../../utils/RouteConstants';

function CharacterPage(props) {
  const navigate = useNavigate();
  const { id } = useParams();
  const {
    getCharacterDetailsAndEpisodesApiAction,
    clearCharacterPageState,
    name,
    episodeCount,
    gender,
    location,
    image,
    isLoading,
    isError,
  } = props;

  const [isImageLoading, setIsImageLoading] = useState(true);

  const onImageLoadHandler = () => {
    setIsImageLoading(false);
  };

  useEffect(() => {
    getCharacterDetailsAndEpisodesApiAction(id);
    return () => {
      clearCharacterPageState();
    };
  }, []);

  return (
    <ModalWrapper
      isVisible
      onCloseClick={() => {
        navigate(HOME);
      }}
    >
      <div className={styles.Container}>
        {!isError && (
          <div className={styles.Header}>
            {(isImageLoading || isLoading) && (
              <Skeleton circle height={120} width={120} />
            )}
            <img
              src={image}
              onLoad={onImageLoadHandler}
              style={{ display: isImageLoading ? "none" : "block" }}
            />
            <div className={styles.TitleSection}>
              <p className={styles.CharacterTitle}>
                {isLoading ? <Skeleton width={200} height={15} /> : name}
              </p>
              <p className={styles.CharacterSubTitle}>
                {isLoading ? (
                  <>
                    <Skeleton
                      width={100}
                      height={15}
                      style={{ marginRight: "10px" }}
                    />
                    <Skeleton
                      width={100}
                      height={15}
                      style={{ marginRight: "10px" }}
                    />
                    <Skeleton width={100} height={15} />
                  </>
                ) : (
                  <>
                    {gender} <span className={styles.Dot}>•</span> {location}
                    <span className={styles.Dot}>•</span> {episodeCount}
                  </>
                )}
              </p>
            </div>
          </div>
        )}
        <div className={styles.EpisodeList}>
          <EpisodeList />
        </div>
      </div>
    </ModalWrapper>
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
    isError: CharacterPageReducer.isError,
    episodeList: CharacterPageReducer.episodeList,
    ...characterDetails,
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(CharacterPage);
