import axios from "axios";

import { getMultipleEpisodesApiNormalizer } from "../api_normalizer/getMultipleEpisodesApiNormalizer";
import { API_URLS } from "../api_urls/ApiUrls";

export const getMultipleEpisodesApiService = (ids) =>
  new Promise((resolve, reject) => {
    if (navigator.onLine) {
      axios
        .get(API_URLS.GET_MULTIPLE_EPISODES(ids))
        .then((response) => {
          resolve(getMultipleEpisodesApiNormalizer(response));
        })
        .catch((error) => {
          reject(error);
        });
    } else {
      reject(
        new Error({
          network: "offline",
        })
      );
    }
  });
