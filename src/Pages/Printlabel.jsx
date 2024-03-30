import React from 'react'
import { useState } from "react";
import Sidebar from "../Sidebar";
import Header from "../Header";


const Printlabel = () => {

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
        <h2>Print Labels </h2>

        <div className="col-lg-12">
              <input type="text" className="form-control-lg m-2 w-75" placeholder="Enter First Name"/>
            </div>

            <div className="col-lg-12">
              <textarea  type="text" className="form-control-lg m-2 w-75" />
            </div>

        </main>




    </>
  )
}

export default Printlabel