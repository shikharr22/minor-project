import React from "react";
import "./App.css";

const Panel = () => {
  return (
    <>
      <div className="panel">
          <img style={{'width':'200px','height':'200px'}} src={require("./jp.jpg")} />
          <p style={{'color':'white','fontFamily':'Secular One','marginBottom':'4vh','fontSize':'4vh'}}>Welcome !! Bitch</p>
        <ul className="list">
          <li className="listItem">
            <a className="link" href="#main">
            <img className='panelIcons' src={require("./dashboard.png")} />
              Dashboard
            </a>
          </li>
          <li className="listItem">
            <a className="link" href="#temperature">
              <img className='panelIcons' src={require("./temp.png")} />
              Temperature
            </a>
          </li>
          <li className="listItem">
            <a className="link" href="#humidity">
              <img className='panelIcons'  src={require("./humidity.png")} />
              Humidity
            </a>
          </li>
          <li className="listItem">
            <a className="link" href="#moisture">
              <img className='panelIcons'  src={require("./moisture.png")} />
              Moisture
            </a>
          </li>
        </ul>
      </div>
    </>
  );
};

export default Panel;
