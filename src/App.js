import React from 'react';
import './App.css';
import { BrowserRouter, Route } from 'react-router-dom'
// import Footer from './components/Footer';
// import Navbar from './components/Navbar';
import Home from './screens/Home';
import User from './screens/User';
import Hospital from './screens/Hospital';
import Aboutus from './screens/Aboutus';
import Collaborte from './screens/Collaborte';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Route path='/' exact component={Home} />
        <Route path='/home' component={Home} />
        <Route path='/user' component={User} />
        <Route path='/hospital' component={Hospital} />
        <Route path='/aboutus' component={Aboutus} />
        <Route path='/collaborate' component={Collaborte} />
      </BrowserRouter>
    </div>
  );
}

export default App;
