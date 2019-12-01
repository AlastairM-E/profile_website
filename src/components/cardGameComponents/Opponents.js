/*IMPORTS*/
import React from 'react'; 

import { useRenderHand, } from '../../casino';

/*COMPONENT*/
export default function Opponents({ opponent, isOpponentTurn }) {

    /* RENDER */
    return (
        <div className="opponents flexbox">
            Opponent Hand
            {isOpponentTurn ? useRenderHand(opponent.hand, 'front',) : useRenderHand(opponent.hand, 'back',)}
        </div>
    ); 

};