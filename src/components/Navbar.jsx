import React from 'react'
import { Link } from 'react-router-dom'

export const Navbar = () => {
  return (
    <div>
        <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
  <a class="navbar-brand" href="#">Navbar</a>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>

  <div class="collapse navbar-collapse" id="navbarSupportedContent">
    <ul class="navbar-nav mr-auto">
      <li class="nav-item active">
        <Link class="nav-link" to="/">Home <span class="sr-only">(current)</span></Link>
      </li>
      <li class="nav-item">
        <Link class="nav-link" to="/aboutus">ABOUT US</Link>
      </li>
      <li class="nav-item">
        <Link class="nav-link" to="/contactus">CONTACT US</Link>
      </li>
      <li class="nav-item">
        <Link class="nav-link" to="/apidemo1">API DEMO 1</Link>
      </li>
      <li class="nav-item">
        <Link class="nav-link" to="/apidemo2">API DEMO 2</Link>
      </li>
      <li class="nav-item">
        <Link class="nav-link" to="/counter">Counter</Link>
      </li>
      <li class="nav-item">
        <Link class="nav-link" to="/countries">Countries</Link>
      </li>
      
      
    </ul>
    
  </div>
</nav>
    </div>
  )
}
