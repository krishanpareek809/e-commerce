import React, { useState } from "react";
import "./Carousel.css";
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

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

    const [index, setIndex] = useState(0);
    const [currentImage, setCurrentImage] = useState(carouselData[0].image);

    function showPreviousImage(){
        if(index == 0) return;

        setCurrentImage(carouselData[index-1].image);
        setIndex(index-1);
    }

    function showNextImage(){
        if(index == 2) return;
        
        setCurrentImage(carouselData[index+1].image);
        setIndex(index+1);
    }

    return(
        <div className="carousel">
            <div className="carousel_arrow" onClick={showPreviousImage}>
                <ArrowBackIosIcon />
            </div>

            <img className="carousel_images" src={currentImage}/>

            <div className="carousel_arrow" onClick={showNextImage}>
                <ArrowForwardIosIcon />
            </div>
        </div>
    );
}

export default Carousel;