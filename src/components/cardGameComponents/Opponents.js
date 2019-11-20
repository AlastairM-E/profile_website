/*IMPORTS*/
import React from 'react'; 

import { renderHand, } from '../../casino';

/*COMPONENT*/
export default function Opponents({ opponent, }) {

    /* RENDER */
    return (
        <div className="opponents flexbox">
            {renderHand(opponent.hand, 'back',)}
        </div>
    ); 

};