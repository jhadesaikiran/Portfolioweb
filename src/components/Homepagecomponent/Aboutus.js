import React from 'react'
import "./Aboutuscss.css"
import connecting from "../images/connecting.JPG"

function Aboutus() {
    return (
        <div className="aboutuscontainer">
          
            <div className="heading">

               About Us
            </div>
            <div className="contentwrapper">
            <div className="coloum1"> 
            <p>
            "We never lack technology, we only lack technology for service". To change this criteria and to end the social issue of "Delayed Ambulances", We - The four innovative minds of IIT BHU came forward with the combination of technical, systematic and emotional solution. The development of hardware devices, user and control room websites & a driver app is the beginning stage of our journey. "Priority Pulse to Priority Pulse Pvt Ltd" is one of the most proudest moment. We all began with the question - "If we can get cab in 5 mins, why not an Ambulance?" and today we can blissfully say that- "Now, an ambulance can reach 
faster than a cab."
            </p>
            </div>
            <div className="coloum2">
            <img className="Images" src={connecting} />
            </div>
            </div>
        </div>
    )
}

export default Aboutus
