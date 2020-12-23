import React from "react";
import './App.css';
import Nav from "./components/Nav";
import { BrowserRouter as Router,Switch,Route,Redirect } from "react-router-dom";
import  Home from "./components/Pages/Home";
import Collabrate from "./components/Pages/Collabrate";
import UserWeb from "./components/Pages/UserWeb";
import HospitalWeb from "./components/Pages/HospitalWeb";
import Scrolltotop from "./components/Scrolltotop";

function App() {
  return (
    <>
    <Router>
      <Scrolltotop/>
    <Nav/>
    <Switch>
      <Route path="/" exact component={Home}/>
      <Route path="/hospitalweb"  component={HospitalWeb}/>
      <Route path="/userweb"  component={UserWeb}/>
      <Route path="/collabrate" component={Collabrate}/>
      <Route render={() => <Redirect to="/" />} />
    </Switch>
    </Router>
   
    </>
  );
}

export default App;
