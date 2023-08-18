import { combineReducers as combineReducersRedux } from "redux";

import authReducer from "./authReducer";

// export default combineReducers ({
//   authReducer
// })

const combineReducers = combineReducersRedux({
  authReducer,
});

export { combineReducers };

export type RootState = ReturnType<typeof combineReducers>;
