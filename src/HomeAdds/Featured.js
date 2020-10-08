import React, { useState } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';


const Featured = props => {



    const [modal, setModal] = useState(false);
    const toggle = () => setModal(!modal);
    return (
        <div className="featured-items-container d-flex">

            <div className="featured-item">
                <div className="card">
                    <img src="https://live.staticflickr.com/65535/50379021943_a85bdb8c63_n.jpg"></img>
                    <div className="card-body">
                        <h6 class="card-title">Listen to Vergils battle theme from DMC5 Special Edition now</h6>
                        <Button onClick={toggle} className="featured-button"><i class="fa fa-headphones"></i></Button>
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
                    <img src="https://live.staticflickr.com/65535/50423890556_1e46a20e2f_n.jpg"></img>
                    <div className="card-body">
                        <h6 class="card-title">Watch the full walkthrough of Mafia Mafia: Definitive Edition</h6>
                        <Button onClick={toggle} className="featured-button"><i class="fa fa-play"></i></Button>
                        <Modal isOpen={modal} toggle={toggle} >
                            <iframe width="560" height="315" src="https://www.youtube.com/embed/xcajP0wu6RA"
                                frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media;
                          gyroscope; picture-in-picture" allowfullscreen></iframe>
                        </Modal>
                    </div>
                </div>
            </div>

            <div className="featured-item">
                <div className="card">
                    <img src="https://live.staticflickr.com/65535/50423917916_87ed5e98e8_n.jpg"></img>
                    <div className="card-body">
                        <h6 class="card-title">Take a look at the official reveal trailer of Final Fantasy XVI</h6>
                        <Button onClick={toggle} className="featured-button"><i class="fa fa-play"></i></Button>
                        <Modal isOpen={modal} toggle={toggle} >
                            <iframe width="560" height="315" src="https://www.youtube.com/embed/4FUf4lEcZLI"
                                frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media;
                          gyroscope; picture-in-picture" allowfullscreen></iframe>
                        </Modal>
                    </div>
                </div>
            </div>

            <div className="featured-item">
                <div className="card">
                    <img src="https://live.staticflickr.com/65535/50423897026_492a229ea1_n.jpg"></img>
                    <div className="card-body">
                        <h6 class="card-title">Watch the Crash Bandicoot 4 review from Easy Allies</h6>
                        <Button onClick={toggle} className="featured-button"><i class="fa fa-play"></i></Button>
                        <Modal isOpen={modal} toggle={toggle} >
                            <iframe width="560" height="315" src="https://youtu.be/AW2EEoW_Tw4"
                                frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media;
                          gyroscope; picture-in-picture" allowfullscreen></iframe>
                        </Modal>
                    </div>
                </div>
            </div>

            <div className="featured-item">
                <div className="card">
                    <img src="https://live.staticflickr.com/65535/50423917851_6375881ac2_n.jpg"></img>
                    <div className="card-body">
                        <h6 class="card-title">Take a look and be intrigued from the Little Devil inside gameplay trailer</h6>
                        <Button onClick={toggle} className="featured-button"><i class="fa fa-play"></i></Button>
                        <Modal isOpen={modal} toggle={toggle} >
                            <iframe className="featured-video" src="https://www.youtube.com/embed/Jrg9KxGNeJY"
                                frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; 
                                gyroscope; picture-in-picture" allowfullscreen></iframe>
                        </Modal>
                    </div>
                </div>
            </div>


        </div>
    )
}

export default Featured;