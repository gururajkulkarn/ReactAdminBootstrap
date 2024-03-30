import React, { useState } from "react";
import Sidebar from "../Sidebar";
import Header from "../Header";
const NewContact = () => {
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
        <div className="main-title">
          <h3>New Contact Form</h3>
        </div>
        <div className="row">
          <div className="col-lg-6">
            <input
              type="text"
              className="form-control-lg m-2 w-75"
              placeholder="First Name"
            />
          </div>
          <div className="col-lg-6">
            <input
              type="text"
              className="form-control-lg m-2 w-75"
              placeholder="Last Name"
            />
          </div>
        </div>
        <div className="row">
          <div className="col-lg-6">
            <input
              type="text"
              className="form-control-lg m-2 w-75"
              placeholder="DOB"
            />
          </div>
          <div className="col-lg-6">
            <input
              type="text"
              className="form-control-lg m-2 w-75"
              placeholder="DOA"
            />
          </div>
        </div>
        <div className="row">
          <div className="col-lg-6">
            <input
              type="text"
              className="form-control-lg m-2 w-75"
              placeholder="Mobile Number"
            />
          </div>
          <div className="col-lg-6">
            <input
              type="text"
              className="form-control-lg m-2 w-75"
              placeholder="Email"
            />
          </div>
        </div>
        <div className="row">
          <div className="col-lg-6">
            <input
              type="text"
              className="form-control-lg m-2 w-75"
              placeholder="Address"
            />
          </div>
          <div className="col-lg-6">
            <select
              class="form-select-lg m-2 w-75"
              aria-label="Default select example"
            >
              <option selected>Select Category</option>
              <option value="1">One</option>
              <option value="2">Two</option>
              <option value="3">Three</option>
            </select>{" "}
          </div>
        </div>
        <div className="row">
            <div className="col-lg-6">
              <input type="text" className="form-control-lg m-2 w-75" placeholder="Occupation" />
            </div>
            <div className="col-lg-6">
              <input type="file" className="form-control-lg m-2 w-75" placeholder="Upload"/>
            </div>
          
          </div>
          <div className="row">
            <div className="col-lg-8">
<button className="btn btn-primary m-2">Add Family Member</button>
            </div>
            <div className="col-lg-4">
            </div>
          
          </div>



          <div className="table-responsive">
          <table className="table table-hover  table-dark w-100 table-bordered">
            <thead>
              <tr>
                <th scope="col">Si.No</th>
                <th scope="col">Profile Pic</th>
                <th scope="col">First Name</th>
                <th scope="col">Last Name</th>
                <th scope="col">DOB</th>
                <th scope="col">DOA</th>
                <th scope="col">Mobile Number</th>
                <th scope="col">Email id</th>
                <th scope="col">Address</th>
                <th scope="col">Occupation</th>

              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row">1</th>
                <td>Karnataka</td>
                <td>Bidar</td>
                <td>Bidar</td>
                <td>Gumpa</td>
                <th >1</th>
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

export default NewContact;
