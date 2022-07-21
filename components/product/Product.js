import React from 'react';
import './product.css'
const Product = (props) => {
    //  console.log(props)
     const{name, img, seller,price,stock}=props.product
    return (
        <div className='product'>
            <div >
                <img src={img} alt="" />
            </div>
            <div className='products'>
                 <h4 className='product-name'>{name}</h4>
                 <br />
                 <p>By{seller}</p>
                 <p>${price}</p>
                 <p>Only {stock} left in stock</p>
                 <button  className='main-button' onClick={function(){return props.handelAddProduct(props.product)}}><i className="fa-solid fa-cart-shopping"></i> Add to card</button>
                 
            </div>
        </div>
    );
};

export default Product;