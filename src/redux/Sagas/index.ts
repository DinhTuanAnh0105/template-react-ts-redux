import { put, takeLatest } from "redux-saga/effects";
import { actions } from "../Actions";
import authServices from "../../services/authServices";
import httpMethod from "../../services/httpMethod";
import { PathRoute } from "../../constants/router/path";

function* checkAuth({ payload }: any) {
  const userStorage = authServices.getUserInStorage();
  if (userStorage) {
    httpMethod.attachTokenToHeader(userStorage?.token);
    yield put({ type: actions.LOGIN_SUCCESS, payload: { user: userStorage } });
  } else {
    yield put({ type: actions.LOGIN_FAILED });
  }
  yield put({ type: actions.CHECK_AUTH_SUCCESS });
}

function* login({ payload }: any) {
  const { username, password } = payload;

  //call api login => add token to header, save info to locastorage

  if (username === "anhdt" && password === "anhdt") {
    const user = {
      name: "name",
      email: "email",
      token: "token",
    };
    authServices.putUserToStorage(user);
    yield put({ type: actions.LOGIN_SUCCESS, payload: { user } });
  } else {
    yield put({ type: actions.LOGIN_FAILED });
  }
}

function* logout() {
  authServices.clearUser();
  yield put({ type: actions.LOGIN_FAILED });
  window.location.href = PathRoute.Login;
}

export default function* rootSaga() {
  yield takeLatest(actions.LOGIN, login);
  yield takeLatest(actions.CHECK_AUTH, checkAuth);
  yield takeLatest(actions.LOGOUT, logout);
}
