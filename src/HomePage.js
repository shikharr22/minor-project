import { React, useEffect, useState } from "react";
import "./App.css";
import firebase from './Firebase.js';

let data=[];
const HomePage = () => {

    useEffect(() => {
        const todoRef = firebase.database().ref('Data');
        todoRef.on('value', (snapshot) => {
          console.log(snapshot);
        });
      }, []);
    
 

  return (
    <>
      <div className="homepage">
        <div className="section" id="humidity"></div>
        <div className="section" id="temperature"></div>
        <div className="section" id="moisture"></div>
      </div>
    </>
  );
};

export default HomePage;
