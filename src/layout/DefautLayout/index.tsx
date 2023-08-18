import React, { Fragment, Suspense } from "react";
import Header from "../../components/Header";
import Loading from "../../components/Loading";
import Footer from "../../components/Footer";
import { IDefaultLayout } from "../../interfaces";

const DefaultLayout: React.FC<IDefaultLayout> = ({children, isNoDefault}) => {
  //! define

  //! state

  //! function

  //! useEffect

  //! render
  return (
    <Fragment>
      <Header />
      <main>
        <Suspense fallback={<Loading />}>{children}</Suspense>
      </main>
      <Footer />
    </Fragment>
  );
};

export default DefaultLayout;
