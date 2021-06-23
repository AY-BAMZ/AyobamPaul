import React from 'react'
import './Index.css'
import SingleWork from './SingleWork'
import { Row, Col  } from 'react-bootstrap';

function Works() {
    return (
        <div className='works'>
            <Row className="worksRow">
                <Col className="worksCol" md={6}><SingleWork /></Col>
                <Col className="worksCol" md={6}><SingleWork /></Col>
                <Col className="worksCol" md={6}><SingleWork /></Col>
                <Col className="worksCol" md={6}><SingleWork /></Col>
                <Col className="worksCol" md={6}></Col>
                <Col className="worksCol" md={6}></Col>
            </Row>
        </div>
    )
}

export default Works
