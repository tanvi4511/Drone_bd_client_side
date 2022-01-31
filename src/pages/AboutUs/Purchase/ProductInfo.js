import React from 'react';
import { Card, Col, Container, Row } from 'react-bootstrap';

const ProductInfo = (props) => {


    const { _id, title, details, price, img } = props.productData;
    return (
        <div className="h-100  ">

            <Container className='pt-3'>
                <Row>
                    <Col xs={12} lg={6} className="font-weight-light" >
                        <Container className="container-lg  ">

                            <h3 className='text-success'>{title}</h3>
                            <hr></hr>
                            <p className='text-justify float-start text-secondary'>{details}</p>
                            <p><span>Price: </span><span className='text-success fw-bold'>${price}</span></p>

                        </Container>
                    </Col>
                    <Col xs={12} lg={6} className=" align-middle" >
                        <Container className="container-lg  align-items-center align-middle">
                            <div className=''>
                                <img className='img-fluid' src={img} alt=''></img>
                            </div>
                        </Container>
                    </Col>

                </Row>


            </Container>
        </div>
    );
};

export default ProductInfo;