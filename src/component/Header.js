import React from 'react';
import './header.css';

function Header() {
  return (
    <nav className="nav-bar">
        <div className="logo">
            <img src="./images/image 1.png" alt="" />
        </div>
        <div className="nav-item">
           <ul>
            <li>My Assignment</li>
            <li>Chat with Mentor</li>
           </ul>
           <div className="select-menu">
            <span className="select-img"><img src="./images/Vector (16).png" alt="" /></span>
               <select name="" id="">
                <option value="">ProfileName</option>
               </select>
           </div>
        </div>
    </nav>
  )
}

export default Header