import React,{useState,useEffect} from 'react'
import {Link }from "react-router-dom"
import { Button } from './Button';
import "./nav.css"

 function Nav() {
     const [click, setClick] = useState(false)
const [button,setButton] =useState(true) 


     const handleClick =()=> setClick(!click)
const closeMobileMenu=()=> setClick(false);

const showButton =()=>{
    if(window.innerWidth<=960){
        setButton(false)
    }else{
        setButton(true)
    }
};

useEffect(()=>{
    showButton();
},[]);

window.addEventListener('resize',showButton)

    return (
        <>
           <nav className="navbar">
               <div className="navbar-container">
                  <Link to="/" className="navbar-logo" onClick={closeMobileMenu}>
                      Priority Pulse 
                  </Link>
                  <div className="menu-icon" onClick={handleClick}>
                      <i className={click ? 'fas fs-times':'fas fa-bars'} />
                  </div>
                  <ul className={click ?'nav-menu active' :'nav-menu'}>
                      <li className="nav-item">
                        <Link to='/' className="nav-links" onClick={closeMobileMenu}>
                            Home
                        </Link>
                      </li>
                       <li className="nav-item">
                        <Link to='/userweb' className="nav-links" onClick={closeMobileMenu}>
                            User Web
                        </Link>
                      </li>
                      <li className="nav-item">
                        <Link to='/hospitalweb' className="nav-links" onClick={closeMobileMenu}>
                            Hospital Web
                        </Link>
                      </li>
                      <li className="nav-item">
                        <Link to='/collabrate' className="nav-links" onClick={closeMobileMenu}>
                           Collaborate
                        </Link>
                      </li>
                  </ul>
<<<<<<< HEAD
                 
=======
>>>>>>> d7dcd110830cf2a61c220616aa372672ffebfdaa
               </div>
         </nav> 
        </>
    )
}

export default Nav
