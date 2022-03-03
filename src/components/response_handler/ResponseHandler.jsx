import React from "react";
import NoDataIcon from "../../assets/icons/NoDataIcon";
import { RESPONSE_HANDLER_STRINGS } from "../../strings/Strings";

import { RESPONSE_HANDLER_CONSTANTS } from "../../utils/Constants";
import styles from "./ResponseHandler.module.scss";

function ResponseHandler(props) {
  const { type } = props;

  let title = "";

  if (type === RESPONSE_HANDLER_CONSTANTS.PAGE_NOT_FOUND) title = RESPONSE_HANDLER_STRINGS.PAGE_NOT_FOUND;
  else title = RESPONSE_HANDLER_STRINGS.NO_RESULTS_FOUND;

  return (
    <div className={styles.Container}>
      <NoDataIcon />
      <p>{title}</p>
    </div>
  );
}

export default ResponseHandler;
