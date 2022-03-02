export const BASE_URL = "https://rickandmortyapi.com/api/";

export const API_URLS = {
  GET_ALL_CHARACTERS: `${BASE_URL}character`,
  GET_CHARACTER: (id) => `${BASE_URL}character/${id}`,
  GET_MULTIPLE_EPISODES: (ids) => `${BASE_URL}episode/${ids}`,
};
