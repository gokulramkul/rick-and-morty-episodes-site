import { combineReducers } from "redux";

import LandingPageReducer from './LandingPageReducer';
import CharacterPageReducer from "./CharacterPageReducer";

export default combineReducers({
  LandingPageReducer,
  CharacterPageReducer,
});
