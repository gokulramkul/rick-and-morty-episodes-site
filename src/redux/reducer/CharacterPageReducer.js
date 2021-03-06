import { CHARACTER_PAGE } from "../actions/ActionConstants";

const initialState = {
  isLoading: false,
  isError: false,
  characterDetails: {
    image: "",
    name: "",
    isAlive: "",
    gender: "",
    location: "",
    episodeCount: "",
  },
  episodeList: [],
};

export default function CharacterPageReducer(state = initialState, action) {
  switch (action.type) {
    case CHARACTER_PAGE.API_STARTED:
      return {
        ...state,
        isLoading: true,
      };
    case CHARACTER_PAGE.API_FAILED:
      return {
        ...initialState,
        isError: true,
      };
    case CHARACTER_PAGE.SET_DATA:
      return {
        ...state,
        ...action.payload,
      };
    case CHARACTER_PAGE.CLEAR_DATA:
      return {
        ...initialState,
      };
    default:
      return state;
  }
}
