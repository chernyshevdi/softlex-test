import { combineReducers } from "redux";
import { constructorReducer } from "./question";
import { loginReducer } from "./login";

export const rootReducer = combineReducers({
  constructorReducer,
  loginReducer,
});
