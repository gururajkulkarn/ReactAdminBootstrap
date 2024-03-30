import React from 'react'
import { useState } from "react";
import Sidebar from "../Sidebar";
import Header from "../Header";

const Birthday = () => {
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
        <h2>Todays Birthday</h2>

        <div className="col-lg-12">
              <input type="text" className="form-control-lg m-2 w-75" placeholder="Enter First Name"/>
            </div>

        <div className="table-responsive">
          <table className="table table-hover  table-dark w-100 table-bordered">
            <thead>
              <tr>
                <th scope="col">Si.No</th>
                <th scope="col">First Name</th>
                <th scope="col">DOB</th>
                <th scope="col">Mobile Number</th>
                <th scope="col">Email</th>
                <th scope="col">Address</th>
                <th scope="col">Action</th>
                <th scope="col">Printlabels</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row">1</th>
                <td>Raju</td>
                <td>02/02/2024</td>
                <td>743535254</td>
                <td>raju@gmail.com</td>
                <td>Bidar</td>
                <td scope="col"><button className='btn btn-primary'>Send SMS</button></td>
                <td scope="col"><button className='btn btn-primary'>Print Label</button></td>

              </tr>
            </tbody>
          </table>
        </div>
        </main>


    </>
  )
}

export default Birthday