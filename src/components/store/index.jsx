
// import { createStore, combineReducers } from "redux";
// import { devToolsEnhancer } from "redux-devtools-extension";
import { infoReducer } from "./reducers/index";
import { userReducer } from "./reducers/userReducer";


// const rootReducer = combineReducers({
//   infoReducer,
//   userReducer
// });

// export const store = createStore(rootReducer, devToolsEnhancer());

import { applyMiddleware, combineReducers, createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";

const rootReducer = combineReducers({
  infoReducer,
  userReducer,
});

export const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)))