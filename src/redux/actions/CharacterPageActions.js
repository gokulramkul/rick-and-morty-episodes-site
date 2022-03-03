import { CHARACTER_PAGE } from "./ActionConstants";
import { store } from "../../Store";
import { getCharacterApiService } from "../../api/api_service/getCharacterApiService";
import { getMultipleEpisodesApiService } from "../../api/api_service/getMultipleEpisodesApiService";

export const characterPageSetDataAction = (data) => {
  return {
    type: CHARACTER_PAGE.SET_DATA,
    payload: data,
  };
};

const characterPageApiStartedAction = () => {
  return {
    type: CHARACTER_PAGE.API_STARTED,
  };
};

const characterPageApiFailedAction = () => {
  return {
    type: CHARACTER_PAGE.API_FAILED,
  };
};

export const characterPageClearStateAction = () => {
  return {
    type: CHARACTER_PAGE.CLEAR_DATA,
  };
};

export const characterPageGetCharacterDetailsAndEpisodesApiAction =
  (characterId) => async (dispatch) => {
    dispatch(characterPageApiStartedAction());

    try {
      const characterDetails = await getCharacterApiService(characterId);
      const { episodeIdList, ...otherCharacterFields } = characterDetails;
      const episodeList = await getMultipleEpisodesApiService(
        characterDetails.episodeIdList
      );
      dispatch(
        characterPageSetDataAction({
          isLoading: false,
          characterDetails: otherCharacterFields,
          episodeList,
        })
      );
    } catch (error) {
      dispatch(characterPageApiFailedAction());
    }
  };
