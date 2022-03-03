import { LANDING_PAGE } from "../actions/ActionConstants";

const initialState = {
  searchValue: "",
  characterList: {
    isLoading: false,
    isLoadMoreLoading: false,
    list: [],
    page: 1,
    hasMore: false,
    searchValue: "",
    hasRecommendations: false,
  },
};

export default function LandingPageReducer(state = initialState, action) {
  switch (action.type) {
    case LANDING_PAGE.SET_SEARCH_VALUE:
      return {
        ...state,
        searchValue: action.payload,
      };
    case LANDING_PAGE.CHARACTERS_API_STARTED:
      return {
        ...state,
        characterList: {
          ...state.characterList,
          isLoading: true,
        },
      };
    case LANDING_PAGE.CHARACTERS_API_LOAD_MORE_STARTED:
      return {
        ...state,
        characterList: {
          ...state.characterList,
          isLoadMoreLoading: true,
        },
      };
    case LANDING_PAGE.CHARACTERS_API_SUCCESS:
      const {
        response: { info, results },
        isPaginated,
        params,
      } = action.payload;
      return {
        ...state,
        characterList: {
          isLoading: false,
          isLoadMoreLoading: false,
          list: isPaginated
            ? [...state.characterList.list, ...results]
            : results,
          page: params.page || state.characterList.page,
          hasMore: !!info.next,
          searchValue: params.name || "",
          hasRecommendations: !!params.species,
        },
      };
    case LANDING_PAGE.CHARACTERS_API_FAILED:
      return {
        ...state,
        characterList: {
          ...state.characterList,
          isLoading: false,
          isLoadMoreLoading: false,
          list: [],
          hasMore: false,
          searchValue: action.payload.params.name || "",
        },
      };
    default:
      return state;
  }
}
