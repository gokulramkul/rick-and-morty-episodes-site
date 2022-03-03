import React from "react";
import { useNavigate } from "react-router-dom";

import NoDataIcon from "../../assets/icons/NoDataIcon";
import { RESPONSE_HANDLER_STRINGS } from "../../strings/Strings";
import { RESPONSE_HANDLER_CONSTANTS } from "../../utils/Constants";
import { HOME } from "../../utils/RouteConstants";
import Button from "../button/Button";
import styles from "./ResponseHandler.module.scss";

function ResponseHandler(props) {
  const { type, homeButtonOnClick } = props;
  const navigate = useNavigate();

  let title = "";

  if (type === RESPONSE_HANDLER_CONSTANTS.PAGE_NOT_FOUND)
    title = RESPONSE_HANDLER_STRINGS.PAGE_NOT_FOUND;
  else title = RESPONSE_HANDLER_STRINGS.NO_RESULTS_FOUND;

  return (
    <div className={styles.Container}>
      <NoDataIcon />
      <p>{title}</p>
      <Button
        className={styles.Button}
        onClick={() => {
          navigate(HOME);
          homeButtonOnClick();
        }}
      >
        {RESPONSE_HANDLER_STRINGS.GO_TO_HOMEPAGE}
      </Button>
    </div>
  );
}

export default ResponseHandler;
