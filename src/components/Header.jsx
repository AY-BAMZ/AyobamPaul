import React, { useState } from 'react'
import Logo from '../logo.svg'
import './Index.css'
import { Dropdown,  } from 'react-bootstrap';
import ClearAllIcon from '@material-ui/icons/ClearAll';
import WorkPage from './home/WorkPage';
import AboutPage from './about/AboutPage'
import ContactMe from './contact/ContactMe'


function Header() {
    const [count, setCount] = useState(1);
    return (
        <div className='header'>
            <div className="navbar">
                <div className="logo">
                    <img src={Logo} alt="" />
                </div>
                <div className="navlinks">
                    <ul>
                        <li onClick={() => setCount(1)} className='active'>WORKS</li>
                        <li onClick={() => setCount(2)}>ABOUT</li>
                        <li onClick={() => setCount(3)}>CONTACT</li>
                    </ul>
                </div>
                <Dropdown className='mobileMenu'>
                    <Dropdown.Toggle style={{background: '#1B232E', border: '1px solid #999', outline: 'none'}}>
                        <ClearAllIcon />
                    </Dropdown.Toggle>

                    <Dropdown.Menu className='mobileLinks'>
                        <Dropdown.Item onClick={() => setCount(1)} className='mobileLink' href="#/action-1">WORKS</Dropdown.Item>
                        <Dropdown.Item onClick={() => setCount(2)} className='mobileLink' href="#/action-2">ABOUT</Dropdown.Item>
                        <Dropdown.Item onClick={() => setCount(3)} className='mobileLink' href="#/action-3">CONTACT</Dropdown.Item>
                    </Dropdown.Menu>
                </Dropdown>
            </div>
            <div>{count === 1 && <WorkPage />}</div>
            <div>{count === 2 && <AboutPage />}</div>
            <div>{count === 3 && <ContactMe />}</div>
        </div>
    )
}

export default Header
