/*IMPORTS*/
import React, { Fragment, } from 'react'; 
import { renderHand, } from '../../casino';

/*COMPONENT*/
export default function Player({ player : { hand, handValue, hasLost,  }, opponent, isOpponentTurn, }, ) {
    return (
        <Fragment>
            <div className="player flexbox">
                Player Hand
                {renderHand(hand, 'front',)}
            </div>
            <div className='score'>
                <p>your current total card value : {handValue}</p>
                <p>
                    {hasLost === true || (opponent.handValue > handValue && !opponent.hasLost && isOpponentTurn) ? 'You have lost' : null}
                </p>
                <p> 
                    {opponent.hasLost === true || (opponent.handValue < handValue && !hasLost && isOpponentTurn)  ? 'You have won' : null}
                </p>
            </div>
        </Fragment>
    ); 

};