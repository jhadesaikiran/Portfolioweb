import React from 'react'
import { useHistory } from 'react-router'
import logo from '../images/PP_logo_yellow.png'

function Navbar({location}) {
    const history = useHistory();
    console.log(location)
    return (
        <div className='navbar'>
            <div className='super' />
            <img className='navbar_logo' src={logo} alt='logo' />
            <div className='navbar_list'>
                <nav className='slider'>
                    <a href='/'>Home</a>
                    <a href='/user'>User</a>
                    <a href='/hospital'>Hospital</a>
                    <a href='/aboutus'>About Us</a>
                    <a href='/collaborate'>Collaborate</a>
                    {location==='home' && <div className="animation start-home" />}
                    {location==='user' && <div className="animation start-user" />}
                    {location==='hospital' && <div className="animation start-hospital" />}
                    {location==='aboutus' && <div className="animation start-aboutus" />}
                    {location==='collab' && <div className="animation start-collaborate" />}
                </nav>
            </div>
        </div>
    )
}

export default Navbar

{/* <div className={location==='home' ? 'odd' : 'even'} onClick={()=>history.push('/')}>Home</div>
<div className={location==='user' ? 'odd' : 'even'} onClick={()=>history.push('/user')}>User</div>
<div className={location==='hospital' ? 'odd' : 'even'} onClick={()=>history.push('/hospital')}>Hospital</div>
<div className={location==='aboutus' ? 'odd' : 'even'} onClick={()=>history.push('/aboutus')}>About Us</div>
<div className={location==='collab' ? 'odd' : 'even'} onClick={()=>history.push('/collaborate')}>Collaborate</div> */}