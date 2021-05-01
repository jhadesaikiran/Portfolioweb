import React from 'react'
import location from '../images/ID204-2048143_address-comments.png'
import traffic from '../images/traffic-lights-icon-black-vect.png'
import premed from '../images/Pngtreevector_hospital_icon.png'
import call from '../images/call.png'

function WhyUsnew() {
    return (
        <div style={{backgroundColor: '#ebf5fc',paddingTop:'30px'}}>
        <div className='whyus_head'>Why Choose Us</div>
        <div className='whyusnew'>
            <div className='card'>
                <div className='box'>
                    <div className='content'>
                        <img src={location} alt='location' />
                        <h3>Live Tracking</h3>
                        <p>An individual can book an ambulance & Track it.</p>
                    </div>
                </div>
            </div>
            <div className='card'>
                <div className='box'>
                    <div className='content'>
                        <img src={traffic} alt='traffic' />
                        <h3>Smart traffic signals</h3>
                        <p>An individual can book an ambulance & Track it.</p>
                    </div>
                </div>
            </div>
            <div className='card'>
                <div className='box'>
                    <div className='content'>
                        <img src={premed} alt='pre-med' />
                        <h3>Pre-Medication</h3>
                        <p>An individual can book an ambulance & Track it.</p>
                    </div>
                </div>
            </div>
            <div className='card'>
                <div className='box'>
                    <div className='content'>
                        <img src={call} alt='call' />
                        <h3>On call communication</h3>
                        <p>An individual can book an ambulance & Track it.</p>
                    </div>
                </div>
            </div>
        </div>
        </div>
    )
}

export default WhyUsnew
            // <div className='whyusnew_head'>Why Choose Us</div>
            // <div className='whyusnew_body'>
            //     <div className='whyusnew_logo'>
            //         <img src={location} alt='location' />
            //     </div>
            //     <div className='whyusnew_contain'>
            //         <div className='home_title'>Live Tracking</div>
            //         <div>An individual can book an ambulance & Track it.</div>
            //     </div>
            // </div>
            // <div className='whyusnew_body'>
            //     <div className='whyusnew_logo'>
            //         <img src={traffic} alt='traffic' />
            //     </div>
            //     <div className='whyusnew_contain'>
            //         <div className='home_title'>Smart traffic signals</div>
            //         <div>An individual can book an ambulance & Track it.</div>
            //     </div>
            // </div>
            // <div className='whyusnew_body'>
            //     <div className='whyusnew_logo'>
            //         <img src={premed} alt='medical' />
            //     </div>
            //     <div className='whyusnew_contain'>
            //         <div className='home_title'>Pre-Medication</div>
            //         <div>An individual can book an ambulance & Track it.</div>
            //     </div>
            // </div>
            // <div className='whyusnew_body'>
            //     <div className='whyusnew_logo'>
            //         <img src={call} alt='call' />
            //     </div>
            //     <div className='whyusnew_contain'>
            //         <div className='home_title'>On call communication</div>
            //         <div>An individual can book an ambulance & Track it.</div>
            //     </div>
            // </div>