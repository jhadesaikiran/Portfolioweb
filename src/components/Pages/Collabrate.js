import React from "react";
import { Link } from "react-router-dom";
import "./collabratecss.css"
import Nithish from "../images/Nitish.jpg"
import Kiran from "../images/kiranimage.jpg"
import sudeep from "../images/sudeep1414.jpg";
import harish from "../images/harish1.jpeg";

import Footer from "../Footer";
//import "../../App.css"

import connecting from "../images/connecting.JPG"



const userData =[
    {
        icon :<i  class="fas fa-location" style={{color:"#343BFC"}}></i>,
        title: "Book and track from anyplace",
        desc:"You will have the command over ambulances and will be globally seen. ",
    },
    {
        icon :<i class="fas fa-video"  style={{color:"#B2C248"}}></i>,
        title: "Live feed to hospital and doctor",
        desc:"Doctors can get live feed from the ambulance and prepare for premedication.",
    },
    {
        icon :<i class="fas fa-hospital"  style={{color:"#E55B3C"}}></i>,
        title: "Premedication",
        desc:"Hospitals can prepare for premedication as doctors know the whole situation.",
    },
    {
        icon :<i class="fas fa-calendar-plus" style={{color:"#00ff00"}}></i>,
        title: "First to Market",
        desc:"We are first to introduce the traffic access technology, collaboration with government. ",
    },{
        icon :<i  class="fas fa-users-cog" style={{color:"#C0C0C0"}}></i>,
        title: "Command over Ambulance",
        desc:"Hospital authority can assign drivers and command over ambulance. ",
    },
    {
        icon :<i class="fas fa-hands-helping" style={{color:"#808000"}}></i>,
        title: "Trust",
        desc:"People get trust as they have every thing that a hospital authority can give.",
    },
    {
        icon :<i class="fas fa-chart-bar"  style={{color:"green"}}></i>,
        title: "Competition",
        desc:"As we have a national connections, you can get publicity by all means.",
    },
    {
        icon :<i class="fas fa-tachometer-alt" style={{color:"#FFA500"}}></i>,
        title: "Success Rate",
        desc:"As you will be increasing patient survival, there will be success in saving lifes.",
    },
]

const teamData =[
    {
        icon :<img className="colImages1" src={Nithish} />,
        title: "Nithish Veeravalli",
       contact: "9182687397",
       mail: "veeravallin.ece18@itbhu.ac.in",
        desc:"Founder, App developer",
        clg : "IIT BHU Varanasi",
    },
    {
        icon :<img className="colImages1" src={Kiran} />,
        title: "Jhade Sai Kiran",
        contact: "7032629788",
        mail: "jhadesaikiran.mec18@itbhu.ac.in",
        desc:"Co-Founder, Front-end developer",
        clg : "IIT BHU Varanasi",
    },
    {
        icon :<img className="colImages1" src={harish} />,
        title: "Medam Sai Harish",
        contact: "6304775653",
        mail: "medam.saiharish.mec19@itbhu.ac.in",
        desc:"Co-Founder, Full-stack developer",
        clg : "IIT BHU Varanasi",
    },
    {
        icon :<img className="colImages1" src={sudeep} />,
        title: "Kandru Sudeep Kumar",
        contact: "9505445002",
        mail: "kandrusudeepkr.mec18@itbhu.ac.in",
        desc:"Co-Founder, Executive-Manager",
        clg : "IIT BHU Varanasi",
    },
]

export default function Collabrate() {
    return (
        <>
        <div className="collcontainer" >
        <div className="collmaincontainer">
                <div className="collcol1">
                      <div className="collheading1">Collaborate With Us</div> 
                      <div className='input-areas'>
          <form>
            <input
              className='colfooter-input'
              name='email'
              type='email'
              placeholder='Your Email'
            />
           <button className="cbutn"> <Link />Send</button>
          </form>
        </div>
        <div className="colldesc">
    <p>
    We built a User Website which serves patient  to book and track an ambulance from any remote location 
This website help user to navigate at the exact spot of emergency, send live feed of  patient updates on condition and it serves the main part of the premedication
    </p>
</div>
     
                 </div>
                 <div className="collcol2">
                 <div>
        <img className="cimg" src={connecting}  />
        </div>
                
                 </div>
                  </div>


                  

   
   <div className="colcolumn1">
   <div className="colpheading">
  Perks 
       </div>
       <div className="colWrapper">     
   {userData.map((item, index)=>{
                        return(
                            <div className="StatsBox" key="index">
                              <div className="Icon">{item.icon}</div>
                              <div className="Title">{item.title}</div>
                              <div className="Desc">{item.desc}</div>
                            </div>
                        )
                    })}  
                     </div>      
   </div>
 



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




        </div>
        <Footer/> 
        </>
    )
}
