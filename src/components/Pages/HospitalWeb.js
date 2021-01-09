import React from "react";
import Footer from "../Footer";
import "./hospitalcss.css"
//import "../../App.css"

import user1 from "../images/hospital.JPG"
import user2 from "../images/hostrack.JPG"
import hoslogin from "../images/hoslogin.JPG"

import teampicfrompot from "../images/team.jpg"

import hospitalfun from "../images/hospitalfunc1.jpg"

const hosData =[
    {
        icon :<i class="fas fa-shipping-fast" style={{color:"#343BFC"}}></i>,
        title: "Booking and Tracking",
        desc:"You will have the command over ambulances and will be globally seen ",
    },
    {
        icon :<i class="fas fa-video"  style={{color:"#B2C248"}}></i>,
        title: "Live Feed and Premedication",
        desc:"Doctors can get live feed from the ambulance and prepare for premedication",
    },
]

const hoshowData =[
    {
        color :"#343BFC",
        title : "Booking and track ambulance",
        desc : "Hospital authority can give and confirm booking by filling data and assigning the driver."
         
    },
    { color :"#B2C248",
        title : "Live Feed",
        desc : "Doctors can get a live feed from the paitent and respond accordingly"
    },  
    {  color :"#E55B3C",
        title : "Premedication",
        desc : "Authority can make arrangements as doctor could know whole situation of the case."
    },
    { color :"#00ff00",
        title : "Manage Ambulance drivers",
        desc : "Can assign, add, manage ambulance drivers and know each rides they make. "
    },
    { color :"#808000",
        title : "Requesting traffic control to give access of traffic light",
        desc : "Hospital authority can request traffic control to change traffic lights according to the ride "
    },
]

export default function HospitalWeb() {
    return (
        <>
        <div className="hos-container">
            <div className="main-hos-container">
                <div className="hoscol1">
                      <div className="hosheading1">Hospital Website</div> 
                     <button className="hosbutn" onClick={()=>window.location.replace('https://hospital.prioritypulse.co.in/login')}>Register your Hospital</button>
                 </div>
                 <div className="hoscol2">
                 <div className="hosdesc">
    <p>
    We developed Hospital Website from which hospitals can prepare for premedication and get feed from the user and from ambulance in real time and to have control over ambulance drivers.  </p>
</div>
                 </div>
                  </div>
                  


                  <div className="hosuseswrapper">
   
   <div className="hoscolumn1">
   <div className="heading">
   Why Choose us ?
       </div>
   {hosData.map((item, index)=>{
                        return(
                            <div className="StatsBox" key="index">
                            <div className="Icon">{item.icon}</div>    
                              <div className="Title">{item.title}</div>
                              <div className="Desc">{item.desc}</div>
                            </div>
                        )
                    })}        
   </div>
   <div className="column2">
    <img className="hosuser1vec" alt="" src={hospitalfun} />
   </div>
   </div>
   


   
<div className="hoshowcontainer">
<div className="hoscoln1" >
<div className="heading">
How it Works ?
    </div>
            <div className="hoscol1inside">
            {hoshowData.map((item, index)=>{
                     return(
                         <div className="hoshowData" key="index">
                           <div style={{color: `${item.color}`}}  className="Titleh" >{item.title}</div>
                           <div className="Desch">{item.desc}</div>
                         </div>
                     )
                 })}  
             
                
            </div>
            </div>
            
            <div className="hoscoln2">
            <div className="slider">
                  
                  <div className="images">
                  <input type="radio" name="slide" id="img1"  />
                  <input type="radio" name="slide" id="img2" />
                  <input type="radio" name="slide" id="img3" />
                  <input type="radio" name="slide" id="img4" />
                  
                       <img className="m1 first" src={hoslogin} alt="img1"  />
                  <img className="m1" src={user1} alt="img2" />
                  <img className="m1" src={user2} alt="img3" />
                  <img className="m1" src={teampicfrompot} alt="img4" />
                  
                  
                  
                       </div>
                       <div className="dots">
                  <label for="img1"></label>
                  <label for="img2"></label>
                  <label for="img3"></label>
                  <label for="img4"></label>
                       </div>
                   
                  </div>  
            </div>

</div>

 

        </div>
        <Footer/>
        </>
    )
}

/*
   <div > 
                    <h4>Book Ambulance</h4>
                    <img className="hosuser1pic" src={user1}  />
                    </div>
                <div>
                <h4>Track Ambulance</h4>
                <img className="hosuser2pic" src={user2}  />
                </div>
*/