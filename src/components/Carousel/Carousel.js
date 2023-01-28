import React from "react";
import CarouselCard from "./CarouselCard";

function Carousel(){
    const carouselData = [
        {
            id: 1,
            image: "https://m.media-amazon.com/images/I/81EZPF-FSdL._SX3000_.jpg",
            name: "Plants",
        },
        {
            id: 1,
            image: "https://m.media-amazon.com/images/I/81OCE7mUqhL._SX3000_.jpg",
            name: "Headphones",
        },
        {
            id: 1,
            image: "https://m.media-amazon.com/images/I/71JylaoMg+L._SX3000_.jpg",
            name: "Mobile",
        },
    ];

    return(
        <div className="carousel">
            {carouselData.map((value) => (
                <CarouselCard image = {value.image}/>
            ))}
        </div>
    );
}

export default Carousel;