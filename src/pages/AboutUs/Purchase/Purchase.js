import React, { useEffect, useState } from 'react';
import { Container, Row } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import { useHistory, useParams } from 'react-router-dom/cjs/react-router-dom.min';
import useAuth from '../../../hooks/useAuth';
import ProductInfo from './ProductInfo';




const Purchase = () => {
    const { id } = useParams();
    const [dataset, setData] = useState([]);
    const { register, handleSubmit, formState: { errors } } = useForm();
    const { user } = useAuth();
    const history = useHistory();
    console.log(id);

    useEffect(() => {
        fetch(`http://localhost:5000/products/${id}`)
            .then(res => res.json())
            .then(data => setData(data));
    }, [id]);

    console.log(dataset);
    const onSubmit = (data) => {
        // console.log(data);
        const newBooking = {
            userName: user.displayName,
            email: user.email,
            userImg: user.photoURL,
            phone: data.phone,
            address: data.address,
            productInfo: {
                productId: dataset._id,
                productImg: dataset.img,
                productTitle: dataset.title,
                productPrice: dataset.price,
                productDetails: dataset.details
            }
        }


        fetch('http://localhost:5000/purchase', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(newBooking)
        }).then(res => {
            if (res.status === 200) {
                alert("Booked Successfully");
                history.push('/home');


            }
        })
    };


    return (
        <div>
            {<Container>
                <div className="text-center my-5 py-5">

                    <h1 className="fw-bolder">Confirm your Order </h1>
                </div>

                <Container className="mb-5">
                    <Row xs={12} md={12} lg={12} className="g-4">{
                        <Container><ProductInfo key={dataset.key} productData={dataset}></ProductInfo></Container>


                    }
                        <hr></hr>
                        <h1 className='py-4'>Purchase Information</h1>
                        <hr></hr>
                        <form className='pb-5' onSubmit={handleSubmit(onSubmit)}>
                            <div class="row mb-4">
                                <div class="col">
                                    <div class="form-outline">
                                        <label class="form-label" for="form3Example1" >Name</label>
                                        <input type="text" id="form3Example1" class="form-control" value={user.displayName} />

                                    </div>
                                </div>
                                <div class="col">
                                    <div class="form-outline">
                                        <label class="form-label" for="form3Example2">Email</label>
                                        <input type="text" id="form3Example2" class="form-control" value={user.email} disabled />
                                    </div>
                                </div>
                            </div>
                            <div class="form-outline mb-4">
                                <label class="form-label" for="form3Example3">Phone no</label>
                                <input type="number" id="form3Example3" class="form-control"  {...register("phone", { required: true })} />

                            </div>
                            <div class="form-outline mb-4">
                                <label class="form-label" for="form3Example4">Address</label>
                                <input type="text" id="form3Example4" class="form-control" {...register("address", { required: true })} />

                            </div>
                            <button type="submit" class="btn btn-outline-danger  btn-block mb-4 w-25">Order</button>
                        </form >
                    </Row>
                </Container>
            </Container>
            }

        </div>
    );
};


export default Purchase;