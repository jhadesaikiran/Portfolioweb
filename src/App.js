import React from "react";
import './App.css';
import Nav from "./components/Nav";
import { BrowserRouter as Router,Switch,Route } from "react-router-dom";
import  Home from "./components/Pages/Home";
import Collabrate from "./components/Pages/Collabrate";
import UserWeb from "./components/Pages/UserWeb";
import HospitalWeb from "./components/Pages/HospitalWeb";

function App() {
  return (
    <>
    <Router>
    <Nav/>
    <Switch>
      <Route path="/" exact component={Home}/>
      <Route path="/hospitalweb"  component={HospitalWeb}/>
      <Route path="/userweb"  component={UserWeb}/>
      <Route path="/collabrate" component={Collabrate}/>
    </Switch>
    </Router>
   
    </>
  );
}

export default App;
