import React from "react";
import cx from "classnames/bind";

import SearchIcon from "../../assets/icons/SearchIcon";

import styles from "./SearchBar.module.scss";

function SearchBar(props) {
  const { className, onChange, value } = props;
  return (
    <div className={cx(className, styles.Container)}>
      <input
        className={value && styles.Input}
        placeholder={"Search by character name..."}
        onChange={onChange}
        value={value}
        spellcheck="false"
      />
      <div className={styles.SearchIcon}>
        <SearchIcon />
      </div>
    </div>
  );
}

export default SearchBar;
