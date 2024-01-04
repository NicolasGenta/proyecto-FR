import React from 'react';
import './Navbar.css';
const imageUrl = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTu4AjJgZpCKjVBoAs3au9PAjDLw_1-MqOY43JtJryNzA&s';

const Navbar = () => {
  return (
    <div className="container">
  <nav className="navbar navbar-expand-lg navbar-light ">
    <div className="container-fluid">
      <a className="navbar-brand" href="#"></a>
      <img src={imageUrl} alt="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTu4AjJgZpCKjVBoAs3au9PAjDLw_1-MqOY43JtJryNzA&s" className="logo" />
    </div>
  </nav>
</div>
  )
}

export default Navbar