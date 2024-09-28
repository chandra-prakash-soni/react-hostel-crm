/** @format */

import React from "react";
import Sidebar from "./Sidebar";
import Header from "./Header";
import Footer from "./Footer";

const AdminLayout = ({ children }) => {
  return (
    <div className="layout-wrapper layout-content-navbar">
      <div className="layout-container">
        <Sidebar />
        <div className="layout-page">
          <Header />
          <div className="content-wrapper">{children && children}</div>
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default AdminLayout;
