import React from "react";
import Navbar from "react-bootstrap/Navbar";
import { Container } from "react-bootstrap";
import "./App.css";

export default function NavigationBar() {
  return (
    <>
      <div className="nav">
        <ul className="navList">
          <li className="navItem">
            <img src={require("./navLogo.png")} id="logo" />
          </li>
          <li className="navItem" style={{ "font-size": "3vh", 'color':'#5cf006' }}>
            Garden Monitoring system
          </li>
          <li>
            <a href="#" className="navItem" style={{ "font-size": "2.2vh" }}>
              Home
            </a>
          </li>
          <li>
            <a href="#" className="navItem" style={{ "font-size": "2.2vh" }}>
              About Us
            </a>
          </li>
        </ul>
      </div>
    </>
  );
}
