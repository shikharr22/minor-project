import logo from "./logo.svg";
import "./App.css";
import Panel from "./Panel.js";
import HomePage from "./HomePage.js";
import NavigationBar from "./NavigationBar.js";
import {React,useState,useEffect} from "react";

function App() {

  const [isloading,setIsLoading]=useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    },7100);
    
  }, [])
  return (
    <>
    {/* {
      (isloading)?<div className="loadingScreen">
        <img className='plantGrow' style={{'width':'400px','height':'400px','borderRadius':'10px'}}src={require('./plantgrow.gif')}/>
      </div>: */}
     <div>
     <NavigationBar/>
    <div className="container2">
      <Panel />
      <HomePage />
    </div>
    </div>
    {/* } */}
    </>
  );
}

export default App;
