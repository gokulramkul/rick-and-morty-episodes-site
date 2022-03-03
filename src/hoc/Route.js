import React from "react";

import { Route, Routes } from "react-router-dom";

import CharacterPage from "../containers/character_page/CharacterPage";
import PageNotFound from "../components/page_not_found/PageNotFound";
import { HOME, CHARACTER_PAGE } from "../utils/RouteConstants";

export const routes = () => (
  <Routes>
    <Route path={HOME} element={<></>} />
    <Route path={`${CHARACTER_PAGE}:id`} element={<CharacterPage />} />
    <Route path="*" element={<PageNotFound />} />
  </Routes>
);

export default routes;
