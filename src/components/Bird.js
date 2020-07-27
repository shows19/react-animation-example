import React from 'react'
import BirdSitting from '../images/white_bird.gif'
import useWebAnimations, { swing } from "@wellyshen/use-web-animations";

export const Bird = ({ top, left}) => {
    // Add a pre-defined effect to the target
    const { ref, getAnimation } = useWebAnimations(
        { ...swing ,
        autoPlay: false,
    });

    const handleClick = () => {
        getAnimation().play();
    };

    return (
        <div>
            <img src={BirdSitting} alt="Bird" onClick={handleClick}
                style={{height:"20vh", top:top, left:left}} 
                ref={ref} 
            />            
        </div>
    )
}
