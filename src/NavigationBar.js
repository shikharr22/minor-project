import {React,useState,useContext} from "react";
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
          <li className="navItem">
            Plant Monitoring system
          </li>
          <li>
            <a href="#aboutUs" className="navItem">
              About Us
            </a>
          </li>
        </ul>
      </div>
    </>
  );
}
