import React from "react";
import "./App.css";


let countLimit=3; 

const Alert = (props) => {
  let type = props.type
  let highCount=props.highCount
  let lowCount=props.lowCount
  let lowLimit = props.lowLimit;
  let highLimit = props.highLimit;
  return (
    <>
    {(highCount>countLimit || lowCount>countLimit)?
      <div className="alert blink">
        <img
          style={{ width: "2vw", height: "4vh" }}
          src={require("./alert.png")}
        />
        {highCount>countLimit ? (
          <p style={{ color: "white",fontSize:'0.7rem',margin:'0.5rem'}}>{type} too high!!</p>
        ) : null}
         {lowCount>countLimit ? (
          <p style={{color: "white",fontSize:'0.7rem',margin:'0.5rem'}}>{type} too low!!</p>
        ) : null}
      </div>:null}
    </>
    
  );
};

export default Alert;
