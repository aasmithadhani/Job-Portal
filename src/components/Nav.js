import { Button } from '@mui/material';
import React from 'react'
import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <nav class="navbar navbar-expand-lg  " style={{backgroundColor: "#e3f2fd"}}>
    <a class="navbar-brand" href="#"><strong>HirePlix</strong></a>
    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
  
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav mr-auto">
        <li class="nav-item active">
          <Link to="/" className="nav-link" > Home </Link>
        </li>
        {/* <li class="nav-item">
        <Link to="/profiler" className="nav-link" > Profile</Link>
        </li> */}
         <li class="nav-item dropdown">
        <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          Profile
        </a>
        <div class="dropdown-menu" aria-labelledby="navbarDropdown">
          <Link to="/profilec" class="dropdown-item" href="#">Candidate's Profile</Link> 
          <div class="dropdown-divider"></div>
          <Link to="/profiler" class="dropdown-item" href="#">Recruiter's Profile</Link> 
          
        </div>
      </li>
        <li class="nav-item active">
        <Link to="/candidate" className="nav-link" > Candidate </Link>
        </li>
        <li class="nav-item">
        <Link to="/recruiter" className="nav-link" > Recruiter </Link>
        </li>
        <li class="nav-item active">
        <Link to="/blog" className="nav-link" > Blog </Link> 
        </li>
        <li class="nav-item">
        <Link to="/faq" className="nav-link" > FAQs </Link> 
        </li>
      </ul>
      

      <Button href='http://127.0.0.1:8001/'>VideoChat</Button>
      <Button href='http://127.0.0.1:8002/'>Chat</Button>
      <Button href='http://127.0.0.1:8000/payment/13'>PRO$</Button>
      {/* <form class="form-inline my-2 my-lg-0">
        <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"/>
        <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
      </form> */}
    </div>
  </nav>
  );
}

export default Nav