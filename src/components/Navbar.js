import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <div className="navabr">
      <li><Link to="/">Home</Link></li>
      <li><a href="/profile">Profile</a></li>
      {/* <li><a href="/Nutrition">Nutrition</a></li> */}
      <li><Link to="/saved">Saved</Link></li>
      <li><Link to="/NewPost">Create a Post</Link></li>
      {/* <li><Link to="/Appliance">See what I just added</Link></li> */}
      <li><Link to="/Login">Login</Link></li>
      <li><Link to="/Logout">Logout</Link></li>
    </div>
  );
}

export default Navbar;
