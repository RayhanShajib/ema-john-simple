import React, { useState, useEffect } from 'react';
import './Review.css';
import { getDatabaseCart, removeFromDatabaseCart,  } from '../../utilities/databaseManager';
import fakeData from '../../fakeData';
import ReviewItem from '../ReviewItem/ReviewItem';
import Cart from '../Cart/Cart';
import happyImage from '../../images/giphy.gif'
import { Link } from 'react-router-dom';
import { useAuth } from '../../Login/auth';

const Review = () => {
    const [cart, setCart] = useState([]);
    const [orderPlaced] = useState(false);
    let thankYou;

    const auth = useAuth();

    if(orderPlaced){
        thankYou = <img className='oreder-image' src={happyImage} alt="" />;
    }
    const removeItem = (productKey) => {
        const newCart = cart.filter(pd => pd.key !== productKey);
        setCart(newCart);
        removeFromDatabaseCart(productKey);
    }

    useEffect(() => {
        const cartData = getDatabaseCart();
        const productKeys = Object.keys(cartData);
        const cartProducts = productKeys.map(key => {
            const product = fakeData.find(pd => pd.key === key);
            product.quantity = cartData[key];
            return product;
        })
        console.log(cartProducts);
        setCart(cartProducts);
    }, []);
    return (
        <div className='twin-container' >
            <div className="product-container">
                {orderPlaced === false && <h1>Cart Items: {cart.length}</h1>}
                <div className="cart-body">
                    {cart.map(product => <ReviewItem removeItem={removeItem} key={product.key} product={product} ></ReviewItem>)}
                    {thankYou}
                    {
                        !cart.length && <h1>Your cart is empty. <a href='/shop'>Keep Shopping</a></h1>
                    }
                </div>
            </div>
            <div className="cart-container">
                <Cart cart={cart} >
               <Link to="shipment">
                     {auth.user ?
                         <button>Procced Checkout</button>
                         :
                         <button>Login to Procced</button>
                     }
               </Link>
                </Cart>
            </div>
        </div>
    );
};

export default Review;