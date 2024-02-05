import React from "react";
import ProductCard from "./ProductCard";
import "./Products.css";

function Products(){
    const productData = [
        {
            id: 1,
            title: "Apple Watch",
            price: "Rs. 79,000",
            image: "https://m.media-amazon.com/images/I/51vHAEYKeWL._AC_UF452,452_FMjpg_.jpg"
        },
        {
            id: 2,
            title: "Earphones",
            price: "Rs. 900",
            image: "https://m.media-amazon.com/images/I/31GUbeFG3FL._AC_UF452,452_FMjpg_.jpg"
        },
        {
            id: 3,
            title: "Xiaomi TV",
            price: "Rs. 25,000",
            image: "https://m.media-amazon.com/images/I/51fmHk3km+L._AC_UF334,334_FMjpg_.jpg"
        },
        {
            id: 4,
            title: "Apple iPhone 13",
            price: "Rs. 65,000",
            image: "https://m.media-amazon.com/images/I/315vs3rLEZL._AC_UF334,334_FMjpg_.jpg"
        },
        {
            id: 5,
            title: "Redmi A1",
            price: "Rs. 7000",
            image: "https://m.media-amazon.com/images/I/41JM3Ra+tiL._AC_UF334,334_FMjpg_.jpg"
        },
        {
            id: 6,
            title: "Fire TV",
            price: "Rs. 3,000",
            image: "https://m.media-amazon.com/images/I/51lX5oZbtQL._AC_UF334,334_FMjpg_.jpg"
        },
        {
            id: 7,
            title: "Washing Machine",
            price: "Rs. 12,000",
            image: "https://m.media-amazon.com/images/I/41OSm89f6hL._AC_UF334,334_FMjpg_.jpg" 
        }
    ];

    return(
        <div className="products">
            {productData.map((value) => (
                <ProductCard image = {value.image} title = {value.title} price = {value.price} />
            ))}
        </div>
    )
}

export default Products;