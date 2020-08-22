import React from 'react';
import { useParams } from 'react-router-dom';
import fakeData from '../../fakeData';
import Product from '../Product/Product';

const ProductDetail = () => {

    const {productKey} = useParams()

    const product = fakeData.find(data=> productKey==data.key)
    console.log(product);
    
    return (
        <div>
            <h1>{product.key} Product Details Coming Soon!!</h1>
        </div>
    );
};

export default ProductDetail;