import React from 'react';
import { Link } from 'react-router-dom';
import DashboardIcon from '@mui/icons-material/Dashboard';
import CategoryIcon from '@mui/icons-material/Category';
import TaskAltIcon from '@mui/icons-material/TaskAlt';
import '../Component/Sidebar.css';
import icon1 from '../Assests/entnticon.png';

const Sidebar = ({ openSidebarToggle, OpenSidebar }) => {
  return (
    <div>

      <aside id="sidebar" className={openSidebarToggle ? "sidebar-responsive w3-sidebar w3-light-grey w3-bar-block" : ""}>
        <div className='sidebar-title'>
          <div className='sidebar-brand'>
            <img src={icon1} alt='Entnt icon' /> <p>EN-TNT</p>
          </div>
        </div>
        <ul className='sidebar-list'>
          <Link to="/">
            <li className='sidebar-list-item'>
              <DashboardIcon className='icon' /><p> Dashboard</p>
            </li>
          </Link>
          <Link to="/products">
            <li className='sidebar-list-item'>
              <CategoryIcon className='icon' /> <p>Products</p>
            </li>
          </Link>
          <Link to="/orders">
            <li className='sidebar-list-item'>
              <TaskAltIcon className='icon' /><p> Order</p>
            </li>
          </Link>
        </ul>
      </aside>
    </div>
  );
};

export default Sidebar;
