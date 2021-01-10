import React, {useState} from 'react';
import './Footer.css';

import { Link } from 'react-router-dom';

function Footer() {
    const [email, setemail] = useState('')
    const [name, setname] = useState('')
    const [text, settext] = useState('')
    const [message, setmessage] = useState('')
    const [messagealert, setmessagealert] = useState(false)
    const [messagealertcolor, setmessagealertcolor] = useState('')
    return (
        <div className='footer-container'>
            <section className='footer-subscription'>
                <p className='footer-subscription-heading'>
                    Join the Startup and help country to step forward in development
                </p>
                <p className='footer-subscription-text'>
                    Email : prioritypulse@gmail.com
                </p>
            </section>
            <div class='footer-links'>
                <div className='footer-link-wrapper'>
                    <div class='footer-link-items'>
                        <h2>Contact Us</h2>
                        <Link to='/'>Mobile no :</Link>
                        <Link to='/'>+91 9182687397</Link>
                    </div>
                </div>
                <div className='footer-link-wrapper'>
                    <div class='footer-link-items'>
                        <h2>Social Media</h2>
                        <Link onClick={()=>window.location.replace('https://www.instagram.com/priority_pulse/?hl=en')} >Instagram</Link>
                        <Link onClick={()=>window.location.replace('https://www.facebook.com/PriorityPulse/')}>Facebook</Link>
                        <Link onClick={()=>window.location.replace('https://in.linkedin.com/company/priority-pulse-pvt')}>Linkedin</Link>
                    </div>
                </div>
                <div className='footer-link-wrapper'>
                    <div className="footer-link-items">
                        <h2>Leave a Message</h2>
                        <form className="form-input" onSubmit={e=>{
                            e.preventDefault()
                        }}>
                            <div className='footer-input-areas'>
                                <div className="form-input-items">
                                    <input
                                        className="footer-input"
                                        name="name"
                                        type="name"
                                        value={name}
                                        onChange={(e)=>setname(e.target.value)}
                                        placeholder="Name"
                                    />
                                    <input
                                        className='footer-input'
                                        name='email'
                                        type='email'
                                        onChange={(e)=>setemail(e.target.value)}
                                        placeholder='Your Email'
                                    />
                                </div>
                                <div  className="form-input-items">
                                    <input
                                        className='footer-input-text'
                                        name='message'
                                        type='text'
                                        value={text}
                                        onChange={(e)=>settext(e.target.value)}
                                        placeholder='Message'
                                    />
                                </div>
                            </div>
                            <div className="button-style-footer">
                                <button className='btnsend' onClick={()=>{
                                        setname('')
                                        setemail('')
                                        settext('')
                                        setmessage('')
                                        setmessagealert(false)
                                }}>Reset</button>
                                <button className='btnsend' onClick={()=>{
                                    fetch('https://serverprioritypulse.herokuapp.com/contact/add',{
                                        method:'post',
                                        headers:{
                                            "Content-Type":"application/json"
                                        },body:JSON.stringify({
                                            name,email,message:text
                                        }).then(res=>res.json())
                                        .then(resss=>{
                                            setmessagealertcolor('green')
                                            setmessagealert(true)
                                            setmessage('Sent...')
                                            setname('')
                                            setemail('')
                                            settext('')
                                            setmessage('')
                                        }).catch(err => {
                                            console.log(err)
                                            setmessagealertcolor('red')
                                            setmessagealert(true)
                                            setmessage('Some Error Occured Try again...!!')
                                        })
                                    })
                                }}>Send</button>
                            </div>
                            {messagealert && <div style={{color:messagealertcolor}}>{message}</div>}
                        </form>
                    </div>
                </div>
            </div>
            <section class='social-media'>
                <div class='social-media-wrap'>
                    <div class='footer-logo'>
                        <Link to='/' className='social-logo'>
                            Priority Pulse
                        </Link>
                    </div>
                    <small class='website-rights'>Priority Pulse © 2020</small>
                    <div class='social-icons'>
                        <Link
                            class='social-icon-link facebook'
                            onClick={()=>window.open('https://www.facebook.com/PriorityPulse/', '_blank', 'toolbar=0,location=0,menubar=0')}
                            target='_blank'
                            aria-label='Facebook'
                        >
                            <i class='fab fa-facebook-f' />
                        </Link>
                        <Link
                            onClick={()=>window.open('https://www.instagram.com/priority_pulse/?hl=en', '_blank', 'toolbar=0,location=0,menubar=0')} 
                            class='social-icon-link instagram'
                            target='_blank'
                            aria-label='Instagram'
                        >
                            <i class='fab fa-instagram' />
                        </Link>
                        <Link
                            class='social-icon-link twitter'
                            onClick={()=>window.open('https://in.linkedin.com/company/priority-pulse-pvt', '_blank', 'toolbar=0,location=0,menubar=0')}
                            target='_blank'
                            aria-label='LinkedIn'
                        >
                            <i class='fab fa-linkedin' />
                        </Link>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default Footer;
