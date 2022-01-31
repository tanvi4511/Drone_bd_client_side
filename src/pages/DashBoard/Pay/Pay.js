import React from 'react';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom/cjs/react-router-dom.min';

const Pay = () => {
    return (
        <div className='text-center bg-light p-3 my-4'>
            <Link to="/db" className="m-5"> <Button className='btn btn-outline-light  my-2' > <i class="fas fa-arrow-left"></i> </Button></Link>
            <h1 className="fs-1 text-certer">Payment system coming soon.</h1>
        </div>
    );
};

export default Pay;