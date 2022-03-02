import React from "react";
import cx from 'classnames/bind';

import styles from "./Button.module.scss";

function Button(props) {
  const { className, onClick, children } = props;

  return (
    <button className={cx(className, styles.Container)} onClick={onClick}>
      {children}
    </button>
  );
}

export default Button;