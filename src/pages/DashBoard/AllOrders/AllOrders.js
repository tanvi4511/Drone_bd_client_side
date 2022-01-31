import React, { useEffect, useState } from 'react';
import { Button, Container } from 'react-bootstrap';
import { Link, useParams } from 'react-router-dom/cjs/react-router-dom.min';
import useAuth from '../../../hooks/useAuth';
import AllsingleOrder from './AllsingleOrder';

const AllOrders = () => {
    const { uEmail } = useParams();
    const [myorder, setmyorder] = useState([]);

    useEffect(() => {
        fetch(`http://localhost:5000/purchase`)
            .then(res => res.json())
            .then(data => {
                setmyorder(data);


            })
    }, []);
    return (
        <Container>
            <Link to="/db" className="m-5"> <Button className='btn btn-outline-light  my-2' > <i class="fas fa-arrow-left"></i> </Button></Link>
            <table class="table table-striped">
                <thead>
                    <tr>
                        <th scope="col">Email</th>
                        <th scope="col">Product Name</th>
                        <th scope="col">Price</th>
                        <th scope="col"></th>
                    </tr>
                </thead>
                <tbody>
                    {
                        myorder.map(myorder => <AllsingleOrder key={myorder._id} myorder={myorder}></AllsingleOrder>)
                    }
                </tbody>
            </table>
        </Container>
    );
};

export default AllOrders;