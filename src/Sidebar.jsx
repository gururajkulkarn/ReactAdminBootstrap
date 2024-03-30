import React, { useState } from 'react'
import { Link, Outlet } from 'react-router-dom'
import { BsGrid1X2Fill, BsFillArchiveFill, BsFillGrid3X3GapFill  } from 'react-icons/bs'
import { MdContacts } from "react-icons/md";
import { FaBirthdayCake } from "react-icons/fa";
import { MdLocalPrintshop } from "react-icons/md";

function Sidebar({ openSidebarToggle, OpenSidebar }) {
  
  const [showSubMenu, setShowSubMenu] = useState(false);

  const handleDashboardClick = () => {
    setShowSubMenu(!showSubMenu);
  };

  return (
    <>
      <aside id="sidebar" className={openSidebarToggle ? "sidebar-responsive" : ""}>
        <div className='sidebar-title'>
        <div className='sidebar-brand'>
            <MdContacts className='icon_header' /> Contact Management
          </div>
      
          <span className='icon close_icon' onClick={OpenSidebar}>X</span>
        </div>

        <ul className='sidebar-list'>
          <li className='sidebar-list-item'>
            <Link to="#" onClick={handleDashboardClick}>
              <BsGrid1X2Fill className='icon' /> Settings
            </Link>
            {showSubMenu && (
              <ul className="submenu">
                 <li className='sidebar-submenu-item'>
                  <Link to="/"> Dashboard</Link>
                </li>
                <li  className='sidebar-submenu-item'>
                  <Link to="/category"> Category</Link>
                </li>
                <li  className='sidebar-submenu-item'>
                  <Link to="/address">Address</Link>
                </li>
              </ul>
            )}
          </li>
          <li className='sidebar-list-item'>
            <Link to="/newcontact">
              <BsFillArchiveFill className='icon' /> New Contact
            </Link>
          </li>
          <li className='sidebar-list-item'>
            <Link to="/category">
              <BsFillGrid3X3GapFill className='icon' /> Categories
            </Link>
          </li>
          <li className='sidebar-list-item'>
            <Link to="/birthday">
              <FaBirthdayCake className='icon' /> Birthdays
            </Link>
          </li>
          <li className='sidebar-list-item'>
            <Link to="/printlabel">
              <MdLocalPrintshop  className='icon' /> Print Labels
            </Link>
          </li>
        </ul>
      </aside>

      <Outlet />
    </>
  )
}

export default Sidebar;
