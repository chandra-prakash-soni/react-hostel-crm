/** @format */

import React from "react";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import { PATHS } from "../../utils";

const RevenueCard = ({ data, title }) => {
  const history = useHistory();

  const _profile = (object) => {
    history.push({
      pathname: PATHS.GUESTDETAIL.replace(":id", object.guest_id),
      state: object,
    });
  };

  return (
    <div className="card h-100">
      <div className="card-header d-flex justify-content-between">
        <h5 className="card-title m-0 me-2">
          Previous Payment Pending {data && "[" + data?.length + "]"}
        </h5>
        {/* <div className="dropdown">
          <button
            className="btn p-0"
            type="button"
            id="teamMemberList"
            data-bs-toggle="dropdown"
            aria-haspopup="true"
            aria-expanded="false"
          >
            <i className="ti ti-dots-vertical ti-sm text-muted"></i>
          </button>
          <div
            className="dropdown-menu dropdown-menu-end"
            aria-labelledby="teamMemberList"
          >
            <a className="dropdown-item" href="#">
              Download
            </a>
            <a className="dropdown-item" href="#">
              Refresh
            </a>
            <a className="dropdown-item" href="#">
              Share
            </a>
          </div>
        </div> */}
      </div>
      <div className="table-responsive">
        <table className="table table-borderless border-top">
          <thead className="border-bottom">
            <tr>
              <th>Name</th>
              <th>Amount</th>
              <th>STATUS</th>
              <th>TREND</th>
            </tr>
          </thead>
          <tbody>
            {data &&
              data.length > 0 &&
              data.map((val, index) => (
                <tr key={index}>
                  <td>
                    <div className="d-flex justify-content-start align-items-center">
                      <div
                        className="d-flex flex-column"
                        onClick={() => _profile(val)}
                      >
                        <small className="text-muted">{val.guest_name}</small>
                      </div>
                    </div>
                  </td>
                  <td>
                    <div className="d-flex flex-column">
                      <p className="mb-0 fw-medium">{val.pending_amount}</p>
                      {/* <small className="text-muted text-nowrap">
                        17 Mar 2022
                      </small> */}
                    </div>
                  </td>
                  <td>
                    <span className="badge bg-label-success">Verified</span>
                  </td>
                  <td>
                    <p className="mb-0 fw-medium">+$1,678</p>
                  </td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default RevenueCard;
