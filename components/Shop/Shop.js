import React, { useState } from 'react';
import fakeData from '../../fakeData/products.json';
import Card from '../Card/Card';
import Product from '../product/Product';
import './Shop.css'
const Shop = () => {
    // console.log(fakeData)
    const fast10=fakeData.slice(20,30)
    const [products, setProduct]=useState(fast10);
    const [card, setCard]=useState([])

    const handelAddProduct=(props)=>{
        console.log("siddik", props)
        const newCard=[...card,props]
        setCard(newCard)
    }
    return (
        <div className='shop-container'>
            
            <div className="product-container">   
                {products.map(pd=> <Product 
                    handelAddProduct={handelAddProduct}
                     product={pd}>
                   
                </Product>)}
                </div>
                        
            <div className="shoppin-car">
                <Card cart={card}></Card>
            </div>
           
            
        </div>
    );
};

export default Shop;