import React from "react";

import CloseIcon from "../../assets/icons/CloseIcon";
import { ICON_TITLES } from "../../strings/Strings";

import styles from "./ModalWrapper.module.scss";

function ModalWrapper(props) {
  const { children, onCloseClick, isVisible } = props;

  return (
    <>
      {isVisible && (
        <div className={styles.Modal}>
          <CloseIcon className={styles.CloseIcon} onClick={onCloseClick} title={ICON_TITLES.CLOSE_ICON} />
          <section className={styles.ModalMain}>{children}</section>
        </div>
      )}
    </>
  );
}

export default ModalWrapper;
