import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';

const Footer = () => {
    return (
        <div className='pt-5'>
            <div className="bg-light text-dark pt-5 sticky-bottom">
                <Container >
                    <Row className="mx-auto lh-lg px-5ify-content-center d-flex just" >
                        <Col lg={4} md={6}>
                            <h1 className="fw-bolder" to="/home">Drone<span className="text-danger"> BD</span></h1>
                            <p> See the World
                                As Never Before </p>
                        </Col>
                        <Col lg={4} md={6}>
                            <ul className="list-unstyled nav-links">
                                <li className="fs-3 text-danger fw-bold">Our Address</li>
                                <li>Panthopath,Dhaka-1200 </li>

                            </ul></Col>
                        <Col lg={4} md={6}>

                            <ul className="list-unstyled nav-links fw-bold">
                                <li className="fs-3 text-danger">Social Media</li>
                                <li><i class="fab fa-facebook fs-4"></i> Facebook</li>
                                <li> <i class="fab fa-youtube fs-4"></i> Youtube</li>
                                <li><i class="fab fa-instagram fs-4"></i> Instagram</li>

                            </ul>
                        </Col>
                    </Row>
                    <hr />
                    <Row >
                        <p className="text-center p-3 bg-dark text-light m-0" >Copyright © 2022, All Rights Reserved </p>
                    </Row>
                </Container>

            </div>
        </div>
    );
};

export default Footer;