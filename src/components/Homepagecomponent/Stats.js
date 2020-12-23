import React from 'react'
import "./Stats.css"

const StasData =[
    {
        icon :<i  class="fas fa-location" style={{color:"#343BFC"}}></i>,
        title: "Book and track from anyplace",
        desc:"Person can book from anyplace and Track it from the world",
    },
    {
        icon :<i class="fas fa-video"  style={{color:"#B2C248"}}></i>,
        title: "Live feed to hospital and Doctor",
        desc:"Patient and Doctor can be connected with live feed",
    },
    {
        icon :<i class="fas fa-traffic-light"  style={{color:"green"}}></i>,
        title: "Get way in Traffic",
        desc:"Get the Traffic signals turn to green in your way. ",
    },
    {
        icon :<i class="fas fa-hospital"  style={{color:"#E55B3C"}}></i>,
        title: "Premedication",
        desc:"Hospitals can prepare for premedication as doctors know the whole situation.",
    },
    {
        icon :<i class="fas fa-calendar-plus" style={{color:"#00ff00"}}></i>,
        title: "First to Market",
        desc:"We are first to introduce the traffic access technology, collaboration with government ",
    },
    {
        icon :<i class="fas fa-search-location"  style={{color:"#C0C0C0"}}></i>,
        title: "Freedom to Choice",
        desc:"You can get to choose a free or paid ambulance available near you. ",
    },
    {
        icon :<i class="fas fa-shipping-fast" style={{color:"#808000"}}></i>,
        title: "Track 108, Government Providers",
        desc:"Track 108 and government Ambulance services on real-time        ",
    },
    {
        icon :<i class="fas fa-phone-volume" style={{color:"#FFA500"}}></i>,
        title: "Direct On-call Communication",
        desc:"Engage effortlessly with ambulance drivers and hospital over the phone.        ",
    },
   
]
function Stats() {
    return (
        <div className="Statscontainer">
            <div className="heading">
                Why Choose Us?
            </div>
            <div className="Wrapper">
                 {StasData.map((item, index)=>{
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
    )
}

export default Stats
