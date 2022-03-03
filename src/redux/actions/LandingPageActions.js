import { getAllCharactersApiService } from "../../api/api_service/getAllCharactersApiService";
import { trimString } from "../../utils/UtilityFunctions";
import { LANDING_PAGE } from "./ActionConstants";
import { store } from "../../Store";
import { LOCAL_STORAGE_CONSTANTS } from "../../utils/Constants";

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
    const { searchValue, characterList: { searchValue: searchValueServer, page } } = store.getState().LandingPageReducer;
    const recentSearchSpecies = localStorage.getItem(LOCAL_STORAGE_CONSTANTS.RECENT_SEARCH_SPECIES);

    if (isPaginated) {
      dispatch(landingPageCharactersApiLoadMoreStartedAction());
     
      params = {
        ...params_,
        page: page + 1,
      };
      const trimmedSearchValue = trimString(searchValueServer);
      if (trimmedSearchValue) {
        params.name = trimmedSearchValue;
      } else if (recentSearchSpecies) {
        params.species = recentSearchSpecies;
      }
    } else {
      dispatch(landingPageCharactersApiStartedAction());

      const recentSearchSpecies = localStorage.getItem(LOCAL_STORAGE_CONSTANTS.RECENT_SEARCH_SPECIES);
      params = {
        ...params_,
        page: 1,
      };
      const trimmedSearchValue = trimString(searchValue);
      if (trimString(searchValueServer) !== trimmedSearchValue && trimmedSearchValue) {
        params.name = trimmedSearchValue;
      } else if (recentSearchSpecies) {
        params.species = recentSearchSpecies;
      }
    }
    

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
