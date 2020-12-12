import React from 'react'
import { Button } from './Button'
import "./Mainsection.css"
import "../App.css"

 function Mainsection() {
    return (
        <div className='main-container'>
            <h1>Priority Pusle</h1>
            <p>what are you waiting for?</p>
            <div className="main-btns">
<Button
className="btns"
buttonStyle="btn--outline"
buttonSize="btn--large">
    GET STARTED
</Button>
<Button
className="btns"
buttonStyle="btn--primary"
buttonSize="btn--large">
    WATCH TRAILER <i className="far fa-play-circle"/>
</Button>
            </div>
        </div>
    )
}

export default Mainsection