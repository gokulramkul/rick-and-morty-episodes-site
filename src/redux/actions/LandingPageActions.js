import { getAllCharactersApiService } from "../../api/api_service/getAllCharactersApiService";
import { LANDING_PAGE } from "./ActionConstants";

export const landingPageSetSearchValueAction = (data) => {
  return {
    type: LANDING_PAGE.SET_SEARCH_VALUE,
    payload: data,
  };
};

const landingPageCharactersApiStartedAction = () => {
  return {
    type: LANDING_PAGE.CHARACTERS_API_STARTED,
  };
};

const landingPageCharactersApiLoadMoreStartedAction = () => {
  return {
    type: LANDING_PAGE.CHARACTERS_API_LOAD_MORE_STARTED,
  };
};

export const landingPageCharactersApiSuccessAction = (data) => {
  return {
    type: LANDING_PAGE.CHARACTERS_API_SUCCESS,
    payload: data,
  };
};

export const landingPageGetAllCharactersApiAction = (
  params_={},
  isPaginated = false
) => dispatch => {
  let params = params_;
  if (isPaginated) {
    dispatch(landingPageCharactersApiStartedAction());
    params_ = {
      ...params,
      page: params.page + 1,
    };
  } else dispatch(landingPageCharactersApiLoadMoreStartedAction());

  getAllCharactersApiService(params)
    .then((response) => {
      console.log('hey',response);
      dispatch(landingPageCharactersApiSuccessAction({ response, isPaginated }));
    })   
    .catch((error) => {});
};
