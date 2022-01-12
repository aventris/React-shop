import React, { useState, useContext } from 'react';
import '../styles/ProductItem.scss';
import AppContext from '../context/AppContext';
import cartIcon from '@icons/bt_add_to_cart.svg';

const ProductItem = ({ product }) => {

  const { state, addToCart } = useContext(AppContext);

  const handleClick = (item) => {
    console.log('Click', item)
    addToCart(item);
  }

  return (
    <div className="ProductItem">
      <img src={product.images[0]} alt="" />
      <div className="product-info">
        <div>
          <p>${product.price}</p>
          <p>{product.title}</p>
        </div>
        <figure onClick={() => handleClick(product)}>
          <img src={cartIcon} alt="" />
        </figure>
      </div>
    </div>
  );
}

export default ProductItem;
