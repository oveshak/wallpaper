import React,{useState} from 'react'
import "./header.css"
import { nav } from '../../data/Data';
import {  FaTimes } from "react-icons/fa";
import { FaAlignJustify } from "react-icons/fa6";
import { Link } from 'react-router-dom';
const Header = () => {
    const [navlist, setNavlist] = useState(false);
  return (
    
    <header>
      
    <div className="container flex">
      <div className="logo">
        <img src="./images/logo.png" alt="logo" />
      </div>
      <div className="nav">
        <ul className={navlist ? "small" : "flex"}>
          {nav.map((list, index) => (
            <li key={index}>
              <Link to={list.path}>{list.text}</Link>
            </li>
          ))}
        </ul>
      </div>

    

      <div className="toggle">
        <button onClick={() => setNavlist(!navlist)}>
          {navlist ? <FaTimes /> : <FaAlignJustify />}
        </button>
      </div>
    </div>
  </header>
  )
}

export default Header