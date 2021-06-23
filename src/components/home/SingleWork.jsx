import React, { useState } from 'react'
import './Index.css'
import { Modal, Button } from 'react-bootstrap';

function SingleWork() {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    return (
        <div className='SingleWork'>
            <img src="https://res.cloudinary.com/dmixz7eur/image/upload/v1619446922/webfactory-ltd-HjxXBQ4MKD8-unsplash_jivgxs.jpg" alt="" />
            <div onClick={handleShow} className="aboutWork">
                <h2>Work Title</h2>
                <div style={{ width: 60, marginLeft: 20, height: 5, background: 'rgb(218, 0, 55)' }}></div>
                <p>brand strategy / visual design/ ux</p>
            </div>
            <Modal show={show} onHide={handleClose}>
                <Modal.Header style={{ background: '#1b232e' }} closeButton>
                </Modal.Header>
                <Modal.Body style={{ background: '#1b232e', padding: 0 }}>
                    <div className="headerContent">
                        <h2>Work Title</h2>
                        <div style={{ width: 60, marginLeft: 20, height: 6, margin: 'auto', background: 'rgb(218, 0, 55)' }}></div>
                        <p>brand strategy / visual design/ ux </p>
                        <h6>YouTube is an American online video sharing and social media platform launched by Steve Chen, Chad Hurley, and Jawed Karim in February 2005. Around the world, its users watch more than one billion hours of videos each day.</h6>

                        <div className="projectPictures">
                        <img src="https://res.cloudinary.com/dmixz7eur/image/upload/v1606037482/Artboard_1_zc7l6f.jpg" alt="" />
                        <img src="https://res.cloudinary.com/dmixz7eur/image/upload/v1606037520/gad3_qdtp4s.jpg" alt="" />
                        <img src="https://res.cloudinary.com/dmixz7eur/image/upload/v1606037589/mockup_2_urttbt.jpg" alt="" />
                        <img src="https://res.cloudinary.com/dmixz7eur/image/upload/v1606037631/Artboar_3_snteuc.jpg" alt="" />
                        <img src="https://res.cloudinary.com/dmixz7eur/image/upload/v1602591378/1a7cdff7a289468e3610bf413646a2d3_wd3zig.webp" alt="" />
                        </div>
                    </div>
                    Woohoo, you're reading this text in a modal!</Modal.Body>
                <Modal.Footer style={{ background: '#1b232e' }}>
                    <Button  style={{background: 'rgb(218, 0, 55)', width: 150, height: 50, outline: 'none', borderColor: '#1b232e'}} onClick={handleClose}>
                        Close
                    </Button>
                </Modal.Footer>
            </Modal>
        </div>
    )
}

export default SingleWork
