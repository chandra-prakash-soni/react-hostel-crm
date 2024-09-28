/** @format */

import React, { useEffect } from "react";
import AdminLayout from "../Layout/AdminLayout";
import { useDispatch, useSelector } from "react-redux";
import { getDashboard } from "../../redux/actions/APIs";
import RevenueCard from "./RevenueCard";
const Dashboard = () => {
  const dispatch = useDispatch();
  const { dashboardObj } = useSelector((state) => state.collections);
  useEffect(() => {
    if (!dashboardObj) {
      dispatch(getDashboard());
    }
  }, []);

  console.log(dashboardObj?.data);
  return (
    <AdminLayout>
      <div className="container-xxl flex-grow-1 container-p-y">
        <div className="row">
          <div className="col-xl-8 mb-4 col-lg-7 col-12">
            <div className="card h-100">
              <div className="card-header">
                <div className="d-flex justify-content-between mb-3">
                  <h5 className="card-title mb-0">Monthly Performance</h5>
                  <small className="text-muted">Budget vs Actuals</small>
                </div>
              </div>
              <div className="card-body">
                <div className="row gy-3">
                  <div className="col-md-3 col-6">
                    <div className="d-flex align-items-center">
                      <div className="badge rounded-pill bg-label-success me-3 p-2">
                        <i className="ti ti-credit-card ti-sm"></i>
                      </div>
                      <div className="card-info">
                        <h5 className="mb-0">
                          {dashboardObj?.data?.monthlyEarning}
                        </h5>
                        <small>Income</small>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-3 col-6">
                    <div className="d-flex align-items-center">
                      <div className="badge rounded-pill bg-label-danger me-3 p-2">
                        <i className="ti ti-credit-card ti-sm"></i>
                      </div>
                      <div className="card-info">
                        <h5 className="mb-0">
                          {dashboardObj?.data?.monthlyExpense}
                        </h5>
                        <small>Expense</small>
                      </div>
                    </div>
                  </div>

                  <div className="col-md-12 col-12">
                    <div className="d-flex align-items-center">
                      <div className="badge rounded-pill bg-label-success me-3 p-2">
                        <i className="ti ti-currency-rupee ti-sm"></i>
                      </div>
                      <div className="card-info">
                        <h5 className="mb-0">
                          {dashboardObj?.data?.monthlyEarning -
                            dashboardObj?.data?.monthlyExpense}
                        </h5>
                        <small>Overall Profit Since Start</small>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="col-lg-6 mb-4 mb-lg-0">
            <RevenueCard
              title="Previous Payment Pending"
              data={dashboardObj?.data?.previousPendingAmount}
            />
          </div>

          <div className="col-lg-6 mb-4 mb-lg-0">
            <RevenueCard />
          </div>

          <div className="col-lg-6 mb-4 mb-lg-0 mt-3">
            <RevenueCard />
          </div>
        </div>
      </div>
    </AdminLayout>
  );
};

export default Dashboard;
