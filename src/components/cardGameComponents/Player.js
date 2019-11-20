/*IMPORTS*/
import React, { Fragment, } from 'react'; 
import { renderHand, } from '../../casino';

/*COMPONENT*/
export default function Player({ player : { hand, handValue, hasLost, }, }) {
    return (
        <Fragment>
            <div className="player flexbox">
                {renderHand(hand, 'front',)}
            </div>
            <div className='score'>
                <p>{handValue}</p>
                <p>{hasLost === false ? null : 'You have lost'}</p>
            </div>
        </Fragment>
    ); 

};