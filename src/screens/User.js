import React from 'react'
// import WhyUs from '../components/WhyUs'
import user from '../images/ID7495.png'
import hospi from '../images/ID10593@2x.png'
import imagema from '../images/ID2254423.png'
import Slider from '../components/Slider'
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

function User() {
    return (
        <div>
            <Navbar location='user' />
            <div className='user_start'>
                <div className='user_buttons'>
                    <button onClick={()=>window.open('https://user.prioritypulse.co.in','_blank')} className='user_bt1'>Book an Ambulance</button>
                    <button onClick={()=>window.open('https://user.prioritypulse.co.in/login','_blank')} className='user_bt2'>Login/ Signup</button>
                </div>
                <img src={user} alt='user' />
            </div>
            <div className='whyus_head'>How it Works ?</div>
            <div className='user_howitworks_body'>
                <div className='user_howitworks_txt'>
                    <div>Search and select the hospitals nearby</div>
                    <p>User can search hospital according to his location. Person can book from anyplace from the world.</p>
                    <div>Book an Ambulance and premedication in ambulance</div>
                    <p>User can book and ambulance by calling to the hospital authority and send them the exact location.</p>
                    <div>Track Ambulance and connect to driver</div>
                    <p>After accepting the ride, you can track and get in touch with ambulance driver.</p>
                    <div>Live feed to hospital doctors</div>
                    <p>User can directly send live feed to doctors and keep them steady.</p>
                    <div>Premedication</div>
                    <p>By the time patient arrives to hospital, hospital help be ready with the premediction that is to be done.</p>
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

export default User
