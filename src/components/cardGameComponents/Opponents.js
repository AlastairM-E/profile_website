/*IMPORTS*/
import React from 'react'; 

import { useRenderHand, } from '../../casino';

/*COMPONENT*/
export default function Opponents({ opponent, isOpponentTurn, urls, },) {

    /* RENDER */
    return (
        <div className="opponents flexbox">
            Opponent Hand
            {isOpponentTurn ? useRenderHand(opponent.hand, 'front', urls,) : useRenderHand(opponent.hand, 'back', urls,)}
        </div>
    ); 

};