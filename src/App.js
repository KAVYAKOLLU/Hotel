import React from "react";
import { Routes,Route} from "react-router-dom";
import Home from "./components/Home.js";
import Room from "./Room.js"
import Register from "./components/Register.js";
import Service from "./Service.js";
import Custom from "./Custom.js";
import Login from "./components/Login.js";

import {Link}from "react-router-dom";

function App() {

return(
    <div>

<nav className="navbar navbar-expand-lg bg-black text-danger">
  <div className="container-fluid ">
    <a className="navbar-brand" href="#">HOTEL BOOKING</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
        
        <li className="nav-item">
          <Link className="nav-link" to="">Home</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="service">Services</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="room">Rooms</Link>
          </li>
          <li className="nav-item">
          <Link className="nav-link" to="cat">Customers Reviews</Link>
          </li>
          <li className="nav-item">
          <Link className="nav-link" to="login">Login</Link>
          </li>
       
       
      </ul>
      
    </div>
  </div>
</nav>


      <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="room" element={<Room/>}></Route>
        <Route path="book" element={<Register/>}></Route>
        <Route path="service" element={<Service/>}></Route>
        <Route path="cat" element={<Custom/>}></Route>
        <Route path="login" element={<Login/>}></Route>
      </Routes>
     
   
  
</div>
  )
  
}

export default App