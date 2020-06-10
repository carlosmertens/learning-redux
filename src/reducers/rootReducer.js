// This is the root reducer! It is the store manager for all the reducers
// To make a rootreducer:
// 1. Get a method from redux, called combineReducers
import { combineReducers } from "redux";

// 2. Get each individual reducer
import frozenReducer from "./frozenReducer";
import produceReducer from "./produceReducer";
import meatReducer from "./meatReducer";

// 3. Call combineReducers and hand it an object
// Each key in combineReducers will be a piece of state in the redux store
// Each value, will be the value of that piece of state in the redux store
const rootReducer = combineReducers({
  frozen: frozenReducer,
  produce: produceReducer,
  meat: meatReducer,
});

export default rootReducer;
