import React, { useEffect, useState } from 'react';
import { Button, Container } from 'react-bootstrap';
import { Link, useParams } from 'react-router-dom/cjs/react-router-dom.min';
import useAuth from '../../../hooks/useAuth';
import SingleOrder from './SingleOrder';
const MyOrders = () => {
    const { uEmail } = useParams();
    const [myorder, setmyorder] = useState([]);

    const { user } = useAuth();
    useEffect(() => {
        fetch(`http://localhost:5000/purchase/${user.email}`)
            .then(res => res.json())
            .then(data => {
                setmyorder(data);
                console.log(data);

            })
    }, [uEmail])


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
                        myorder.map(myorder => <SingleOrder key={myorder._id} myorder={myorder}></SingleOrder>)
                    }



                </tbody>
            </table>
        </Container>
    );
};

export default MyOrders;