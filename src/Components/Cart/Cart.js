import React, {} from 'react';
import { useAuth } from '../../Login/auth';


const Cart = (props) => {
    const cart = props.cart;
    const auth = useAuth();
    console.log(auth.user);
    // const total = cart.reduce((total, prdct) => total + prdct.price, 0);
    let total = 0;
    for(let i = 0; i< cart.length; i++){
        const product = cart[i];
        total = total + product.price*product.quantity;
    };
    let shipping = 12.99;
    if(total === 0){
        shipping = 0;
    }
    else if(total > 35){
        shipping = 0;
    }
    else if(total > 15){
        shipping = 4.99;
    }
    const tax = (total / 10).toFixed(2);
    // const amount = (taken) => Number((taken).toFixed(2));
    return (
        <div>
            <h4>Order Summery</h4>
            <h3>Items Ordered: {cart.length}</h3>
            <h3>Product Price: {total.toFixed(2)}</h3>
            <h3>Shipping: {shipping}</h3>
            <h3>Tax & VAT: {tax}</h3>
            <p>Total Price: {(total + shipping + Number(tax)).toFixed(2)}</p> <br/>
            {
                props.children
            }
            <p>{}</p>
        </div>
    );
};

export default Cart;