/** @format */

import React from "react";

import { NavLink, useLocation, useHistory } from "react-router-dom";
import { PATHS } from "../../utils";
import * as image from "../../resources/images";

const Sidebar = () => {
  const location = useLocation();
  const history = useHistory();
  const _close = () => {
    const htmlTag = document.documentElement;

    htmlTag.classList.remove(
      "light-style",
      "layout-navbar-fixed",
      "layout-compact",
      "layout-menu-fixed",
      "layout-menu-expanded"
    );
  };
  return (
    <aside
      id="layout-menu"
      className="layout-menu menu-vertical menu bg-menu-theme"
    >
      <div className="app-brand demo">
        <a
          href={"#"}
          onClick={() => history.push(PATHS.DASHBOARD)}
          className="app-brand-link w-50"
        >
          <img src={image.logo} className="img-fluid" />
        </a>

        <a
          onClick={() => _close()}
          href="#"
          className="layout-menu-toggle menu-link text-large ms-auto"
        >
          <i className="ti menu-toggle-icon d-none d-xl-block ti-sm align-middle"></i>
          <i className="ti ti-x d-block d-xl-none ti-sm align-middle"></i>
        </a>
      </div>

      <div className="menu-inner-shadow"></div>

      <ul className="menu-inner py-1">
        <li
          className={
            location.pathname === "/dashboard"
              ? "menu-item active"
              : "menu-item"
          }
        >
          <NavLink to={"/dashboard"} className="menu-link">
            <i className="menu-icon tf-icons ti ti-smart-home"></i>
            <div data-i18n="Dashboards">Dashboard</div>
          </NavLink>
        </li>

        <li className="menu-header small text-uppercase">
          <span className="menu-header-text" data-i18n="Apps & Pages">
            Apps &amp; Pages
          </span>
        </li>
        <li
          className={
            location.pathname === "/rooms" ? "menu-item active" : "menu-item"
          }
        >
          <NavLink to={"/rooms"} className="menu-link">
            <i className="menu-icon tf-icons ti ti-mail"></i>
            <div>Rooms</div>
          </NavLink>
        </li>
        <li
          className={
            location.pathname === "/guests" ? "menu-item active" : "menu-item"
          }
        >
          <NavLink to={"/guests"} className="menu-link">
            <i className="menu-icon tf-icons ti ti-messages"></i>
            <div>Guests</div>
          </NavLink>
        </li>
        <li
          className={
            location.pathname === "/expenses" ? "menu-item active" : "menu-item"
          }
        >
          <NavLink to={"/expenses"} className="menu-link">
            <i className="menu-icon tf-icons ti ti-calendar"></i>
            <div>Expenses</div>
          </NavLink>
        </li>

        <li
          className={
            location.pathname === "/invoices" ? "menu-item active" : "menu-item"
          }
        >
          <NavLink to={"/invoices"} className="menu-link">
            <i className="menu-icon tf-icons ti ti-file-dollar"></i>
            <div>Invoice</div>
          </NavLink>
        </li>
        <li
          className={
            location.pathname === "/users" ? "menu-item active" : "menu-item"
          }
        >
          <NavLink to={"/users"} className="menu-link">
            <i className="menu-icon tf-icons ti ti-users"></i>
            <div data-i18n="Users">Users</div>
          </NavLink>
        </li>
        <li
          className={
            location.pathname === "/role-permissions"
              ? "menu-item active"
              : "menu-item"
          }
        >
          <NavLink to={"/role-permissions"} className="menu-link">
            <i className="menu-icon tf-icons ti ti-settings"></i>
            <div data-i18n="Roles & Permissions">Roles & Permissions</div>
          </NavLink>
        </li>
      </ul>
    </aside>
  );
};

export default Sidebar;
