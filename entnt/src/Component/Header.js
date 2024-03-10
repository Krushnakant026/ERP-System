import React from 'react';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import MenuIcon from '@mui/icons-material/Menu';
import '../Component/Header.css';
import SearchIcon from '@mui/icons-material/Search';

const Header = ({ OpenSidebar }) => {
  return (
    <div>
      <header className='header'>
        <MenuIcon className='menu-icon' onClick={OpenSidebar} />
        <input type="text" placeholder="Search" />
        <div className='header-right'>
          <AccountCircleIcon />
        </div>
      </header>
    </div>
  );
};

export default Header;
