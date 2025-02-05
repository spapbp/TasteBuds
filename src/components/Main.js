import React from 'react';
import { Routes, Route } from 'react-router-dom';

import Home from '../pages/Home';
import EditProfile from '../pages/EditProfile';
import Saved from '../pages/Saved';
import NewPost from '../pages/NewPost';
import Login from '../pages/Login';
import Logout from '../pages/Logout'

function Main() {
  return (
    <Routes>
      {/* The swtich decides which component to show based on the current url */}
      <Route path="/" element={<Home />} />
      <Route path="/saved" element={<Saved />} />
      <Route path="/NewPost" element={<NewPost />} />
      <Route path="/EditProfile" element={<EditProfile />} />
      <Route path="/Login" element={<Login />} />
      <Route path="/Logout" element={<Logout />} />
    </Routes>
  );
}

export default Main;
