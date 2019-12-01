/*IMPORTS*/
import React, { Fragment, } from 'react'; 
import { useRenderHand, } from '../../casino';

/*COMPONENT*/
export default function Player({ player : { hand,   }, }, ) {
    return (
        <Fragment>
            <div className="player flexbox">
                Player Hand
                {useRenderHand(hand, 'front',)}
            </div>
        </Fragment>
    ); 

};