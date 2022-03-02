export const getMultipleEpisodesApiNormalizer = (response) => {
  return response.data.map((eachResult) => {
    return {
      name: eachResult.name,
      date: eachResult.air_date,
      episode: eachResult.episode,
    };
  });
};
