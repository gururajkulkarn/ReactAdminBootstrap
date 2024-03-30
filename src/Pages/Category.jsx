import React from "react";
import { useState } from "react";
import Sidebar from "../Sidebar";
import Header from "../Header";
const Category = () => {
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
        <h2>Create Category </h2>

        <div className="main-title">
          <div className="row">
            <div className="col-lg-12">
              <input type="text" className="form-control-lg m-2" placeholder="Enter category"/>
            </div>
            <div className="col-lg-12"> 
          <button className="btn btn-primary w-25 m-2">Add</button>
          </div>
          </div>
        </div>


      <div>
          <table className="table table-hover  table-dark w-50 table-bordered">
            <thead>
              <tr>
                <th scope="col">Si.No</th>
                <th scope="col">Category</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row">1</th>
                <td>Friends</td>
              </tr>
              <tr>
                <th scope="row">2</th>
                <td>Relatives</td>
              </tr>
              <tr>
                <th scope="row">3</th>
                <td >Buissness</td>
              </tr>
            </tbody>
          </table>
        </div>

        </main>

    </>
  );
};

export default Category;
