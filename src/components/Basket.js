import React from 'react'
import BasketPic from '../images/appleBasket1.png'

export const Basket = ( { bottom, left } ) => {
    return (
        <div>
            <img src={BasketPic} alt="Basket" 
                style={{height:"150px", bottom:bottom, left:left}} 
            />
        </div>
    )
}
