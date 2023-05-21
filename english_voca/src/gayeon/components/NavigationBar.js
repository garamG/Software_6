import React from 'react';
import { HiOutlineUserCircle,HiOutlineUsers,HiOutlineBookOpen,HiTrendingUp } from "react-icons/hi";
import { Link } from 'react-router-dom';
//import '../styles/Header.css';

function NavigationBar() {
  return (
    <div className="Bar">
      <nav>
        <ul>
          <li><Link to="/dic"><HiOutlineBookOpen size="45"/></Link></li>
          <li><Link to="/"><HiOutlineUsers size="45" /></Link></li>
          <li><Link to ="/goal"><HiTrendingUp size="45"/></Link></li>
          <li><Link to="mypage"><HiOutlineUserCircle size="45"/></Link></li>
        </ul>
      </nav>
    </div>
  );
}

export default NavigationBar;
