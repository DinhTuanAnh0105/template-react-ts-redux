import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { PathRoute } from "../constants/router/path";
import { actions } from "../redux/Actions";
import { GetAuthSelector } from "../redux/Selectors";
import Loading from "../components/Loading";
import Page404 from "../pages/Page404";

const withAuthentication = (WrappedComponent: any) => {
  return (props: any) => {
    //! define
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const { isLogged, isCheckingAuth } = GetAuthSelector();
    
    //! state

    //! function

    //! useEffect
    useEffect(() => {
      dispatch({ type: actions.CHECK_AUTH });
    }, []);

    useEffect(() => {
      if (!isCheckingAuth && !isLogged) {
        navigate(PathRoute.Login);
      }
    }, [isCheckingAuth]);

    //! render
    if (isCheckingAuth) {
      return <Loading />;
    }

    if (isLogged) {
      return <WrappedComponent {...props} />;
    } else {
      navigate(PathRoute.Page404);
    }
    return null
  };
};

export default withAuthentication;
