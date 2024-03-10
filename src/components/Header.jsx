import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import logo from '../../logo.jpeg'
import './Demo.css'

const Header = () => {
  return (
    <>
    <nav class="navbar navbar-expand-lg bg-body-tertiary  bg-dark" data-bs-theme="dark">
  <div class="container-fluid">
    <a class="navbar-brand" href="#">
      <img src={logo} alt="" className='logo' />
    </a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <Link class="nav-link " aria-current="page" to='/demo'>Demo</Link>
        </li>
        <li class="nav-item">
          <Link class="nav-link" to={"/tutorial"}>Tutorial</Link>
        </li>
        
        <li class="nav-item">
          <Link class="nav-link" to={"/contact"}>Contact Us</Link>
        </li>
        <li class="nav-item">
          <Link class="nav-link" to={"/"}>Login</Link>
        </li>
        <li class="nav-item">
          <Link class="nav-link" to={"/register"}>Register</Link>
        </li>
      </ul>
      
    </div>
  </div>
</nav>
    </>
  )
}

export default Header
