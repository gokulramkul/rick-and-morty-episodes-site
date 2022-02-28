import { CHARACTER_CONSTANTS } from "../../utils/constants";

export const getAllCharactersApiNormalizer = (response) => {
  return {
    ...response.data,
    results: response.data.results.map((eachResult) => {
      return {
        name: eachResult.name,
        isAlive: eachResult.status === CHARACTER_CONSTANTS.STATUS.ALIVE,
        gender: eachResult.gender,
        location: eachResult.location.name,
        image: eachResult.image,
      };
    }),
  };
};
