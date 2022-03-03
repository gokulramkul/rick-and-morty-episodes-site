import React from "react";
import cx from "classnames/bind";

import SearchIcon from "../../assets/icons/SearchIcon";

import styles from "./SearchBar.module.scss";
import { LANDING_PAGE_STRINGS } from "../../strings/Strings";

function SearchBar(props) {
  const { className, onChange, value, valueServer, onSearchButtonClick, disabled } = props;

  const onKeyDownHandler = (event) => {
    if (event.keyCode === 13) {
      onSearchButtonClick();
    }
  };

  return (
    <div className={cx(className, styles.Container)}>
      <input
        className={(value || valueServer) && styles.Input}
        placeholder={LANDING_PAGE_STRINGS.SEARCH_BAR.PLACEHOLDER}
        onChange={onChange}
        value={value}
        spellCheck="false"
        onKeyDown={onKeyDownHandler}
        disabled={disabled}
      />
      <button
        className={styles.SearchButton}
        onClick={disabled ? undefined : onSearchButtonClick}
      >
        <SearchIcon />
      </button>
    </div>
  );
}

export default SearchBar;
