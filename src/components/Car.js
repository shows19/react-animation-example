import React, { useEffect } from 'react'
import CarPic from '../images/car1.gif'
import useWebAnimations, { backOutRight } from "@wellyshen/use-web-animations";

export const Car = ({bottom}) => {

    const displayAgain = () =>{
        getAnimation().cancel();
    };

    useEffect(() => {
        const interval = setInterval(()=>{
            displayAgain();
        },3000);
   
        return () => clearInterval(interval);
      });

    // Add a pre-defined effect to the target
    const { ref, getAnimation } = useWebAnimations(
        { ...backOutRight ,
        autoPlay: false,
    });

    const handleClick = () => {
        getAnimation().play();
    };

    return (
        <div>
            <img src={CarPic} alt="Car"  ref={ref} onClick={handleClick}
                style={{width: "20vw", bottom:bottom}}
            />
        </div>
    )
}
