import React, { useEffect, useState } from 'react';
import { Col, Container, Nav, Row } from 'react-bootstrap';
import "./Home.css";
import "./banner.jpg"
import { HashLink } from 'react-router-hash-link';
import Footer from '../Footer/Footer';
import AboutUs from '../AboutUs/AboutUs';
import AllReviews from '../AllReviews/AllReviews';
import SingleProduct from '../Products/SingleProduct';

const Home = () => {

    const [productData, setproductData] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/products')
            .then(res => res.json())
            .then(data => {
                setproductData(data.slice(0, 4));
            })
    }, [])

    return (
        <>
            <Container className="home ">
                <div className="d-flex align-items-center h-100">
                    <Container className="p-5 " >
                        <Row>
                            <Col xs={12} lg={12} className=" align-middle" >
                                <Container className="container-lg  align-items-center align-middle">
                                    <div className=''>
                                        <h1 className="align-items-center fw-bolder fs-1">
                                            See the World   <span className="text-info" ></span> <br />As Never Before <br /> <span className="text-info"></span>
                                        </h1>

                                        <button type="button" className="btn btn-outline-danger px-5 w-47"><Nav.Link as={HashLink} to="/products" >Explore More</Nav.Link></button>
                                    </div>
                                </Container>
                            </Col>

                        </Row>
                    </Container>
                </div >
                <Container className=''>
                    <h1 className='text-center py-5 '>Products</h1>

                    <Container>
                        <Container className="mb-5">
                            <Row xs={1} md={2} lg={3} className="g-4">
                                {
                                    productData.map(productData => <SingleProduct key={productData.key} productData={productData}></SingleProduct>)
                                }

                            </Row>
                        </Container>
                    </Container>

                </Container>

                <AboutUs></AboutUs>
                <AllReviews></AllReviews>
                <Footer></Footer>
            </Container >








        </>
    );
};

export default Home;