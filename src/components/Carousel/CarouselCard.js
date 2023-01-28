import React from "react";
import "./CarouselCard.css";

function CarouselCard({image}){
    return <img className="carousel_images" src={image} />
}

export default CarouselCard;