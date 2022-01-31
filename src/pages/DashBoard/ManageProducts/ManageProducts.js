import React, { useEffect, useState } from 'react';
import { Button, Container } from 'react-bootstrap';
import { Link, useParams } from 'react-router-dom/cjs/react-router-dom.min';
import MangeSingleProduct from './MangeSingleProduct';

const ManageProducts = () => {
    const [product, setproduct] = useState([]);

    useEffect(() => {
        fetch(`http://localhost:5000/products`)
            .then(res => res.json())
            .then(data => {
                setproduct(data);
                console.log(data);
            })
    }, []);
    return (
        <Container>
            <Link to="/db" className="m-5"> <Button className='btn btn-outline-light  my-2' > <i class="fas fa-arrow-left"></i> </Button></Link>
            <h1 className='text-center py-5'>Manage Products</h1>
            <table class="table table-striped">
                <thead>
                    <tr>
                        <th scope="col">Product Id</th>
                        <th scope="col">Product Title</th>
                        <th scope="col">Image</th>
                        <th scope="col">Derails</th>
                        <th scope="col">Price</th>
                        <th scope="col"></th>
                    </tr>
                </thead>
                <tbody>
                    {
                        product.map(product => <MangeSingleProduct key={product._id} product={product}></MangeSingleProduct>)
                    }
                </tbody>
            </table>
        </Container>
    );
};

export default ManageProducts;