import React, { useState } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';


const Featured = props => {



    const [modal, setModal] = useState(false);
    const toggle = () => setModal(!modal);
    return (
        <div className="featured-items-container d-flex">

            <div className="featured-item">
                <div className="card">
                    <img src="https://live.staticflickr.com/65535/50363677716_a608803a85_z.jpg"></img>
                    <div className="card-body">
                        <h5 class="card-title">Title</h5>
                        <Button onClick={toggle} className="featured-button">Click here</Button>
                        <Modal isOpen={modal} toggle={toggle} >   
                                <iframe className="featured-video" src="https://www.youtube.com/embed/Jrg9KxGNeJY" 
                                frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; 
                                gyroscope; picture-in-picture" allowfullscreen></iframe>
                        </Modal>
                    </div>
                </div>
            </div>

            <div className="featured-item">
                <div className="card">
                    <img src="https://live.staticflickr.com/65535/50363677716_a608803a85_z.jpg"></img>
                    <div className="card-body">
                        <h5 class="card-title">Title</h5>
                        <p class="card-text">Go somewhere</p>
                    </div>
                </div>
            </div>

            <div className="featured-item">
                <div className="card">
                    <img src="https://live.staticflickr.com/65535/50363677716_a608803a85_z.jpg"></img>
                    <div className="card-body">
                        <h5 class="card-title">Title</h5>
                        <p class="card-text">Go somewhere</p>
                    </div>
                </div>
            </div>

            <div className="featured-item">
                <div className="card">
                    <img src="https://live.staticflickr.com/65535/50363677716_a608803a85_z.jpg"></img>
                    <div className="card-body">
                        <h5 class="card-title">Title</h5>
                        <p class="card-text">Go somewhere</p>
                    </div>
                </div>
            </div>





        </div>
    )
}

export default Featured;