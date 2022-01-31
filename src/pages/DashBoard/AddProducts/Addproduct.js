import { Container } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { Button, Row } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import { Link, useHistory } from 'react-router-dom/cjs/react-router-dom.min';
import useAuth from '../../../hooks/useAuth';

const Addproduct = () => {

    const [dataset, setData] = useState([]);
    const { register, handleSubmit, formState: { errors } } = useForm();
    const { user } = useAuth();
    const history = useHistory();


    const onSubmit = (data) => {
        // console.log(data);
        const addproduct = {
            title: data.title,
            details: data.details,
            price: data.price,
            img: data.img
        }


        fetch('http://localhost:5000/products', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(addproduct)
        }).then(res => {
            if (res.status === 200) {
                alert("Add Successfully");
                history.push('/products');


            }
        });
    };
    return (
        <div>
            {<Container>
                <Link to="/db" className="m-5"> <Button className='btn btn-outline-light  my-2' > <i class="fas fa-arrow-left"></i> </Button></Link>

                <Container className="mb-5">
                    <Row xs={12} md={12} lg={12} className="g-4">{



                    }
                        <hr></hr>
                        <h1 className='py-4 text-center'>Product Info</h1>
                        <hr></hr>
                        <form className='pb-5' onSubmit={handleSubmit(onSubmit)}>
                            <div class="row mb-4">
                                <div class="col">
                                    <div class="form-outline">
                                        <label class="form-label" for="form3Example1" > Prooduct Title</label>
                                        <input type="text" id="form3Example1" class="form-control" {...register("title", { required: true })} />

                                    </div>
                                </div>
                                <div class="col">
                                    <div class="form-outline">
                                        <label class="form-label" for="form3Example2">Product Details</label>
                                        <input type="text" id="form3Example2" class="form-control"   {...register("details", { required: true })} />
                                    </div>
                                </div>
                            </div>
                            <div class="form-outline mb-4">
                                <label class="form-label" for="form3Example3">Price</label>
                                <input type="number" id="form3Example3" class="form-control"  {...register("price", { required: true })} />

                            </div>
                            <div class="form-outline mb-4">
                                <label class="form-label" for="form3Example4">Image Url</label>
                                <input type="text" id="form3Example4" class="form-control" {...register("img", { required: true })} />

                            </div>
                            <button type="submit" class="btn btn-outline-danger  btn-block mb-4 w-25">Add</button>
                        </form >
                    </Row>
                </Container>
            </Container>
            }

        </div>
    );
};

export default Addproduct;