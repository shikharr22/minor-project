import { React, useEffect, useState } from "react";
import "./App.css";
import { getDatabase, ref, child, get } from "firebase/database";
import database from './Firebase.js';
const HomePage = () => {

    
   useEffect(()=>{
    const dbRef = ref(database);
    get(child(dbRef, `Data`)).then((snapshot) => {
      if (snapshot.exists()) {
        console.log(snapshot.val());
      } else {
        console.log("No data available");
      }
    }).catch((error) => {
      console.error(error);
    });
   },[])
    

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
