import React from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";
import DialpadTwoToneIcon from '@mui/icons-material/DialpadTwoTone';


function Navbar() {
  return (
    <div>
      <nav class="navbar navbar-expand-lg navbar-light py-2 px-5">
      
        <a class="navbar-brand">
        <Link to="/home" style={{color:"black", textDecoration:"none"}} onClick="window.location.reload()">
          <small>
            <strong>My</strong>
          </small>
          .<strong>Shoppy</strong> 
          </Link>
        </a>
        
        <button
          class="navbar-toggler "
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span><DialpadTwoToneIcon/></span>
        </button>

        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav ml-auto mt-3">
            <li class="nav-item active">
              <a class="nav-link" href="#">
              <Link to="/home" style={{color:"black", textDecoration:"none"}} onClick="window.location.reload()">
                Home <span class="sr-only">(current)</span>
                </Link>
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link text-dark" href="#">
              <Link to="/boysshop" style={{color:"black", textDecoration:"none"}} onClick="window.location.reload()">
                Men</Link>
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link text-dark" href="#">
              <Link to="/girlsshop" style={{color:"black", textDecoration:"none"}} onClick="window.location.reload()">
                Women</Link>
              </a>
            </li>
            {/* <li class="nav-item basket">
              <img
                class="card-details-img"
                src="https://cdn-icons-png.flaticon.com/512/60/60992.png"
              />
              <sup id="counting" class="counting">
                0
              </sup> 
            </li> */}
            <li class="nav-item">
            <Link to="/register" style={{color:"white", textDecoration:"none"}} onClick="window.location.reload()">
              <button type="button" className="btn navbtn mr-2">
                Register
              </button></Link>
            </li>
            <li class="nav-item">
            <Link to="/signin" style={{color:"white", textDecoration:"none"}} onClick="window.location.reload()">
              <button type="button" className="btn navbtn">
                Sign in
              </button></Link>
            </li>
          </ul>  
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
