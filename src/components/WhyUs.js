import React from 'react'
import location from '../images/ID204-2048143_address-comments.png'
import traffic from '../images/traffic-lights-icon-black-vect.png'
import premed from '../images/Pngtreevector_hospital_icon.png'
import call from '../images/call.png'

function WhyUs() {
    return (
        <div className='whyus'>
            <div className='whyus_head'>Why Choose Us</div>
            <div className='whyus_body'>
                <div className='whyus_logo'>
                    <img src={location} alt='location' />
                </div>
                <div className='whyus_contain'>
                    <div className='home_title'>Live Tracking</div>
                    <div>An individual can book an ambulance & Track it.</div>
                </div>
            </div>
            <div className='whyus_body'>
                <div className='whyus_logo'>
                    <img src={traffic} alt='traffic' />
                </div>
                <div className='whyus_contain'>
                    <div className='home_title'>Smart traffic signals</div>
                    <div>An individual can book an ambulance & Track it.</div>
                </div>
            </div>
            <div className='whyus_body'>
                <div className='whyus_logo'>
                    <img src={premed} alt='medical' />
                </div>
                <div className='whyus_contain'>
                    <div className='home_title'>Pre-Medication</div>
                    <div>An individual can book an ambulance & Track it.</div>
                </div>
            </div>
            <div className='whyus_body'>
                <div className='whyus_logo'>
                    <img src={call} alt='call' />
                </div>
                <div className='whyus_contain'>
                    <div className='home_title'>On call communication</div>
                    <div>An individual can book an ambulance & Track it.</div>
                </div>
            </div>
        </div>
    )
}

export default WhyUs
