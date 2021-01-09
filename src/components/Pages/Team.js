import React from 'react'
import Footer from "../Footer";
import "./collabratecss.css"

import Nithish from "../images/Nitish.jpg"
import Kiran from "../images/kiranimage.jpg"
import sudeep from "../images/sudeep1414.jpg";
import harish from "../images/harish1.jpeg";



const teamData =[
    {
        icon :<img className="colImages1"   alt=" "src={Nithish} />,
        title: "Nithish Veeravalli",
       contact: "9182687397",
       mail: "veeravallin.ece18@itbhu.ac.in",
        desc:"Founder, App developer",
        clg : "IIT BHU Varanasi",
    },
    {
        icon :<img className="colImages1"    alt=" "src={Kiran} />,
        title: "Jhade Sai Kiran",
        contact: "7032629788",
        mail: "jhadesaikiran.mec18@itbhu.ac.in",
        desc:"Co-Founder, Front-end developer",
        clg : "IIT BHU Varanasi",
    },
    {
        icon :<img className="colImages1"    alt=" "src={harish} />,
        title: "Medam Sai Harish",
        contact: "6304775653",
        mail: "medam.saiharish.mec19@itbhu.ac.in",
        desc:"Co-Founder, Full-stack developer",
        clg : "IIT BHU Varanasi",
    },
    {
        icon :<img className="colImages1"   alt=" " src={sudeep} />,
        title: "Kandru Sudeep Kumar",
        contact: "9505445002",
        mail: "kandrusudeepkr.mec18@itbhu.ac.in",
        desc:"Co-Founder, Executive-Manager",
        clg : "IIT BHU Varanasi",
    },
]


const  Team=() =>{
    return (
        <>
        <div className="colourteam">
          
          <div className="colheading">

            Our Team
          </div>
         
          <div className="coldec"> 
          <p>
          "We never lack technology, we only lack technology for service". To change this criteria and to end the social issue of "Delayed Ambulances", We - The four innovative minds of IIT BHU came forward with the combination of technical, systematic and emotional solution. The development of hardware devices, user and control room websites & a driver app is the beginning stage of our journey. "Priority Pulse to Priority Pulse Pvt Ltd" is one of the most proudest moment. We all began with the question - "If we can get cab in 5 mins, why not an Ambulance?" and today we can blissfully say that- "Now, an ambulance can reach 
faster than a cab."
          </p>
          </div>
          <div className="colWrapper">

          {teamData.map((item, index)=>{
                        return(
                            <div className="StatsBox" key="index">
                              <div className="Icon">{item.icon}</div>
                              <div className="Title">{item.title}</div>
                              <div className="Desc">{item.desc}</div>
                              <div className="clg">{item.clg}</div>
                              <div className="contact"><i class="fas fa-phone" style={{color:"#f9a602"}}></i> {`            ${item.contact}`}</div>
                              <div className="contact"><i class="far fa-envelope" style={{color:"#f9a602"}}></i>{`      ${item.mail}`}</div>
                            </div>
                        )
                    })}   
          </div>
     
      </div>
      <Footer/> 
</>
    )
}

export default Team
