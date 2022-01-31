import { Rating } from '@mui/material';
import React from 'react';

const SingleReview = (props) => {
    const { email, rating, comment } = props.reviewData
    return (
        <tr>

            <td>{email}</td>
            <td><Rating name="read-only" value={rating} readOnly /></td>
            <td>{comment}</td>
        </tr>
    );
};

export default SingleReview;