import React from 'react';
import './ReviewItem.css';

const ReviewItem = (props) => {
    const { name, quantity, key, price,} = props.product;
    return (
        <div className='review-item' >
            <div className='review-container' >
                <h4 className='product-name' >{name}</h4>
                <p>Quantity: {quantity}</p>
                <p>${price*quantity}</p>
                <button onClick={() => props.removeItem(key)} >Remove</button>
            </div>
        </div>
    );
};

export default ReviewItem;