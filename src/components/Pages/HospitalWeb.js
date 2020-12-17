import React from "react";
import Footer from "../Footer";
import "./hospitalcss.css"
//import "../../App.css"
import user1vec from "../images/hosroomvec.jpg"
import user1 from "../images/hospital.JPG"
import user2 from "../images/hostrack.JPG"

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
        title : "Booking and track ambulance",
        desc : "Hospital authority can give and confirm booking by filling data and assigning the driver."
         
    },
    {
        title : "Live Feed",
        desc : "Doctors can get a live feed from the paitent and respond accordingly"
    },  
    {
        title : "Premedication",
        desc : "Authority can make arrangements as doctor could know whole situation of the case."
    },
    {
        title : "Manage Ambulance drivers",
        desc : "Can assign, add, manage ambulance drivers and know each rides they make. "
    },
    {
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
    We developed Hospital Website  form which hospitals can prepare for premedication and get feed from the user and from ambulance in real time and to have control over ambulance drivers  </p>
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
    <img className="hosuser1vec" src={user1vec} />
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
                           <div  className="Titleh" >{item.title}</div>
                           <div className="Desch">{item.desc}</div>
                         </div>
                     )
                 })}  
             
                
            </div>
            </div>
            <div className="hoscoln2">
            <div > 
                    <h4>Book Ambulance</h4>
                    <img className="hosuser1pic" src={user1}  />
                    </div>
                <div>
                <h4>Track Ambulance</h4>
                <img className="hosuser2pic" src={user2}  />
                </div>
            </div>

</div>

 

        </div>
        <Footer/>
        </>
    )
}