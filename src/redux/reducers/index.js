import { combineReducers } from "redux";
import { cropDetailsReducer } from "./cropDetailsReducer";
const reducers = combineReducers({ allCropsDetails: cropDetailsReducer });

export default reducers;
