import React from 'react'
import tree from '../images/tree1.png';
import { Apple } from './Apple';
import { Basket } from './Basket';
import { Bird } from './Bird';

export const Tree = () => {
    return (
        <div>
            <img src={tree} alt="tree" className="tree" />
            <Bird top="150px" left="350px" />
            <Bird top="350px" left="600px" />

            <Basket bottom="0px" left="100px"/>
            <Basket bottom="0px" left="400px"/>

            <Apple top="250px" left="200px" />
            <Apple top="250px" left="300px" />
            <Apple top="250px" left="450px" />

            <Apple top="350px" left="100px" />
            <Apple top="350px" left="250px" />
            <Apple top="350px" left="350px" />
            <Apple top="350px" left="500px" />

        </div>
    )
}
