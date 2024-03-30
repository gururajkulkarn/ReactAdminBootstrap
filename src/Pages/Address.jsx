import React from "react";
import { useState } from "react";
import Sidebar from "../Sidebar";
import Header from "../Header";
const Address = () => {
  const [openSidebarToggle, setOpenSidebarToggle] = useState(false);

  const OpenSidebar = () => {
    setOpenSidebarToggle(!openSidebarToggle);
  };

  return (
    <>
      <Header OpenSidebar={OpenSidebar} />
      <Sidebar
        openSidebarToggle={openSidebarToggle}
        OpenSidebar={OpenSidebar}
      />

      <main className="main-container">
        <h2>Create Address </h2>
        <div className="main-title mt-5"></div>
        <div className="main-title">
          <div className="row">
            <div className="col-lg-4">
              <input
                type="text"
                className="form-control-lg m-2"
                placeholder="Enter state"
              />
              <button className="btn btn-primary w-25 m-2">Add</button>
            </div>
            <div className="col-lg-4">
              <input
                type="text"
                className="form-control-lg m-2"
                placeholder="Enter destrict"
              />
              <button className="btn btn-primary w-25 m-2">Add</button>
            </div>
            <div className="col-lg-4">
              <input
                type="text"
                className="form-control-lg m-2"
                placeholder="Enter taluka"
              />
              <button className="btn btn-primary w-25 m-2">Add</button>
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col-lg-4">
            <input
              type="text"
              className="form-control-lg m-2"
              placeholder="Enter village"
            />
            <button className="btn btn-primary w-25 m-2">Add</button>
          </div>
        </div>

        <div>
          <table className="table table-hover  table-dark w-100 table-bordered">
            <thead>
              <tr>
                <th scope="col">Si.No</th>
                <th scope="col">State</th>
                <th scope="col">Destrict</th>
                <th scope="col">Taluka</th>
                <th scope="col">Village</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row">1</th>
                <td>Karnataka</td>
                <td>Bidar</td>
                <td>Bidar</td>
                <td>Gumpa</td>
              </tr>
            </tbody>
          </table>
        </div>
      </main>
    </>
  );
};

export default Address;
