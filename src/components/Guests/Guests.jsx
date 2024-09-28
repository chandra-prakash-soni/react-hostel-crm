/** @format */

import React, { useEffect } from "react";
import AdminLayout from "../Layout/AdminLayout";
import { useDispatch, useSelector } from "react-redux";

import { getGuests } from "../../redux/actions/APIs";
import { NavLink, useHistory } from "react-router-dom/cjs/react-router-dom.min";
import { PATHS } from "../../utils";
const Guests = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const { guestObj } = useSelector((state) => state.collections);

  useEffect(() => {
    if (!guestObj) {
      dispatch(getGuests("Yes"));
    }
  }, [guestObj, dispatch]);
  console.log(guestObj);
  const _profile = (object) => {
    history.push({
      pathname: PATHS.GUESTDETAIL.replace(":id", object.id),
      state: object,
    });
  };
  return (
    <AdminLayout>
      <div class="container-xxl flex-grow-1 container-p-y">
        <div class="row">
          <div class="card">
            <h5 class="card-header">Guests</h5>
            <div class="card-datatable text-nowrap">
              <table class="dt-column-search table">
                <thead>
                  <tr>
                    <th>Name</th>
                    <th>Mobile</th>
                  </tr>
                </thead>
                <tbody>
                  {guestObj &&
                    guestObj.data.map((vl, ky) => (
                      <tr key={ky}>
                        <td onClick={() => _profile(vl)}>{vl.name}</td>
                        <td>{vl.mobile}</td>
                      </tr>
                    ))}
                </tbody>
                <tfoot>
                  <tr>
                    <th>Name</th>
                    <th>Mobile</th>
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

export default Guests;
