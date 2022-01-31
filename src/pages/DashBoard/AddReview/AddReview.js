import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { Button, Container } from 'react-bootstrap';
import { useHistory } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';
import { Link, useParams } from 'react-router-dom/cjs/react-router-dom.min';

const AddReview = () => {

    const [dataset, setData] = useState([]);
    const { register, handleSubmit, formState: { errors } } = useForm();
    const { user } = useAuth();
    const history = useHistory();
    const [err, seterrors] = useState("");

    const onSubmit = (data) => {
        console.log(data)

        if ((Number(data.rating) > 0) && (Number(data.rating) <= 5)) {
            const review = {
                userName: user.displayName || " ",
                email: user.email,
                rating: data.rating,
                comment: data.comment

            };


            fetch('http://localhost:5000/review', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(review)
            }).then(res => {
                if (res.status === 200) {
                    alert("reviewed Successfully");
                    history.push("/home");
                }
            })
        } else {
            seterrors("rate 1 to 5");
        }

    };
    return (
        <Container className="mb-5">
            <Link to="/db" className="m-5"> <Button className='btn btn-outline-light  my-2' > <i class="fas fa-arrow-left"></i> </Button></Link>
            <hr></hr>
            <h1 className='py-4 text-center'>Review</h1>
            <hr></hr>
            <form className='pb-5' onSubmit={handleSubmit(onSubmit)}>

                <div class="form-outline mb-4">
                    <label class="form-label" htmlfor="form3Example3">Rating</label>
                    <input type="number" id="form3Example3" class="form-control" maxLength="2"  {...register("rating", { required: true })} />
                    <p className='text-danger'>{err}</p>
                </div>
                <div class="form-outline mb-4">
                    <label class="form-label" htmlfor="form3Example4">Comment</label>
                    <textarea type="text" id="form3Example4" class="form-control" {...register("comment", { required: true })} />

                </div>
                <button type="submit" class="btn btn-outline-success  btn-block mb-4 w-25">Submit</button>
            </form >

        </Container>
    );
};

export default AddReview; 