export const getMultipleEpisodesApiNormalizer = (response) => {
  let results = [];
  if (Array.isArray(response.data)) results = response.data;
  else results = [response.data];
  return results.map((eachResult) => {
    return {
      name: eachResult.name,
      date: eachResult.air_date,
      episode: eachResult.episode,
    };
  });
};
