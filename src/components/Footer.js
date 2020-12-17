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
            <h2>About Us</h2>
            <Link to='/collabrate'>How it works</Link>
            <Link to='/'>Testimonials</Link>
            <Link to='/'>Careers</Link>
            <Link to='/'>Investors</Link>
            <Link to='/'>Terms of Service</Link>
          </div>
          <div class='footer-link-items'>
            <h2>Contact Us</h2>
            <Link to='/'>Contact</Link>
            <Link to='/'>Support</Link>
            <Link to='/'>Destinations</Link>
            <Link to='/'>Sponsorships</Link>
          </div>
        </div>
        <div className='footer-link-wrapper'>
          <div class='footer-link-items'>
            <h2>Videos</h2>
            <Link to='/'>Submit Video</Link>
            <Link to='/'>Ambassadors</Link>
            <Link to='/'>Agency</Link>
            <Link to='/'>Influencer</Link>
          </div>
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