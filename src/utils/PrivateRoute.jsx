/** @format */

import React from "react";
import { useSelector } from "react-redux";
import { Redirect, Route } from "react-router-dom";
import { PATHS } from ".";

const PrivateRoute = ({ component: Component, roles, ...rest }) => {
  const { isAuth } = useSelector((state) => state.collections);

  return (
    <Route
      {...rest}
      render={(props) =>
        isAuth ? (
          <Component key="private-route-component" {...props} />
        ) : (
          <Redirect
            key="private-route-redirect"
            to={{
              pathname: PATHS.SIGNIN,
            }}
          />
        )
      }
    />
  );
};

export default PrivateRoute;
