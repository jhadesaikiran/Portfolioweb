import React from 'react'
import Slider from '../components/Slider'
// import WhyUs from '../components/WhyUs'
import hospi from '../images/ID10593@2x.png'
import user from '../images/ID7495.png'
import imagema from '../images/ID2254423.png'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import WhyUsnew from '../components/WhyUsNew'

const tutorialSteps = [
    {
        label: 'Hospital',
        imgPath:hospi,
    },
    {
        label: 'NeONBRAND Digital Marketing, Las Vegas, United States',
        imgPath:
        'https://images.unsplash.com/photo-1518732714860-b62714ce0c59?auto=format&fit=crop&w=400&h=250&q=60',
    },
    {
        label: 'Hospital',
        imgPath:hospi,
    },
    {
        label: 'Goč, Serbia',
        imgPath:
        'https://images.unsplash.com/photo-1512341689857-198e7e2f3ca8?auto=format&fit=crop&w=400&h=250&q=60',
    },
    {
        label: 'Hospital',
        imgPath:hospi,
    },
];

function Hospital() {
    return (
        <div>
            <Navbar location='hospital' />
            <div className='hospi_start'>
                <div className='user_buttons'>
                    <button onClick={()=>window.open('https://hospital.prioritypulse.co.in/register','_blank')} className='user_bt1'>Register Hospital</button>
                    <button onClick={()=>window.open('https://hospital.prioritypulse.co.in/login','_blank')} className='user_bt2'>Login/ Signup</button>
                </div>
                <img src={hospi} alt='user' />
            </div>
            <div className='whyus_head'>How it Works ?</div>
            <div className='user_howitworks_body'>
                <div className='user_howitworks_txt'>
                    <div>Booking and track ambulance</div>
                    <p>Hospital authority can give and confirm booking by filling data and assigning the driver.</p>
                    <div>Live Feed</div>
                    <p>Doctors can get a live feed from the patient and respond accordingly.</p>
                    <div>Premedication</div>
                    <p>Authority can make arrangements as doctor could know whole situation of the case.</p>
                    <div>Live feed to hospital doctors</div>
                    <p>User can directly send live feed to doctors and keep them steady.</p>
                    <div>Manage Ambulance drivers</div>
                    <p>Can assign, add, manage ambulance drivers and know each rides they make.</p>
                </div>
                <div>
                    <Slider tutorialSteps={tutorialSteps} />
                </div>
            </div>
            <WhyUsnew />
            <Footer />
        </div>
    )
}

export default Hospital
