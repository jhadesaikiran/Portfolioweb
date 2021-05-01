import { Input } from '@material-ui/core'
import React from 'react'
import Navbar from '../components/Navbar'
import imagema from '../images/ID2254423.png'
import Footer from '../components/Footer';

function Collaborte() {
    return (
        <div>
            <Navbar location='collab' />
            <img className='colabimg' src={imagema} alt='img' />
            <div className='collatxt'>
                <div className='collab_1'>Impressed with our Idea?</div>
                <div className='collab_2'>Come On !</div>
                <div className='collab_3'>Let's work together.</div>
                <Input fullWidth={true} placeholder='Email' />
                <button className='colbutton'>Contact</button>
            </div>
            <Footer />
        </div>
    )
}

export default Collaborte
