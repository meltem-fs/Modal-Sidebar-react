import React from 'react'
import logo from './logo.svg'
import { FaTimes } from 'react-icons/fa'
import { social, links } from './data'
import { Link } from 'react-router-dom'
import { useState } from 'react'
import Home from './Home'

const Sidebar = ({ open, setOpen }) => {
  return (
    <div>
      <div className="images">
        <img src={logo} alt="" />
        <FaTimes onClick={() => setOpen(!open)} />
      </div>
      <div>
        <ul>
          {links.map((item) => {
            return (
              <li key={item.id}>
                <Link to={item.url}>
                  {" "}
                  <i>{item.icon}</i> {item.text}
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
      <div className="icons">
        {social.map((icons) => {
          return (
            <a key={icons.id} href={icons.url}>
              {" "}
              {icons.icon}{" "}
            </a>
          );
        })}
      </div>
    </div>
  );
};


export default Sidebar
