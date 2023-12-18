import React, {useState } from 'react'
import { Link} from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';


export default function Navbar() {


  const [isCollapsed, setIsCollapsed] = useState(true);




  const toggleCollapse = () => {
    setIsCollapsed(!isCollapsed);
  };

  



  return (
    <>
      <nav class="navbar navbar-expand-lg  navbar-light bg-info shadow-sm">
        <div class="container">
          <h1 class="navbar-brand fw-bolder text-white rounded">Student Database</h1>
          <button class="navbar-toggler shadow-none border-0"
            type="button"
            onClick={toggleCollapse}
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div className={`collapse navbar-collapse ${isCollapsed ? '' : 'show'}`} id="navbarNav">
            <ul class="navbar-nav ms-auto">
              <li class="nav-item mx-2">
                <Link to='/' class='nav-item nav-link text-danger fw-bold btn btn-outline-warning'>
                  DashBoard
                </Link>
              </li>

              <li class="nav-item mx-2">
                <Link to='/list' class='nav-item nav-link text-danger fw-bold btn btn-outline-warning'>
                 Student-List
                </Link>
              </li>

             
              
            </ul>
          </div>
        </div>
      </nav>
    </>

  )
}