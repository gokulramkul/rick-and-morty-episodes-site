import { getAllCharactersApiService } from "../../api/api_service/getAllCharactersApiService";
import { trimString } from "../../utils/UtilityFunctions";
import { LANDING_PAGE } from "./ActionConstants";
import { store } from "../../Store";

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

const landingPageCharactersApiFailedAction = (data) => {
  return {
    type: LANDING_PAGE.CHARACTERS_API_FAILED,
    payload: data,
  };
};

export const landingPageGetAllCharactersApiAction =
  (params_ = {}, isPaginated = false) =>
  (dispatch) => {
    let params = params_;
    if (isPaginated) {
      dispatch(landingPageCharactersApiLoadMoreStartedAction());
      const { searchValue, page } =
        store.getState().LandingPageReducer.characterList;
      const trimmedSearchValue = trimString(searchValue);
      params = {
        ...params_,
        page: page + 1,
        ...(trimmedSearchValue ? { name: trimmedSearchValue } : {}),
      };
    } else dispatch(landingPageCharactersApiStartedAction());

    getAllCharactersApiService(params)
      .then((response) => {
        dispatch(
          landingPageCharactersApiSuccessAction({
            response,
            isPaginated,
            params,
          })
        );
      })
      .catch((error) => {
        dispatch(landingPageCharactersApiFailedAction({ params }));
      });
  };
