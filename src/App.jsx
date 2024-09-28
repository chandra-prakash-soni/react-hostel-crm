/** @format */

import React, { Suspense } from "react";

import { BrowserRouter, Switch } from "react-router-dom";

import { Home } from "./components/Home";
import { Dashboard } from "./components/Dashboard";
import { Rooms } from "./components/Rooms";
import { Guests, GuestDetails } from "./components/Guests";
import { Expenses } from "./components/Expenses";
import { Invoices } from "./components/Invoices";
import { Users } from "./components/Users";
import { RolePermissions } from "./components/RolePermissions";
import Error404 from "./components/Error/Error404";
import PublicRoute from "./utils/PublicRoute";
import { PATHS } from "./utils";
import PrivateRoute from "./utils/PrivateRoute";
const App = () => {
  return (
    <>
      <Suspense fallback={<div>Loading...</div>}>
        <BrowserRouter>
          <Switch>
            <PublicRoute
              exact
              path={PATHS.SIGNIN}
              restricted={true}
              component={Home}
            />
            <PrivateRoute path={PATHS.DASHBOARD} component={Dashboard} />
            <PrivateRoute path={PATHS.ROOMS} component={Rooms} />
            <PrivateRoute
              path={PATHS.GUESTS}
              component={Guests}
              restricted={true}
            />
            <PrivateRoute path={PATHS.GUESTDETAIL} component={GuestDetails} />
            <PrivateRoute path={PATHS.EXPENSES} component={Expenses} />
            <PrivateRoute path={PATHS.INVOICES} component={Invoices} />
            <PrivateRoute path={PATHS.USERS} component={Users} />
            <PrivateRoute
              path={PATHS.PERMISSIONS}
              component={RolePermissions}
            />
            <PublicRoute path="*" component={Error404} />
          </Switch>
        </BrowserRouter>
      </Suspense>
    </>
  );
};

export default App;
