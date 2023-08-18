import { useSelector } from "react-redux";
import { RootState } from "../Reducers";
import { useMemo } from "react";

export const GetAuthSelector = () => {
  const auth = useSelector((state: RootState) => state.authReducer.auth);

  const { isLogin, checkingAuth, user } = auth;

  const result = useMemo(() => {
    return {
      isLogged: isLogin,
      isCheckingAuth: checkingAuth,
      user,
    };
  }, [isLogin, checkingAuth, user]);

  return result;
};
