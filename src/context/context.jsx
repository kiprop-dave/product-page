import React, { createContext, useState } from 'react';
import product from '../utils/product';

const Context = createContext();

function ContextProvider({ children }) {
    const [amountBought, setAmountBought] = useState(0); // state for the amount of shoes to buy
    const [imageIndex, setImageIndex] = useState(0); // state for the index of image
    const [cartItems, setCartItems] = useState({}); // state for cart items
    const { price, description, discount, discountPrice, images, thumbnails, name } = product;

    function swipeRight() { // function to view next image
        setImageIndex(prev => {
            if (prev >= 0 && prev < 3) {
                return prev + 1;
            } else {
                return 0;
            }
        })
    }

    function swipeLeft() { // function to view previous image
        setImageIndex(prev => {
            if (prev <= 3 && prev > 0) {
                return prev - 1;
            } else {
                return 3;
            }
        })
    }

    function buyMore() { // function for buying adding more pairs to the cart
        setAmountBought(prev => prev + 1)
    }

    function buyLess() { // function to remove a pair from cart
        setAmountBought(prev => prev > 0 ? prev - 1 : 0);
    }

    function addToCart(item) {
        setCartItems(item);
    }

    function removeFromCart() {
        setCartItems({})
    }

    const values = {
        images, imageIndex, thumbnails, price, description, discountPrice, discount,
        swipeLeft, swipeRight, buyMore, buyLess, name, amountBought, cartItems, addToCart,
        removeFromCart
    };
    return (
        <Context.Provider value={values}>
            {children}
        </Context.Provider>
    )
}

export { ContextProvider, Context };