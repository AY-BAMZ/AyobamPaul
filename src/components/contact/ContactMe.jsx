import React from 'react'
import { Row, Col } from 'react-bootstrap';
import './Index.css';

function ContactMe() {
    return (
        <div className='contactMe'>
            <h1>Get In Touch</h1>
            <h6>Available forJobs, questions, collaborations, projects & pizza.</h6>
            <p><span>— Based in Lagos Nigeria area</span></p>
            <Row className="contactMeRow">
            <Col md={5} className="contactMeCol">
                <div className="contactGif">
                    <img src="https://res.cloudinary.com/dmixz7eur/image/upload/v1624411616/my%20portfolio/Project_Name_y9ob3p.gif" alt="" />
                </div>
            </Col>
            <Col md={6} className="contactMeCol">
                <div className="contactForm">
                    <p style={{marginTop: 30}}><b>Fill out the form below.</b></p>
                    <form action="">
                        <label htmlFor="">Name *</label>
                        <div style={{display: 'flex', justifyContent: 'space-between'}} className="names">
                            <input type="text" style={{width: '48%'}} placeholder='Firstname' />
                            <input type="text" style={{width: '48%'}} placeholder='Lastname'/>
                        </div>

                        <label htmlFor="">Email Address *</label>
                        <input type="text" placeholder='Email Addres' />
                        <label htmlFor="">Subject *</label>
                        <input type="text" placeholder='Subject' />
                        <label htmlFor="">Message *</label>
                        <textarea name="" id="" cols="30" rows="10"></textarea>
                        <button type='submit'>SUBMIT</button>
                    </form>
                </div>
            </Col>
            </Row>


            <div className="segment"></div>
            <Row className="myContact">
                <Col md={3} className="myCotactCol">
                    <h5>ASSURANCE</h5>
                    <p>I make each and every job transaction with me great, so your business will be first rate. My concern is quality not quantity and amount. <br />Profits will be the result, of the by-product of great service by me. Premium Quality and 100% satisfaction is Guaranteed.</p>
                </Col>
                <Col md={3} className="myCotactCol">
                    <h5>CONNECT</h5>
                    <ul>
                        <li>Instagram</li>
                        <li>Linkedin</li>
                        <li>Twitter</li>
                        <li>Behance</li>
                        <li>Dribbble</li>
                    </ul>
                </Col>
                <Col md={3} className="myCotactCol">
                    <h5>CONTACT</h5>
                    <ul>
                        <li>+234906 682 1545</li>
                        <li>aybamz181@gmail.com</li>
                    </ul>
                </Col>
                <Col md={3} className="myCotactCol">
                    <h5>QUICK MESSAGE</h5>
                    <input placeholder='Enter your email address' type="text" name="" id="" />
                    <textarea name="" id="" cols="30" rows="10"></textarea>
                    <button type='submit'>SEND MESSAGE</button>
                </Col>
            </Row>
        </div>
    )
}

export default ContactMe
