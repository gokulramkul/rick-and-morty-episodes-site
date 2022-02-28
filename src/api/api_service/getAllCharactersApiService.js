import axios from "axios";
import { getAllCharactersApiNormalizer } from "../api_normalizer/getAllCharactersApiNormalizer";
import { API_URLS } from "../api_urls/ApiUrls";

export const getAllCharactersApiService = (params = {}) =>
  new Promise((resolve, reject) => {
    if (navigator.onLine) {
      axios
        .get(API_URLS.GET_ALL_CHARACTERS, params)
        .then((response) => {

          resolve(getAllCharactersApiNormalizer(response));
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
