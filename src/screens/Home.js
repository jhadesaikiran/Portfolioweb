import React, { useState } from 'react'
// import WhyUs from '../components/WhyUs'
import idea from '../images/Idea_concept.png'
import compu from '../images/Pngtreecomputer_monitor_pictur.png'
import user from '../images/ID7495.png'
import hosp from '../images/ID78.png'
import { useHistory } from 'react-router'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import WhyUsnew from '../components/WhyUsNew'

function Home() {
    const history = useHistory()
    const [image, setimage] = useState(null)
    return (
        <>
        <Navbar location='home' />
        <div className='home'>
            <div className='home_displaytag'>
                <img className='home_idea_img' src={idea} alt='idea' />
                <div className='home_idea_text'>
                    <div className='home_title'>Our Idea</div>
                    <p>"We never lack technology, we only lack technology for service". To change this criteria
                    and to end the social issue of "Delayed Ambulances", We - The four innovative minds of
                    IIT BHU came forward with the combination of technical, systematic and emotional
                    solution. The development of hardware devices, user and control room websites & a
                    driver app is the beginning stage of our journey. "Priority Pulse to Priority Pulse Pvt Ltd"
                    is one of the most proudest moment. Today we can blissfully say that-
                    "Now, an ambulance can reach faster than a cab."</p>
                </div>
            </div>
            <div className='whyus_head'>Our Websites</div>
            <div className='home_displaytag'>
                <div className='home_deal_text'>
                    <div id='home_flex_mobile' style={{display:'flex',alignItems:'center'}}>
                        <img style={{width:'200px',cursor:'pointer'}} 
                            onClick={()=>history.push('/user')} 
                            src={user} 
                            alt='user'
                            onMouseOver={()=>setimage(user)}
                            onMouseOut={()=>setimage(null)} 
                        />
                        <div>
                            <div className='home_title' onClick={()=>history.push('/user')}>User Website</div>
                            <p>We built an User Website which serves patient to
                            book and track an ambulance from any remote
                            location This website help user to navigate at the
                            exact spot of emergency, send live feed of patient
                            updates on condition and it serves the main part
                            of the premedication</p>
                        </div>
                    </div>
                    <div id='home_flex_mobile' style={{display:'flex',alignItems:'center'}}>
                        <img style={{width:'200px',cursor:'pointer'}} 
                            onClick={()=>history.push('/hospital')} 
                            src={hosp} 
                            alt='hospital' 
                            onMouseOver={()=>setimage(hosp)}
                            onMouseOut={()=>setimage(null)}
                        />
                        <div>
                            <div className='home_title' onClick={()=>history.push('/hospital')}>Hospital Website</div>
                            <p>
                            We developed Hospital Website from which hospitals
                            can prepare for premedication and get feed from the
                            user and from ambulance in real time and to have
                            control over ambulance drivers.
                            </p>
                        </div>
                    </div>
                </div>
                <div className='home_hover'>
                    <img className='home_compu_img' src={compu} alt='computer' />
                    {image && <img className='animating_popup' src={image} alt='img' />}
                </div>
            </div>
            <WhyUsnew />
            <Footer />
        </div>
        </>
    )
}

export default Home
