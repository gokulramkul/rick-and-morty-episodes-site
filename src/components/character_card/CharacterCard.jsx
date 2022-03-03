import React, { useState } from "react";
import cx from "classnames/bind";
import Skeleton from "react-loading-skeleton";

import styles from "./CharacterCard.module.scss";

import UserIcon from "../../assets/icons/UserIcon";
import GenderIcon from "../../assets/icons/GenderIcon";
import LocationIcon from "../../assets/icons/LocationIcon";
import COLOR_CONSTANTS from "../../utils/Constants";
import { LANDING_PAGE_STRINGS } from "../../strings/Strings";

function CharacterCard(props) {
  const { isLoading, name, isAlive, gender, location, image, onClick } = props;
  const [isImageLoading, setIsImageLoading] = useState(true);

  const onImageLoadHandler = () => {
    setIsImageLoading(false);
  };

  return (
    <li className={cx(styles.Container)} onClick={onClick}>
      {!isLoading && (
        <div className={cx(styles.Status)} title={isAlive? LANDING_PAGE_STRINGS.STATUS.ALIVE : LANDING_PAGE_STRINGS.STATUS.DEAD}>
          <div
            className={styles.StatusDotBG}
            style={{
              backgroundColor: isAlive
                ? COLOR_CONSTANTS.GREEN_V2
                : COLOR_CONSTANTS.RED_V2,
            }}
          />
          <div
            className={styles.StatusDot}
            style={{
              backgroundColor: isAlive
                ? COLOR_CONSTANTS.GREEN
                : COLOR_CONSTANTS.RED,
            }}
          />
        </div>
      )}
      {(isImageLoading || isLoading) && <Skeleton width={220} height={220} />}
      <img
        src={image}
        onLoad={onImageLoadHandler}
        style={{ display: isImageLoading ? "none" : "block" }}
      />
      <div className={cx(styles.Details)}>
        <div>
          <UserIcon />
          <p title={name}>{isLoading ? <Skeleton /> : name}</p>
        </div>
        <div>
          <GenderIcon />
          <p title={gender}>{isLoading ? <Skeleton /> : gender}</p>
        </div>
        <div>
          <LocationIcon />
          <p title={location}>{isLoading ? <Skeleton /> : location}</p>
        </div>
      </div>
    </li>
  );
}

export default CharacterCard;
