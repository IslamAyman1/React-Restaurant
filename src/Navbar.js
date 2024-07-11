import React from 'react'
import {NavLink, Outlet ,Link } from "react-router-dom";
function Navbar() {
  return (
    <div>
 <nav class="navbar fixed-top navbar-expand-lg navbar-light white scrolling-navbar">
      <div class="container">

        
        <a class="navbar-brand waves-effect" href="#" >
          <img src="sand10.jpg" alt="Logo"/>
        </a>

        
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>

       
        <div class="collapse navbar-collapse" id="navbarSupportedContent">

          
          <ul class="navbar-nav mr-auto">
            <li class="nav-item">
              <Link class="nav-link waves-effect" to="/" >Home</Link>
            </li>
            <li class="nav-item">
              <Link class="nav-link waves-effect" to="/Contact" >Contact</Link>
            </li>
            <li class="nav-item">
              <Link class="nav-link waves-effect" to="/About" >About</Link>
            </li>
            <li class="nav-item">
              <Link class="nav-link waves-effect" to="/Signin" >Sign in</Link>
            </li>
          </ul>
          <ul class="navbar-nav nav-flex-icons">
            <li class="nav-item">
              <a href="#" class="nav-link waves-effect">
                <i class="fab fa-facebook-f"></i>
              </a>
            </li> 
            <li class="nav-item">
              <a href="#" class="nav-link waves-effect" >
                <i class="fab fa-twitter"></i>
              </a>
            </li>
            <li class="nav-item">
              <a href="#" class="nav-link waves-effect">
                <i class="fab fa-github"></i>
              </a>
            </li>
            <li class="nav-item">
              <a href="#"
                class="nav-link border border-light rounded waves-effect mr-2" >
                <i class="fas fa-envelope mr-1"></i>Massege us
              </a>
            </li>
          </ul>

        </div>

      </div>
    </nav>
  
    <div class="card card-intro blue-gradient">

      <div class="card-body white-text rgba-black-light text-center">

        
        <div class="row d-flex justify-content-center">

          <div class="col-md-6">

            <p class="h5 mb-2">
              Islam Restaurant
            </p>
            <p class="mb-0">This Restaurant supported by Islam Ayman</p>
          </div>
        </div>
      </div>
    </div>
    
  
       <Outlet/>
    </div>
  )
}

export default Navbar