import React from "react";
import cx from "classnames/bind";

import styles from "./EpisodeCard.module.scss";
import Skeleton from "react-loading-skeleton";

function EpisodeCard(props) {
  const { className, episode, name, date, isLoading } = props;

  return (
    <li className={cx(className, styles.Container)}>
      <p className={styles.Episode}>{isLoading ? <Skeleton width={100}/> : episode}</p>
      <p className={styles.Name} title={name}>
        {isLoading ? <Skeleton /> : name}
      </p>
      <p className={styles.Date}>{date}</p>
    </li>
  );
}

export default EpisodeCard;
