import React, { useState, useEffect } from 'react';
import fakeData from '../../fakeData';
import './Shop.css';
import Product from '../Product/Product';
import Cart from '../Cart/Cart';
import { addToDatabaseCart, getDatabaseCart } from '../../utilities/databaseManager';
import { Link } from 'react-router-dom';

const Shop = () => {
    const first10 = fakeData.slice(0, 10);
    const [products, ] = useState(first10);
    const [cart, setCart] = useState([]);
    useEffect(() => {
        const savedCart = getDatabaseCart();
        const productKeys = Object.keys(savedCart);
        const latestCart = productKeys.map(existingKey => {
            const product = fakeData.find(pd => pd.key === existingKey);
            product.quantity = savedCart[existingKey];
            return product;
        })
        setCart(latestCart);
    },[])
    const handleAddProduct = (product) => { 
        const toBeAddedKey = product.key;       
        const sameItem = cart.find( pd => pd.key === toBeAddedKey );
        let count = 1;
        let newCart;
        if(sameItem){
            count = sameItem.quantity + 1;
            sameItem.quantity = count;
            const others = cart.filter(pd => pd.key !== toBeAddedKey);
            newCart = [...others, sameItem]
        }
        else{
            product.quantity = 1;
            newCart = [...cart, product]
        }
        setCart(newCart);
        addToDatabaseCart(product.key, count);
    }
    return (
        <div className='twin-container' >
            <div className="product-container">
                {products.map(product => <Product key={product.key} handleAddProduct={handleAddProduct} product={product} ></Product>)}
            </div>
            <div className="cart-container">
                <Cart cart={cart} >
                    <Link to='/review' ><button>Review Order</button></Link>
                </Cart>
            </div>
        </div>
    );
};

export default Shop;

