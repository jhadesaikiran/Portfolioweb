import React from 'react'
import Carditems from "./Carditems";
import "./Cards.css";
import hospitalpic from "../images/hospital.JPG"
import userwebpic from "../images/userwebpic.JPG"


function Cards() {
    return (
        <div className="cards">
            <h1>Our Websites</h1>
            <div className="cards__container">
               <div className="cards__wrapper">
                   <ul className="cards__items">
<Carditems 
src={userwebpic}
text="We built a User Website which serves patient  to book and track an ambulance from any remote location 
This website help user to navigate at the exact spot of emergency, send live feed of  patient updates on condition and it serves the main part of the premedication."
label="User Website"
path="/userweb"
/>
<Carditems 
src={hospitalpic}
text="In the hospital website, hospital authority can take the details of the patient, assign a driver, get live updates and prepare for premedication In the ambulance and in the hospital also as according to patient."
label="Hospital Website"
path="/hospitalweb"
/>

                   </ul>
                 
               </div>
            </div>
        </div>
    )
}

export default Cards
