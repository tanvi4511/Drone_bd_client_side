import React, { useState } from 'react';
import { Button, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom/cjs/react-router-dom.min';

const MakeAdmin = () => {

    const [email, setEmail] = useState('');


    const handleOnBlur = e => {
        setEmail(e.target.value);

    }

    const handleSubmit = (e) => {
        const user = { email };
        fetch('http://localhost:5000/user/admin', {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(user)
        })
            .then(res => res.json())
            .then(data => {
                alert("Successfully");

            })

        e.preventDefault()
    };


    return (
        <Container className='d-flex justify-content-center p-5'>
            <Link to="/db" className="pe-5"> <Button className='btn btn-outline-light  my-2' > <i class="fas fa-arrow-left"></i> </Button></Link>
            <h2 className='pe-5'>Make Admin</h2>

            <form onSubmit={handleSubmit} className="input-group mb-3 w-50  text-center">
                <input onBlur={handleOnBlur} type="text" className="form-control w-50" placeholder="Email" />
                <div className="input-group-prepend">
                    <button className="btn btn-outline-success" type="submit">Make Admin</button>
                </div>
            </form>
        </Container>
    );
};

export default MakeAdmin;