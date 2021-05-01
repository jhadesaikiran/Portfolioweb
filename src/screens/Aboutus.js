import React from 'react'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
// import WhyUs from '../components/WhyUs'
import WhyUsnew from '../components/WhyUsNew'
import aboutus from '../images/ID20944999@2x.png'
import mask1 from '../images/Mask_Group_1.png'
import mask2 from '../images/Mask_Group_2.png'
import mask3 from '../images/Mask_Group_3.png'
import mask4 from '../images/Mask_Group_4@2x.png'

function Aboutus() {
    return (
        <div>
            <Navbar location='aboutus' />
            <div className='user_start'>
                <div className='aboutus'>
                    <div className='home_title'>Our Team</div>
                    <p>"We never lack technology, we only lack technology for service".
                    To change this criteria and to end the social issue of "Delayed
                    Ambulances", We - The four innovative minds of IIT BHU came
                    forward with the combination of technical, systematic and
                    emotional solution. The development of hardware devices, user
                    and control room websites & a driver app is the beginning stage
                    of our journey. "Priority Pulse to Priority Pulse Pvt Ltd" is one of
                    the most proudest moment.</p>
                    <div style={{display:'flex',alignItems:'center'}}>
                        <div style={{color:'rgba(125,125,125,1)',fontWeight:'bold'}}>And today we can blissfully say that</div>
                        <div style={{color:'rgba(125,125,125,1)',fontWeight:'bold',paddingRight:'5px'}}>-</div>
                        <div style={{color:'rgba(57,9,153,1)',fontWeight:'bold'}}> "Now, an ambulance can reach faster than a cab."</div>
                    </div>
                </div>
                <img src={aboutus} alt='aboutus' />
            </div>
            <div className='totalmasks'>
                <div className='mask1'>
                    <svg className="Polygon_1" viewBox="0 0 329 285">
                        <path id="Polygon_1" d="M 230.5820007324219 0 C 240.5866088867188 0 249.8310546875 5.338018417358398 254.8323364257813 14.00286197662354 L 320.9209594726563 128.5028686523438 C 325.9204711914063 137.1646423339844 325.9204711914063 147.8353729248047 320.9209594726563 156.4971466064453 L 254.8323516845703 270.9971618652344 C 249.8310699462891 279.6619873046875 240.5866088867188 285 230.5820007324219 285 L 98.41800689697266 285 C 88.41338348388672 285 79.16892242431641 279.6619873046875 74.16764068603516 270.9971313476563 L 8.07905101776123 156.4971313476563 C 3.07953405380249 147.8353576660156 3.079535484313965 137.1646270751953 8.07905387878418 128.5028533935547 L 74.16767120361328 14.00285243988037 C 79.16896057128906 5.338014602661133 88.41341400146484 0 98.41802215576172 0 Z">
                        </path>
                    </svg>
                    <img src={mask1} alt='founder' />
                    <div className='aboutmasktxt'>
                        <p className='mask_head'>Nithish Veeravalli</p>
                        <p className='maskDis'>Founder</p>
                        <div className='underscore'/>
                        <p className='description'>
                            Nithish is the founder of this innovative
                            idea and the whole product was initially
                            designed by him. Later the co-Founders
                            made some innovative upgrades.
                            He is the android application developer
                            & also hardware is created by nithish.
                        </p>
                    </div>
                </div>
                <div className='mask1'>
                    <svg className="Polygon_1" viewBox="0 0 329 285">
                        <path id="Polygon_1" d="M 230.5820007324219 0 C 240.5866088867188 0 249.8310546875 5.338018417358398 254.8323364257813 14.00286197662354 L 320.9209594726563 128.5028686523438 C 325.9204711914063 137.1646423339844 325.9204711914063 147.8353729248047 320.9209594726563 156.4971466064453 L 254.8323516845703 270.9971618652344 C 249.8310699462891 279.6619873046875 240.5866088867188 285 230.5820007324219 285 L 98.41800689697266 285 C 88.41338348388672 285 79.16892242431641 279.6619873046875 74.16764068603516 270.9971313476563 L 8.07905101776123 156.4971313476563 C 3.07953405380249 147.8353576660156 3.079535484313965 137.1646270751953 8.07905387878418 128.5028533935547 L 74.16767120361328 14.00285243988037 C 79.16896057128906 5.338014602661133 88.41341400146484 0 98.41802215576172 0 Z">
                        </path>
                    </svg>
                    <img src={mask4} alt='founder' />
                    <div className='aboutmasktxt'>
                        <p className='mask_head'>Medam Sai Harish</p>
                        <p className='maskDis'>Co-Founder</p>
                        <div className='underscore'/>
                        <p className='description'>
                            Harish is the Co- founder of Priority Pulse,
                            who is a software development enthusiast,
                            fast learner & puts all the ideas into practice
                            immediately without any delays.
                            He is the full stack website developer of our
                            team, Priority Pulse Pvt. Ltd.
                        </p>
                    </div>
                </div>
                <div className='mask1'>
                    <svg className="Polygon_1" viewBox="0 0 329 285">
                        <path id="Polygon_1" d="M 230.5820007324219 0 C 240.5866088867188 0 249.8310546875 5.338018417358398 254.8323364257813 14.00286197662354 L 320.9209594726563 128.5028686523438 C 325.9204711914063 137.1646423339844 325.9204711914063 147.8353729248047 320.9209594726563 156.4971466064453 L 254.8323516845703 270.9971618652344 C 249.8310699462891 279.6619873046875 240.5866088867188 285 230.5820007324219 285 L 98.41800689697266 285 C 88.41338348388672 285 79.16892242431641 279.6619873046875 74.16764068603516 270.9971313476563 L 8.07905101776123 156.4971313476563 C 3.07953405380249 147.8353576660156 3.079535484313965 137.1646270751953 8.07905387878418 128.5028533935547 L 74.16767120361328 14.00285243988037 C 79.16896057128906 5.338014602661133 88.41341400146484 0 98.41802215576172 0 Z">
                        </path>
                    </svg>
                    <img src={mask3} alt='founder' />
                    <div className='aboutmasktxt'>
                        <p className='mask_head'>Kandru Sudeep Kumar</p>
                        <p className='maskDis'>Co-Founder</p>
                        <div className='underscore'/>
                        <p className='description'>
                            Sudeep is the Co- founder of Priority Pulse
                            Who is a Graphic Designer , Publicity & Social
                            media manager. He is also a UI, UX designer
                            for the whole company. He will be mostly
                            dealing with the public relation stuff.
                        </p>
                    </div>
                </div>
                <div className='mask1'>
                    <svg className="Polygon_1" viewBox="0 0 329 285">
                        <path id="Polygon_1" d="M 230.5820007324219 0 C 240.5866088867188 0 249.8310546875 5.338018417358398 254.8323364257813 14.00286197662354 L 320.9209594726563 128.5028686523438 C 325.9204711914063 137.1646423339844 325.9204711914063 147.8353729248047 320.9209594726563 156.4971466064453 L 254.8323516845703 270.9971618652344 C 249.8310699462891 279.6619873046875 240.5866088867188 285 230.5820007324219 285 L 98.41800689697266 285 C 88.41338348388672 285 79.16892242431641 279.6619873046875 74.16764068603516 270.9971313476563 L 8.07905101776123 156.4971313476563 C 3.07953405380249 147.8353576660156 3.079535484313965 137.1646270751953 8.07905387878418 128.5028533935547 L 74.16767120361328 14.00285243988037 C 79.16896057128906 5.338014602661133 88.41341400146484 0 98.41802215576172 0 Z">
                        </path>
                    </svg>
                    <img src={mask2} alt='founder' />
                    <div className='aboutmasktxt'>
                        <p className='mask_head'>Jhade Sai Kiran</p>
                        <p className='maskDis'>Co-Founder</p>
                        <div className='underscore'/>
                        <p className='description'>
                            Kiran is the Co- founder of Priority Pulse
                            Who is a front end web developer.
                            He is also a work enthusiast who dedicate
                            all his prime time research new innovative
                            stuff to the company. He will be mostly
                            dealing with the presentations of Priority Pulse.
                        </p>
                    </div>
                </div>
            </div>
            <WhyUsnew />
            <Footer />
        </div>
    )
}

export default Aboutus