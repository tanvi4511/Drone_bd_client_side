import React from 'react';
import { Card, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const SingleProduct = (props) => {

    const { _id, title, details, price, img } = props.productData;

    return (
        <Col>
            <Card className="h-100  hoverEffect">
                <Card.Img className="image-size" variant="top" src={img} />
                <Card.Body>
                    <h3 className='text-success'>{title}</h3>
                    <p className='text-justify float-start text-secondary'>{details}</p>
                    <p><span>Price: </span><span className='text-success fw-bold'>${price}</span></p>

                    <Link className="text-decoration-none text-dark" to={`/purchase/${_id}`}><button type="button" className="btn btn-outline-dark   w-100 ">Order Now</button></Link>
                </Card.Body>
            </Card>
        </Col>
    );
};

export default SingleProduct;