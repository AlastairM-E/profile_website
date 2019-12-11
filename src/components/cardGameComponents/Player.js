/*IMPORTS*/
import React, { Fragment, } from 'react'; 
import { useRenderHand, } from '../../casino';

/*COMPONENT*/
export default function Player({ player : { hand,   }, urls, },) {
    return (
        <Fragment>
            <div className="player flexbox">
                Your Hand
                {useRenderHand(hand, 'front', urls,)}
            </div>
        </Fragment>
    ); 

};