import { LANDING_PAGE } from "../actions/ActionConstants";

const initialState = {
  searchValue: "",
  characterList: {
    isLoading: false,
    isLoadMoreLoading: false,
    list: [],
    page: 1,
    totalCount: 0,
    totalPages: 0,
  },
};

export default function ResetPasswordReducer(state = initialState, action) {
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
      } = action.payload;
      return {
        ...state,
        characterList: {
          isLoading: false,
          isLoadMoreLoading: false,
          list: isPaginated
            ? [...state.characterList.list, ...results]
            : results,
          page: isPaginated ? state.characterList.page + 1 : state.characterList.page,
          totalCount: info.count,
          totalPages: info.pages,
        },
      };
    default:
      return state;
  }
}
