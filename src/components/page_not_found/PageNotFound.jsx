import React from "react";
import { useNavigate } from "react-router-dom";

import ModalWrapper from "../modal/ModalWrapper";
import ResponseHandler from "../response_handler/ResponseHandler";
import { RESPONSE_HANDLER_CONSTANTS } from "../../utils/Constants";

function PageNotFound(props) {
  const navigate = useNavigate();

  return (
    <ModalWrapper
      isVisible
      onCloseClick={() => {
        navigate("/");
      }}
    >
      <ResponseHandler type={RESPONSE_HANDLER_CONSTANTS.PAGE_NOT_FOUND} />
    </ModalWrapper>
  );
}

export default PageNotFound;
