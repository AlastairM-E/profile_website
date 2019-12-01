/*IMPORTS*/
import React from 'react'; 

import { renderHand, } from '../../casino';

/*COMPONENT*/
export default function Opponents({ opponent, isOpponentTurn }) {

    /* RENDER */
    return (
        <div className="opponents flexbox">
            Opponent Hand
            {isOpponentTurn ? renderHand(opponent.hand, 'front',) : renderHand(opponent.hand, 'back',)}
        </div>
    ); 

};