import React from 'react';
import { Image } from 'react-bootstrap';

const MangeSingleProduct = (props) => {
    const { _id, title, details, price, img } = props.product;

    console.log(props.product);



    const handleBookingDelete = () => {
        const sure = window.confirm("Confirm Delete.")
        if (sure) {
            fetch(`http://localhost:5000/products/${_id}`, {
                method: 'DELETE'
            })
                .then(
                    // history.push('/mybooking')

                )
        }
    };

    return (
        <tr>
            <th scope="row">{_id}</th>
            <td >{title}</td>
            <td ><Image src={img} style={{
                height: 70,
                width: 100
            }}></Image></td>
            <td >{details}</td>
            <td className='text-success'>${price}</td>
            <td ><button onClick={handleBookingDelete} className="btn btn-danger">Delete Product</button></td>

        </tr>
    );
};
export default MangeSingleProduct;