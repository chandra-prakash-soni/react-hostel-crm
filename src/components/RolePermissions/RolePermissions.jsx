/** @format */

import React from "react";
import AdminLayout from "../Layout/AdminLayout";
const RolePermissions = () => {
  return (
    <AdminLayout>
      <div class="container-xxl flex-grow-1 container-p-y">
        <div class="row">
          <div class="card">
            <h5 class="card-header">Roles & Permissions</h5>
            <div class="card-datatable text-nowrap">
              <table class="dt-column-search table">
                <thead>
                  <tr>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Post</th>
                    <th>City</th>
                    <th>Date</th>
                    <th>Salary</th>
                  </tr>
                </thead>
                <tfoot>
                  <tr>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Post</th>
                    <th>City</th>
                    <th>Date</th>
                    <th>Salary</th>
                  </tr>
                </tfoot>
              </table>
            </div>
          </div>
        </div>
      </div>
    </AdminLayout>
  );
};

export default RolePermissions;
