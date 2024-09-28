/** @format */

import React, { useEffect } from "react";
import AdminLayout from "../Layout/AdminLayout";
import { useDispatch, useSelector } from "react-redux";
import { getRooms } from "../../redux/actions/APIs";
const Rooms = () => {
  const dispatch = useDispatch();
  const { roomsObj } = useSelector((state) => state.collections);

  useEffect(() => {
    if (!roomsObj) {
      dispatch(getRooms());
    }
  }, [roomsObj, dispatch]);
  console.log(roomsObj);
  return (
    <AdminLayout>
      <div className="container-xxl flex-grow-1 container-p-y">
        <div className="row">
          <div className="card">
            <h5 className="card-header">Rooms</h5>
            <div className="card-datatable text-nowrap">
              <table className="dt-column-search table">
                <thead>
                  <tr>
                    <th>S. No</th>
                    <th>Room No</th>
                  </tr>
                </thead>
                <tbody>
                  {roomsObj?.data.map((vl, ky) => (
                    <tr key={ky}>
                      <td>{ky + 1}</td>
                      <td>{vl.roomNo}</td>
                    </tr>
                  ))}
                </tbody>
                <tfoot>
                  <tr>
                    <th>S. No</th>
                    <th>Room No</th>
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

export default Rooms;
