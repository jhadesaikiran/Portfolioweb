import React from 'react'
import { useHistory, useLocation } from 'react-router'
import logo from '../images/PP_logo_yellow.png'

function Navbar({location}) {
    const history = useHistory();
    return (
        <div className='navbar'>
            <div className='super' />
            <img className='navbar_logo' src={logo} alt='logo' />
            <div className='navbar_list'>
                <div className={location==='home' ? 'odd' : 'even'} onClick={()=>history.push('/')}>Home</div>
                <div className={location==='user' ? 'odd' : 'even'} onClick={()=>history.push('/user')}>User</div>
                <div className={location==='hospital' ? 'odd' : 'even'} onClick={()=>history.push('/hospital')}>Hospital</div>
                <div className={location==='aboutus' ? 'odd' : 'even'} onClick={()=>history.push('/aboutus')}>About Us</div>
                <div className={location==='collab' ? 'odd' : 'even'} onClick={()=>history.push('/collaborate')}>Collaborate</div>
            </div>
        </div>
    )
}

export default Navbar
