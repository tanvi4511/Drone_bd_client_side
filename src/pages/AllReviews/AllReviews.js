import React, { useEffect, useState } from 'react';
import { Container } from 'react-bootstrap';
import SingleReview from './SingleReview';

const AllReviews = () => {

    const [reviewData, setreviewData] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/review')
            .then(res => res.json())
            .then(data => {
                setreviewData(data);
            })
    }, [])







    return (
        <Container>
            <h1 className='text-center py-5'>Reviews</h1>
            <table class="table table-striped ">
                <thead>
                    <tr>
                        <th scope="col">EMAIL</th>
                        <th scope="col">RATING</th>
                        <th scope="col">COMMENT</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        reviewData.map(reviewData => <SingleReview key={reviewData.key} reviewData={reviewData}></SingleReview>)
                    }


                </tbody>
            </table>

        </Container>
    );
};

export default AllReviews;