import React from 'react';

const AllsingleOrder = (props) => {

    const { productId, productImg, productTitle, productPrice, productDetails } = props.myorder.productInfo;
    const { email, _id } = props.myorder;




    const handleBookingDelete = () => {
        const sure = window.confirm("Confirm Delete.")
        if (sure) {
            fetch(`http://localhost:5000/purchase/${_id}`, {
                method: 'DELETE'
            })
                .then(
                    // history.push('/mybooking')

                )
        }
    };
    return (
        <tr>
            <th scope="row">{email}</th>
            <td>{productTitle}</td>
            <td className='text-success fw-bold'>${productPrice}</td>
            <td>  <button onClick={handleBookingDelete} className="btn btn-danger"> Cancel order</button></td>
        </tr>
    );
};

export default AllsingleOrder;