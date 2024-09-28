/** @format */

import React from "react";

const Footer = () => {
  return (
    <>
      <footer className="content-footer footer bg-footer-theme">
        <div className="container-xxl">
          <div className="footer-container d-flex align-items-center justify-content-between py-2 flex-md-row flex-column">
            <div>
              ©<script>document.write(new Date().getFullYear());</script>, made
              with ❤️ by
              <a href="#" target="_blank" className="fw-medium">
                Pixinvent
              </a>
            </div>
            <div className="d-none d-lg-inline-block">
              <a
                href="https://themeforest.net/licenses/standard"
                className="footer-link me-4"
                target="_blank"
              >
                License
              </a>
              <a
                href="https://1.envato.market/pixinvent_portfolio"
                target="_blank"
                className="footer-link me-4"
              >
                More Themes
              </a>

              <a
                href="https://demos.pixinvent.com/vuexy-html-admin-template/documentation/"
                target="_blank"
                className="footer-link me-4"
              >
                Documentation
              </a>

              <a
                href="https://pixinvent.ticksy.com/"
                target="_blank"
                className="footer-link d-none d-sm-inline-block"
              >
                Support
              </a>
            </div>
          </div>
        </div>
      </footer>
      <div className="content-backdrop fade"></div>

      <div className="layout-overlay layout-menu-toggle"></div>

      <div className="drag-target"></div>
    </>
  );
};

export default Footer;
