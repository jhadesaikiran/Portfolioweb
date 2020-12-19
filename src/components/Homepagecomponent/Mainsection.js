import React from 'react'
import { Button } from '../Button'
import "./Mainsection.css"
import "../../App.css"

 function Mainsection() {
    return (
        <div className='main-container'>
            <h1>Priority Pusle</h1>
            <p>Connecting User Hospital Traffic authority</p>
            <div className="main-btns">
<Button
connecting = "https://user.prioritypulse.co.in/login"
className="btns"
buttonStyle="btn--outline"
buttonSize="btn--large">
  Book an Ambulance
</Button>
<Button
connecting = "https://prioritypulse.co.in/collabrate"
className="btns"
buttonStyle="btn--primary"
buttonSize="btn--large">
   Collabrate with Us <i className="far fa-hands-helping"/>
</Button>
            </div>
        </div>
    )
}

export default Mainsection