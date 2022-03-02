import { CHARACTER_CONSTANTS } from "../../utils/Constants";

export const getAllCharactersApiNormalizer = (response) => {
  return {
    ...response.data,
    results: response.data.results.map((eachResult) => {
      return {
        id: eachResult.id,
        name: eachResult.name,
        isAlive: eachResult.status === CHARACTER_CONSTANTS.STATUS.ALIVE,
        gender:
          eachResult.gender === CHARACTER_CONSTANTS.GENDER.UNKNOWN
            ? eachResult.species
            : `${eachResult.species}(${eachResult.gender})`,
        location: eachResult.location.name,
        image: eachResult.image,
      };
    }),
  };
};
