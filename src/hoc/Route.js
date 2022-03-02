import React from "react";

import { Route, Routes } from "react-router-dom";

import CharacterPage from "../containers/character_page/CharacterPage";
import { HOME, CHARACTER_PAGE } from "../utils/RouteConstants";


export const routes = () => (
  <Routes>
    <Route path={HOME} exact element={<></>} />
    <Route path={`${CHARACTER_PAGE}:id`} exact element={<CharacterPage />} />
    <Route path="*" element={<>Page not found</>} />
  </Routes>
);

export default routes;
