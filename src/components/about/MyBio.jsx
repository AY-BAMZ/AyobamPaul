import React from 'react'
import { Row, Col } from 'react-bootstrap';
import './Index.css';

function MyBio() {
    return (
        <div className='myBio'>
            <Row className="myBioRow">
                <Col md={5} className="myBioCol">
                    <div className="myImage">
                        <img src="https://res.cloudinary.com/dmixz7eur/image/upload/v1602249926/1564682795254_mwhale.jpg" alt="Ayobami Paul" />
                    </div>
                </Col>
                <Col md={6} className="myBioCol">
                    <div className="myBioContent">
                        <h1>Ayobami Paul</h1>
                        <div style={{ width: 100, height: 5, background: 'rgb(218, 0, 55)' }}></div>
                        <h6>Ayobami is a designer focused on building brands, UI UX Design and creating digital experiences — currently working at Cashaam.</h6>
                        <p>He specializes in bridging the tenets of brand identity with UX/UI to create innovative and impactful design solutions for the modern age.

                            Aside from design, Lisa plays piano, runs long distances, and consistently binges episodes of 30 Rock.
                            <br /><br />
                            <span>— Based in Lagos Nigeria area</span></p>
                    </div>
                </Col>
            </Row>
            <div className="segment"></div>
            <Row className="myInfo">
                <Col md={3} className="myInfoCol">
                    <div className="infoFeed">
                        <h5>EDUCATION</h5>
                        <div style={{ marginBottom: 15, width: 30, height: 4, background: 'rgb(218, 0, 55)' }}></div>
                        <p><b >The Federal University of Technology Akure</b><br />Mechanical Engineering<br /><span>August 2021</span></p>
                        <p><b>HNG Internship 7.0</b><br />UI UX Design Intern <br /><span>july 2020</span></p>
                    </div>
                </Col>
                <Col md={3} className="myInfoCol">
                    <div className="infoFeed">
                        <h5>EXPERIENCE</h5>
                        <div style={{ marginBottom: 15, width: 30, height: 4, background: 'rgb(218, 0, 55)' }}></div>
                        <p><b>Cashaam Ecommerce </b><br /><span>April 2021 - present</span></p>
                        <p><b>Easylink Cafe </b><br /> <span>May 2017 - January 2021</span></p>
                    </div>
                </Col>
                <Col md={3} className="myInfoCol">
                    <div className="infoFeed">
                        <h5>DESIGN SKILLS</h5>
                        <div style={{ marginBottom: 15, width: 30, height: 4, background: 'rgb(218, 0, 55)' }}></div>
                        <p>UI + UX Design, Branding + Identity, Social Media Design, Motion Design, Infographics, Typography, Stationaries Graphics, Visual Design, Design Thinking, Design Research, Creative Strategy, Packaging, Illustration, Design for Sustainability </p>
                    </div>
                </Col>
                <Col md={3} className="myInfoCol">
                    <div className="infoFeed">
                        <h5>DESIGN SKILLS</h5>
                        <div style={{ marginBottom: 15, width: 30, height: 4, background: 'rgb(218, 0, 55)' }}></div>
                        <p>Adobe XD, Figma, Sketch, Photoshop, Illustrator, InDesign, Lightroom, After Effects, CSS3 + HTML5, React JS, Bootstrap, Material UI, InVision, Miro, Google Keep</p>
                    </div>
                </Col>
                <Col md={3} className="myInfoCol">
                    <div className="infoFeed">
                        <h5>AWARDS</h5>
                        <div style={{ marginBottom: 15, width: 30, height: 4, background: 'rgb(218, 0, 55)' }}></div>
                        <p>Adobe XD, Figma, Sketch, Photoshop, Illustrator, InDesign, Lightroom, After Effects, CSS3 + HTML5, React JS, Bootstrap, Material UI, InVision, Miro, Google Keep</p>
                    </div>
                </Col>
                <Col md={3} className="myInfoCol">
                    <div className="infoFeed">
                        <h5>FEATURES</h5>
                        <div style={{ marginBottom: 15, width: 30, height: 4, background: 'rgb(218, 0, 55)' }}></div>
                        <p>LinkedIn Course: Building an Online Portfolio, Applied Arts Magazine, Newark Academy Arts Blog, New Jersey Hills Newspaper, SCAD Portfolio Curated Gallery, Medium, PRWeb</p>
                    </div>
                </Col>
                <Col md={3} className="myInfoCol">
                    <div className="infoFeed">
                        <h5>PRESS</h5>
                        <div style={{ marginBottom: 15, width: 30, height: 4, background: 'rgb(218, 0, 55)' }}></div>
                        <p>The New York Times, Forbes, TechCrunch, The Verge, Engadget, AdWeek, Search Engine Land</p>
                    </div>
                </Col>
                <Col md={3} className="myInfoCol">
                    <div className="infoFeed">
                        <h5>PRESS</h5>
                        <div style={{ marginBottom: 15, width: 30, height: 4, background: 'rgb(218, 0, 55)' }}></div>
                        <p>Design a Winning Portfolio — Tips + Tricks from a Google Designer ✨﻿</p>
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

export default MyBio
