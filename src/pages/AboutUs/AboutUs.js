import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import logo from "./AboutUs.jpg"

const AboutUs = () => {
    return (
        <Container className='pt-3'>
            <h1 className='text-center my-5 py-3 fs-1'>About Us</h1>
            <Row>
                <Col xs={12} lg={6} className="font-weight-light" >
                    <Container className="container-lg  ">


                        <p className="text-justify font-italic">We’ve got you covered From drone fleet management to complete site documentation and analysis, we have your back every step of the way.
                            Save time and money Harness the power of visual data to cut unnecessary scheduling hours and shave money off the budget.
                            Gain the competitive edge Our advanced technology equips you with a powerful digital reconstruction, simplifying your workflow and streamlining your processes.
                            Capitalize on best-in-class customer service Our team of experts is there to answer your toughest questions via chat, phone, or email</p>

                    </Container>
                </Col>
                <Col xs={12} lg={6} className=" align-middle" >
                    <Container className="container-lg  align-items-center align-middle">
                        <div className=''>
                            <img className='img-fluid' src={logo} alt=''></img>
                        </div>
                    </Container>
                </Col>

            </Row>


        </Container>
    );
};

export default AboutUs;