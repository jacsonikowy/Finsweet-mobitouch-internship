import React from "react";
import "./ErrorPage.scss";
import { useRouteError } from "react-router-dom";

import Navbar from "../../components/Navbar/Navbar";

const ErrorPage: React.FC = () => {
  const error: any = useRouteError();

  return (
    <>
      <Navbar />
      <div className="errorPage">
        <h1>Unexpected Error</h1>
        <h1>{error.statusText || error.message}</h1>
      </div>
    </>
  );
};

export default ErrorPage;
