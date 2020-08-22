import React from 'react';
import './Product.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom';

const Product = (props) => {
    const { name, img, seller, price, stock, key } = props.product;
    const cartIcon = <FontAwesomeIcon icon={faShoppingCart} />
    return (
        <div className='product' >
            <div>
                <img src={img} alt="" />
            </div>
            <div>
                <h4 className='product-name' ><Link className='product-name-link' to={'/product/'+key} >{name}</Link></h4>
                <p><small>by: {seller}</small></p>
                <p>${price}</p>
                <p><small>Only {stock} left in stock - order soon</small></p>
                <button
                    onClick={()=> props.handleAddProduct(props.product)}
                        >{cartIcon} add to cart
                </button>
            </div>
        </div>
    );
};

export default Product;