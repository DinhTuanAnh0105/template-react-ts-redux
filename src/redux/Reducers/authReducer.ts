import { IAction, IState } from "../../interfaces/redux";
import { actions } from "../Actions";
import { produce } from "immer";

const AuthReducer = (
  state = {
    auth: {
      isLogin: false,
      checkingAuth: true,
      error: null,
      user: {}
    } as IState,
  },
  action: IAction
) => {
  return produce(state, (draftState) => {
    switch (action.type) {
      case actions.CHECK_AUTH: {
        draftState.auth.checkingAuth = true;
        break;
      }
      case actions.CHECK_AUTH_SUCCESS: {
        draftState.auth.checkingAuth = false;
        break;
      }
      case actions.LOGIN_SUCCESS:
        draftState.auth.isLogin = true;
        draftState.auth.user = action.payload.user
        break;
      case actions.LOGIN_FAILED:
        draftState.auth.isLogin = false;
        break;
      default:
        break;
    }
  });
};

export default AuthReducer;
