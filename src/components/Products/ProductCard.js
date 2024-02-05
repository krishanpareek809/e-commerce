import React from "react";
import "./ProductCard.css";

function ProductCard({image, title, price}){
    return(
        <div className="single_card">
            <img src={image} />
            <h4>{title}</h4>
            <p>{price}</p>
        </div>
    )
}

export default ProductCard;
