import React, { useEffect, useState } from 'react';
import { Container, Row } from 'react-bootstrap';

import SingleProduct from './SingleProduct';


const Products = () => {

    const [productData, setproductData] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/products')
            .then(res => res.json())
            .then(data => {
                setproductData(data);
            })
    }, [])







    return (

        <Container>
            <h1 className='text-center p-5 fw-bold'>Products</h1>
            <hr></hr>
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
    );
};

export default Products;