import React from "react";
import { connect } from "react-redux";

import EpisodeCard from "../../../components/episode_card/EpisodeCard";
import ResponseHandler from "../../../components/response_handler/ResponseHandler";
import styles from "./EpisodeList.module.scss";

function EpisodeList(props) {
  const { episodeList, isLoading } = props;
  let episodeCards = [];

  if (isLoading) {
    episodeCards = new Array(20)
      .fill()
      .map((data, index) => (
        <EpisodeCard key={`episodeLoader${index}`} isLoading />
      ));
  } else if (episodeList?.length > 0)
    episodeCards = episodeList.map((eachEpisode, index) => {
      return <EpisodeCard key={`episodeCard${index}`} {...eachEpisode} />;
    });
  
  return episodeCards.length === 0 ? (
    <ResponseHandler />
  ) : (
    <ul className={styles.Container}>{episodeCards}</ul>
  );
}

const mapStateToProps = (state) => {
  const { CharacterPageReducer } = state;
  return {
    episodeList: CharacterPageReducer.episodeList,
    isLoading: CharacterPageReducer.isLoading,
  };
};

export default connect(mapStateToProps, null)(EpisodeList);
