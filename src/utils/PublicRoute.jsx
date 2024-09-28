/** @format */

import React from "react";
import { useSelector } from "react-redux";
import { Redirect, Route } from "react-router-dom";
import { PATHS } from ".";

const PublicRoute = ({ component: Component, restricted, ...rest }) => {
  const { isAuth } = useSelector((state) => state.collections);

  return (
    <Route
      {...rest}
      render={(props) =>
        restricted && isAuth ? (
          <Redirect
            to={{
              pathname: PATHS.DASHBOARD,
            }}
          />
        ) : (
          <Component {...props} />
        )
      }
    />
  );
};

export default PublicRoute;
