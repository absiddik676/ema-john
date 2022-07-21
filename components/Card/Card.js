import React from 'react';
import Product from './../product/Product';

const Card = (props) => {
    const cart=props.cart
    const totalPrice=cart.reduce((total,prd)=>total+prd.price,0)
    let shipping=0;
    if(totalPrice>150){
        shipping=0
    }
    else if (totalPrice > 900) {
        shipping = 4.99;
    }
    else if(totalPrice > 0) {
        shipping = 12.99
    }
    const tax=totalPrice/10;
    const revewBtn={
    backgroundColor: 'goldenrod',
    width: '120px',
    height:' 30px',
    border: '1px solid rgb(95, 95, 95)',
    borderRadius: '5px',
    cursor:' pointer',
    }
    return (
        <div>
            <h4>Order Summary</h4>
            <p>Itames Odered:{cart.length}</p>
            <p>Product Prie: ${totalPrice}</p>
            <p>Shipping Cost: ${shipping}</p>
            <p>Tax: ${tax}</p>
            <p>Total Price: ${totalPrice+shipping+tax}</p>
            <button style={revewBtn}>Revew Oder</button>
        </div>
    );
};

export default Card;