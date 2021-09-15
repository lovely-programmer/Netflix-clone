import React,{useState,useEffect} from 'react'
import './Nav.css'
import netflixLogo from './netflix-logo-png-2562.png'
import netflixAvatar from './Netflix-avatar.png'

function Nav() {
    const [show, handleShow] = useState(false) 
    useEffect(() => {
        window.addEventListener("scroll",()=>{
            if (window.scrollY > 100) {
                handleShow(true)
            }
            else{
                handleShow(false)
            }
        })

    }, [])

    return (
        <div className={`nav ${show && "nav_black"}`}>
            <img className='nav_logo' src={netflixLogo} alt="Netflix Logo" />
            <img className='nav_avatar' src={netflixAvatar} alt="Avatar_Logo" />
        </div>
    )
}

export default Nav
