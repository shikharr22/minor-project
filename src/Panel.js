import React from "react";
import "./App.css";

const Panel = () => {
  return (
    <>
      <div className="panel">
<<<<<<< HEAD
          <img style={{width:'15vw',height:'21vh',marginBottom:'4vh',borderRadius:'2px',marginTop:'4vh'}} src={require("./jp.gif")} />
=======
          <img style={{width:'16vw',height:'20vh',marginBottom:'4vh',borderRadius:'2px',marginTop:'4vh'}} src={require("./jp.gif")} />
>>>>>>> 91bbd6601728570eaf5f4e768bd00596617c5b45
          <p style={{color:'white',fontWeight:'bold'}}>NOICE!!</p>
        <ul className="list">
          <li className="listItem">
            <a className="link" href="#currentReadings">
            <img className='panelIcons' src={require("./dashboard.png")} />
              Realtime Readings
            </a>
          </li>
          <li className="listItem">
            <a className="link" href="#temperature">
              <img className='panelIcons' src={require("./temp.png")} />
              Temperature
            </a>
          </li>
          <li className="listItem">
            <a className="link" href="#moisture">
              <img className='panelIcons'  src={require("./moisture.png")} />
              Moisture
            </a>
          </li>
          <li className="listItem">
            <a className="link" href="#humidity">
              <img className='panelIcons'  src={require("./humidity.png")} />
              Humidity
            </a>
          </li>
          <li className="listItem">
            <a className="link" href="#light">
              <img className='panelIcons'  src={require("./sunlight.png")} />
              Light Intensity
            </a>
          </li>
        </ul>
      </div>
    </>
  );
};

export default Panel;
