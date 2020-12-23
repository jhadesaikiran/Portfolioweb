import React from 'react';
import './Footer.css';
import { Button } from './Button';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <div className='footer-container'>
      <section className='footer-subscription'>
        <p className='footer-subscription-heading'>
          Join the Startup and help country to step forward in development
        </p>
        <p className='footer-subscription-text'>
        Email : prioritypulse@gmail.com
        </p>
        <div className='input-areas'>
          <form>
            <input
              className='footer-input'
              name='email'
              type='email'
              placeholder='Your Email'
            />
            <Button buttonStyle='btn--outline'>Contact</Button>
          </form>
        </div>
      </section>
      <div class='footer-links'>
        <div className='footer-link-wrapper'>
        
          <div class='footer-link-items'>
            <h2>Contact Us</h2>
            <Link to='/'>Telephone no :</Link>
            <Link to='/'>+91 7032629788</Link>
            <Link to='/'>Office Address :</Link>
            <Link to='/'>Priority Pulse, 5th Floor CDC IIT(BHU), Varanasi, UP 221005 India</Link>
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
      </div>
      <section class='social-media'>
        <div class='social-media-wrap'>
          <div class='footer-logo'>
            <Link to='/' className='social-logo'>
              Priority Pulse
              <i class="fas fa-traffic-light" />
            </Link>
          </div>
          <small class='website-rights'>Priority Pulse © 2020</small>
          <div class='social-icons'>
            <Link
              class='social-icon-link facebook'
              onClick={()=>window.location.replace('https://www.facebook.com/PriorityPulse/')}
              target='_blank'
              aria-label='Facebook'
            >
              <i class='fab fa-facebook-f' />
            </Link>
            <Link
             onClick={()=>window.location.replace('https://www.instagram.com/priority_pulse/?hl=en')} 
              class='social-icon-link instagram'
            
              target='_blank'
              aria-label='Instagram'
            >
              <i class='fab fa-instagram' />
            </Link>
           
         
            <Link
              class='social-icon-link twitter'
              onClick={()=>window.location.replace('https://in.linkedin.com/company/priority-pulse-pvt')}
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