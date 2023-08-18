import { applyMiddleware, createStore } from "redux";
import createSagaMiddleware from "redux-saga";
import { combineReducers } from "./Reducers";
import rootSaga from "./Sagas";

const sagaMiddleware = createSagaMiddleware();
const middleware = [sagaMiddleware];

export const store = createStore(
  combineReducers,
  applyMiddleware(...middleware)
);

sagaMiddleware.run(rootSaga);
