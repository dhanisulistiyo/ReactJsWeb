import { combineReducers } from "redux";
import companyReducer from "./companyReducer";

const reducers = {
  companyReducer
};

const rootReducer = combineReducers(reducers);

export default rootReducer;
