import { combineReducers } from "redux";

import matrixReducer from "./reducers/matrix";

const rootReducer = combineReducers({
  matrix: matrixReducer,
});

export default rootReducer;
