import React from 'react';

function Product({ fact }) {
    return (
        <div>
            <div> Product: {fact.product} </div>
            <div> Manufacturer: {fact.manufacturer} </div>
            <div> Rating: {fact.rating} </div>
        </div>
    )
}

export default Product;