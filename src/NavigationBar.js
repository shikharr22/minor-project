import {React,useState,useContext} from "react";
import Navbar from "react-bootstrap/Navbar";
import { Container } from "react-bootstrap";
import "./App.css";
import { getDatabase, ref, child, get, set } from "firebase/database";
import database from "./Firebase.js";

export default function NavigationBar() {
  
  const dbRef = ref(database);
  const handleForceClear=()=>{
   console.log("Clicked!!");
  }
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
          <li>
          <li  style={{position:'absolute',right:'2vh',cursor:'pointer',color:'white'}}className="navItem" onClick={handleForceClear}>
            Force Clear
          </li>
          </li>
        </ul>
      </div>
    </>
  );
}
