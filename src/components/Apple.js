import React, { useEffect } from 'react'
import ApplePic from '../images/apple.png'
import useWebAnimations, { hinge } from "@wellyshen/use-web-animations";

export const Apple = ({ top, left}) => {

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
            { ...hinge ,
            autoPlay: false,
        });

    const handleClick = () => {
        getAnimation().play();
    };

    return (
        <div>
            <img src={ApplePic} alt="Apple" onClick={handleClick}
                style={{height:"50px", top:top, left:left}} 
                ref={ref} 
            />
        </div>
    )
}
