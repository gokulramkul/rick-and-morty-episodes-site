import React from "react";
import { connect } from "react-redux";

import EpisodeCard from "../../../components/episode_card/EpisodeCard";
import styles from "./EpisodeList.module.scss";

function EpisodeList(props) {
  const { episodeList } = props;

  const episodeCards = episodeList.map((eachEpisode) => {
    return <EpisodeCard {...eachEpisode} />;
  });

  return <ul className={styles.Container}>{episodeCards}</ul>;
}

const mapStateToProps = (state) => {
  return {
    episodeList: state.CharacterPageReducer.episodeList,
  };
};

export default connect(mapStateToProps, null)(EpisodeList);
