import React from "react";
import cx from "classnames/bind";

import styles from "./CharacterCard.module.scss";
import gClasses from "../../scss/gClasses.module.scss";

import UserIcon from "../../assets/icons/UserIcon";
import GenderIcon from "../../assets/icons/GenderIcon";
import LocationIcon from "../../assets/icons/LocationIcon";
import COLOR_CONSTANTS from "../../utils/constants";

function CharacterCard(props) {
  const { name, isAlive, gender, location, image } = props;

  return (
    <li className={cx(styles.Container)}>
      <div className={cx(styles.Status)}>
        <div
          className={styles.StatusDotBG}
          style={{
            backgroundColor: isAlive ? COLOR_CONSTANTS.GREEN_V2 : COLOR_CONSTANTS.RED_V2,
          }}
        />
        <div
          className={styles.StatusDot}
          style={{
            backgroundColor: isAlive ? COLOR_CONSTANTS.GREEN : COLOR_CONSTANTS.RED,
          }}
        />
      </div>
      <img src={image} />
      <div className={cx(styles.Details)}>
        <div>
          <UserIcon />
          <p>{name}</p>
        </div>
        <div>
          <GenderIcon />
          <p>{gender}</p>
        </div>
        <div>
          <LocationIcon />
          <p>{location}</p>
        </div>
      </div>
    </li>
  );
}

export default CharacterCard;
