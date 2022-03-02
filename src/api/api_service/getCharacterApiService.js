import axios from "axios";

import { getCharacterApiNormalizer } from "../api_normalizer/getCharacterApiNormalizer";
import { API_URLS } from "../api_urls/ApiUrls";

export const getCharacterApiService = (id) =>
  new Promise((resolve, reject) => {
    if (navigator.onLine) {
      axios
        .get(API_URLS.GET_CHARACTER(id))
        .then((response) => {
          resolve(getCharacterApiNormalizer(response));
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
