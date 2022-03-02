import React from "react";
import cx from "classnames/bind";

import SearchIcon from "../../assets/icons/SearchIcon";

import styles from "./SearchBar.module.scss";

function SearchBar(props) {
  const { className, onChange, value, onSearchButtonClick } = props;

  const onKeyDownHandler = (event) => {
  if (event.keyCode === 13) {
    onSearchButtonClick();
  }
  };
  
  return (
    <div className={cx(className, styles.Container)}>
      <input
        className={value && styles.Input}
        placeholder={"Search by character name..."}
        onChange={onChange}
        value={value}
        spellcheck="false"
        onKeyDown={onKeyDownHandler}
      />
      <button className={styles.SearchButton} onClick={onSearchButtonClick}>
        <SearchIcon />
      </button>
    </div>
  );
}

export default SearchBar;
