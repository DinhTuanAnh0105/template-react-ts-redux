import React, { Suspense } from "react";
import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter, Route, Routes, useRoutes } from "react-router-dom";
import router from "./constants/router/router";
import Loading from "./components/Loading";
import { PathRoute } from "./constants/router/path";
import Login from "./pages/Login";
import Home from "./pages/Home";
import Dashboard from "./pages/Dashboard";
import withAuthentication from "./HOCs/withAuthentication";

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.tsx</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

const App = () => {
  //! define
  // const content = useRoutes(router)

  //! render
  return (
    <Suspense fallback={<Loading />}>
      {/* {content} */}
      <BrowserRouter>
        <Routes>
          {router.map((item) => {
            return <Route path={item.path} element={item.component} />;
          })}
        </Routes>
      </BrowserRouter>
    </Suspense>
  );
};

export default App;
