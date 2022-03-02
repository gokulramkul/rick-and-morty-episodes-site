import React from "react";
import cx from "classnames/bind";

import styles from "./EpisodeCard.module.scss";
import gClasses from "../../scss/gClasses.module.scss";

function EpisodeCard(props) {
  const {
    className,
    episode = "S03E07",
    name = "The Ricklantis Mixup",
    date = "September 10, 2017",
  } = props;

  return (
    <li className={cx(className, styles.Container)}>
      <p className={styles.Episode}>{episode}</p>
      <p className={styles.Name} title={name}>
        {name}
      </p>
      <p className={styles.Date}>{date}</p>
    </li>
  );
}

export default EpisodeCard;
