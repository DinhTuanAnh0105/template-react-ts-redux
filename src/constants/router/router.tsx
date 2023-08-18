import { lazy } from "react";
import { PathRoute } from "./path";

const Home = lazy(() => import("../../pages/Home/index"));
const Page404 = lazy(() => import("../../pages/Page404/index"));
const Dashboard = lazy(() => import("../../pages/Dashboard/index"));
const Login = lazy(() => import("../../pages/Login/index"));

const router = [
  {
    path: PathRoute.Home,
    name: "Home",
    component: <Home />,
    isPrivate: true,
  },
  {
    path: PathRoute.Dashboard,
    name: "Dashboard",
    component: <Dashboard />,
    isPrivate: true,
  },
  {
    path: PathRoute.Login,
    name: "Login",
    component: <Login />,
    isPrivate: false,
  },
  {
    path: PathRoute.Page404,
    name: "404",
    component: <Page404 />,
    isPrivate: false,
  },
];

export default router;
