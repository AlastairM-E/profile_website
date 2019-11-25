/*IMPORTS*/
import React, { Fragment, } from 'react'; 
import { renderHand, } from '../../casino';

/*COMPONENT*/
export default function Player({ player : { hand, handValue, hasLost,  }, opponentHasLost, }, ) {
    return (
        <Fragment>
            <div className="player flexbox">
                Player Hand
                {renderHand(hand, 'front',)}
            </div>
            <div className='score'>
                <p>your current total card value : {handValue}</p>
                <p>{hasLost === false ? null : 'You have lost'}</p>
                <p>{opponentHasLost === false ? null : 'You have won'}</p>
            </div>
        </Fragment>
    ); 

};