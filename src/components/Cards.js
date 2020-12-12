import React from 'react'
import Carditems from "./Carditems";
import "./Cards.css";
import cover1 from "./images/cover1.jpg"

function Cards() {
    return (
        <div className="cards">
            <h1>Our Websites</h1>
            <div className="cards__container">
               <div className="cards__wrapper">
                   <ul className="cards__items">
<Carditems 
src={cover1}
text="userwebsite is for the user to book,track, and get live updates from the hospital"
label="userweb"
path="/userweb"
/>
<Carditems 
src={cover1}
text="HospitalWebsite is for hospital authority to manage, control and prepare for premedication"
label="Hospital"
path="/hospitalweb"
/>

                   </ul>
                   <ul className="cards__items">
<Carditems 
src={cover1}
text="userwebsite is for the user to book,track, and get live updates from the hospital"
label="userweb"
path="/userweb"
/>
<Carditems 
src={cover1}
text="HospitalWebsite is for hospital authority to manage, control and prepare for premedication"
label="Hospital"
path="/hospitalweb"
/>
<Carditems 
src={cover1}
text="HospitalWebsite is for hospital authority to manage, control and prepare for premedication"
label="Hospital"
path="/hospitalweb"
/>

                   </ul>
               </div>
            </div>
        </div>
    )
}

export default Cards
