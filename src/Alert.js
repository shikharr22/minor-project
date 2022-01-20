import React from "react";
import "./App.css";


let countLimit=3; 

const Alert = (props) => {
  let type = props.type
  let currVal = props.currVal
  let highCount=props.highCount
  let lowCount=props.lowCount
  let lowLimit = props.lowLimit;
  let highLimit = props.highLimit;
  return (
    <>
    {(highCount>countLimit || lowCount>countLimit)?
      <div className="alert">
        <img
          style={{ width: "2vw", height: "4vh" }}
          src={require("./alert.png")}
        />
        {currVal > highLimit && highCount>countLimit ? (
          <p style={{ color: "white",fontSize:'0.7rem',margin:'0.5rem'}}>{type} too high!!</p>
        ) : null}
         {currVal <lowLimit && lowCount>countLimit ? (
          <p style={{color: "white",fontSize:'0.7rem',margin:'0.5rem'}}>{type} too low!!</p>
        ) : null}
      </div>:null}
    </>
    
  );
};

export default Alert;
