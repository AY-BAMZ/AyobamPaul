import React from 'react'
import './Index.css'
import { Row, Col  } from 'react-bootstrap';


function Welcome() {
    return (
        <div className='welcome'>
            <Row className='row'>
                <Col className='col' md={6}>
                    <h5>Hello, I'm Ayobami Paul</h5>
                    <div style={{ height: 5, width: 100, marginLeft: 20, background: '#DA0037' }}></div>
                    <h1>I'm a designer focused on <br /> <span>UI UX Design</span></h1>

                    <p>currently working at Cashaam</p>
                </Col>
                <Col md={6}>
                    <div className="myImage">
                        <img src="https://res.cloudinary.com/dmixz7eur/image/upload/v1624110199/my%20portfolio/27021278_1364679790344495_4269793300016600637_o_cspayp.png" alt="" />
                    </div>
                </Col>
            </Row>
        </div>
    )
}

export default Welcome
