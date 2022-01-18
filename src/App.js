import logo from "./logo.svg";
import "./App.css";
import Panel from "./Panel.js";
import HomePage from "./HomePage.js";
import NavigationBar from "./NavigationBar.js";

function App() {
  return (
    <>
    
    <NavigationBar/>
  
    <div className="container2">
      <Panel />
      <HomePage />
    </div>
    
    </>
  );
}

export default App;
