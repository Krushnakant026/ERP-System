import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './Component/Header';
import Sidebar from './Component/Sidebar';
import Dashboard from './Component/Dashboard';
import Products from './Component/Products';
import Orders from './Component/Orders';
import AddProduct from './Component/AddProduct';
import EditProduct from './Component/EditProduct';
import EditOrder from './Component/EditOrder';
import Calendar from './Component/Calendar';


const App = () => {
  const [openSidebar, setOpenSidebar] = useState(false);

  const toggleSidebar = () => {
    setOpenSidebar(!openSidebar);
  };

  return (
    <Router>
      <div className="App">
        <Sidebar openSidebarToggle={openSidebar} OpenSidebar={toggleSidebar} />
        <div className={`content ${openSidebar ? 'content-expanded' : ''}`}>
          <Header OpenSidebar={toggleSidebar} />
          <Routes>
            <Route path="/" element={<Dashboard/>} />
            <Route path="/products" element={<Products/>} />
            <Route path="/orders" element={<Orders/>} />
            <Route path="/AddProduct" element={<AddProduct/>}/>
            <Route path="/EditProduct/:id" element={<EditProduct/>}/>
            <Route path="/EditOrder/:id" element={<EditOrder/>}/>
            <Route path='/calendar' element={<Calendar/>}/>
          </Routes>
        </div>
      </div>
    </Router>
  );
};

export default App;
