/** @format */

import React, { useEffect } from "react";
import AdminLayout from "../Layout/AdminLayout";
import { useDispatch, useSelector } from "react-redux";

import { getGuests } from "../../redux/actions/APIs";
import { useHistory, useParams } from "react-router-dom";
import { getFormatDt } from "../../utils/helper";
const GuestDetails = () => {
  const dispatch = useDispatch();
  const history = useHistory();

  const { guestObj } = useSelector((state) => state.collections);
  useEffect(() => {
    if (!guestObj) {
      dispatch(getGuests());
    }
  }, [guestObj, dispatch]);
  let userDetails = history.location.state;
  return (
    <AdminLayout>
      <div className="container-xxl flex-grow-1 container-p-y">
        <h4 className="py-3 mb-4">
          <span className="text-muted fw-light">User Profile /</span> Profile
        </h4>

        <div className="row">
          <div className="col-12">
            <div className="card mb-4">
              <div className="user-profile-header-banner">
                <img
                  src="/img/pages/profile-banner.png"
                  alt="Banner image"
                  className="rounded-top"
                />
              </div>
              <div className="user-profile-header d-flex flex-column flex-sm-row text-sm-start text-center mb-4">
                <div className="flex-shrink-0 mt-n2 mx-sm-0 mx-auto">
                  <img
                    src="/img/avatars/14.png"
                    alt="user image"
                    className="d-block h-auto ms-0 ms-sm-4 rounded user-profile-img"
                  />
                </div>
                <div className="flex-grow-1 mt-3 mt-sm-5">
                  <div className="d-flex align-items-md-end align-items-sm-start align-items-center justify-content-md-between justify-content-start mx-4 flex-md-row flex-column gap-4">
                    <div className="user-profile-info">
                      <h4>{userDetails?.name}</h4>
                      <ul className="list-inline mb-0 d-flex align-items-center flex-wrap justify-content-sm-start justify-content-center gap-2">
                        <li className="list-inline-item d-flex gap-1">
                          <i className="ti ti-color-swatch"></i>{" "}
                          {userDetails?.purpose}
                        </li>
                        <li className="list-inline-item d-flex gap-1">
                          <i className="ti ti-map-pin"></i>{" "}
                          {userDetails?.address}
                        </li>
                        <li className="list-inline-item d-flex gap-1">
                          <i className="ti ti-calendar"></i> Joined{" "}
                          {getFormatDt(userDetails?.created_at)}
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col-xl-4 col-lg-5 col-md-5">
            <div className="card mb-4">
              <div className="card-body">
                <small className="card-text text-uppercase">About</small>
                <ul className="list-unstyled mb-4 mt-3">
                  <li className="d-flex align-items-center mb-3">
                    <i className="ti ti-user text-heading"></i>
                    <span className="fw-medium mx-2 text-heading">
                      Father Name:
                    </span>{" "}
                    <span>{userDetails?.father_name}</span>
                  </li>
                  <li className="d-flex align-items-center mb-3">
                    <i className="ti ti-user text-heading"></i>
                    <span className="fw-medium mx-2 text-heading">
                      Aadhar No:
                    </span>{" "}
                    <span>{userDetails?.adhar_number}</span>
                  </li>
                  <li className="d-flex align-items-center mb-3">
                    <i className="ti ti-check text-heading"></i>
                    <span className="fw-medium mx-2 text-heading">
                      Status:
                    </span>{" "}
                    <span>
                      {userDetails?.active === "Yes" ? "Active" : "Not Active"}
                    </span>
                  </li>
                </ul>
                <small className="card-text text-uppercase">Contacts</small>
                <ul className="list-unstyled mb-4 mt-3">
                  <li className="d-flex align-items-center mb-3">
                    <i className="ti ti-phone-call"></i>
                    <span className="fw-medium mx-2 text-heading">
                      Contact:
                    </span>{" "}
                    <span>
                      {userDetails?.mobile
                        ? userDetails?.mobile
                        : "Not Available"}
                    </span>
                  </li>
                  <li className="d-flex align-items-center mb-3">
                    <i className="ti ti-phone-call"></i>
                    <span className="fw-medium mx-2 text-heading">
                      Alternate:
                    </span>{" "}
                    <span>
                      {userDetails?.alternate_mobile
                        ? userDetails?.alternate_mobile
                        : "Not Available"}
                    </span>
                  </li>
                  <li className="d-flex align-items-center mb-3">
                    <i className="ti ti-brand-skype"></i>
                    <span className="fw-medium mx-2 text-heading">
                      Skype:
                    </span>{" "}
                    <span>john.doe</span>
                  </li>
                  <li className="d-flex align-items-center mb-3">
                    <i className="ti ti-mail"></i>
                    <span className="fw-medium mx-2 text-heading">
                      Email:
                    </span>{" "}
                    <span>
                      {userDetails?.email
                        ? userDetails?.email
                        : "Not Available"}
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="col-xl-8 col-lg-7 col-md-7">
            <div className="card card-action mb-4">
              <div className="card-header align-items-center">
                <h5 className="card-action-title mb-0">Activity Timeline</h5>
                <div className="card-action-element">
                  <div className="dropdown">
                    <button
                      type="button"
                      className="btn dropdown-toggle hide-arrow p-0"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    >
                      <i className="ti ti-dots-vertical text-muted"></i>
                    </button>
                    <ul className="dropdown-menu dropdown-menu-end">
                      <li>
                        <a className="dropdown-item" href="javascript:void(0);">
                          Share timeline
                        </a>
                      </li>
                      <li>
                        <a className="dropdown-item" href="javascript:void(0);">
                          Suggest edits
                        </a>
                      </li>
                      <li>
                        <hr className="dropdown-divider" />
                      </li>
                      <li>
                        <a className="dropdown-item" href="javascript:void(0);">
                          Report bug
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="card-body pb-0">
                <ul className="timeline ms-1 mb-0">
                  <li className="timeline-item timeline-item-transparent">
                    <span className="timeline-point timeline-point-primary"></span>
                    <div className="timeline-event">
                      <div className="timeline-header">
                        <h6 className="mb-0">Client Meeting</h6>
                        <small className="text-muted">Today</small>
                      </div>
                      <p className="mb-2">Project meeting with john @10:15am</p>
                      <div className="d-flex flex-wrap">
                        <div className="avatar me-2">
                          <img
                            src="/img/avatars/3.png"
                            alt="Avatar"
                            className="rounded-circle"
                          />
                        </div>
                        <div className="ms-1">
                          <h6 className="mb-0">Lester McCarthy (Client)</h6>
                          <span>CEO of Infibeam</span>
                        </div>
                      </div>
                    </div>
                  </li>
                  <li className="timeline-item timeline-item-transparent">
                    <span className="timeline-point timeline-point-success"></span>
                    <div className="timeline-event">
                      <div className="timeline-header">
                        <h6 className="mb-0">
                          Create a new project for client
                        </h6>
                        <small className="text-muted">2 Day Ago</small>
                      </div>
                      <p className="mb-0">Add files to new design folder</p>
                    </div>
                  </li>
                  <li className="timeline-item timeline-item-transparent">
                    <span className="timeline-point timeline-point-danger"></span>
                    <div className="timeline-event">
                      <div className="timeline-header">
                        <h6 className="mb-0">Shared 2 New Project Files</h6>
                        <small className="text-muted">6 Day Ago</small>
                      </div>
                      <p className="mb-2">
                        Sent by Mollie Dixon
                        <img
                          src="/img/avatars/4.png"
                          className="rounded-circle me-3"
                          alt="avatar"
                          height="24"
                          width="24"
                        />
                      </p>
                      <div className="d-flex flex-wrap gap-2 pt-1">
                        <a href="javascript:void(0)" className="me-3">
                          <img
                            src="/img/icons/misc/doc.png"
                            alt="Document image"
                            width="15"
                            className="me-2"
                          />
                          <span className="fw-medium text-heading">
                            App Guidelines
                          </span>
                        </a>
                        <a href="javascript:void(0)">
                          <img
                            src="/img/icons/misc/xls.png"
                            alt="Excel image"
                            width="15"
                            className="me-2"
                          />
                          <span className="fw-medium text-heading">
                            Testing Results
                          </span>
                        </a>
                      </div>
                    </div>
                  </li>
                  <li className="timeline-item timeline-item-transparent border-transparent">
                    <span className="timeline-point timeline-point-info"></span>
                    <div className="timeline-event">
                      <div className="timeline-header">
                        <h6 className="mb-0">Project status updated</h6>
                        <small className="text-muted">10 Day Ago</small>
                      </div>
                      <p className="mb-0">Woocommerce iOS App Completed</p>
                    </div>
                  </li>
                </ul>
              </div>
            </div>

            <div className="card mb-4">
              <div className="card-datatable table-responsive">
                <table className="datatables-projects table border-top">
                  <thead>
                    <tr>
                      <th></th>
                      <th></th>
                      <th>Name</th>
                      <th>Leader</th>
                      <th>Team</th>
                      <th className="w-px-200">Status</th>
                      <th>Action</th>
                    </tr>
                  </thead>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </AdminLayout>
  );
};

export default GuestDetails;
