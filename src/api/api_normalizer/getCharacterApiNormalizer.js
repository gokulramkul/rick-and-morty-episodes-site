import { CHARACTER_CONSTANTS } from "../../utils/Constants";

export const getCharacterApiNormalizer = (response) => {
  const { data } = response;
  return {
    image: data.image,
    name: data.name,
    isAlive: data.status === CHARACTER_CONSTANTS.STATUS.ALIVE,
    gender:
      data.gender === CHARACTER_CONSTANTS.GENDER.UNKNOWN
        ? data.species
        : `${data.species}(${data.gender})`,
    location: data.location.name,
    episodeCount: `${data.episode.length} Episodes`,
    episodeIdList: data.episode.map((eachEpisode) =>
      Number(eachEpisode.match(/\d+$/)[0])
    ),
  };
};
