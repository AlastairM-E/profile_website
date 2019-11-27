/*IMPORTS*/
import React, { useState, } from 'react';

import { 
    Deck, 
    Player, 
    Opponents,
    Pile, 
} from './cardGameComponents';

import './assets/Board.scss';
import { 
    standardDeck,
    rotateTurn,
    rankHand,
    drawFromDeck,
    run,
} from '../casino';
import { resetWarningCache } from 'prop-types';



/*COMPONENT*/
export default function Board() {

    /* STEP 1 */

    // make universal state for the deck, using useState.
    // make universal player and opponent states, which rely on the state above.
    // make universal pile area, shared by players.`
    
    /* STEP 2 */
    // create the turns that willl be rotated by
    //create a rotation of turns, in which each player draws a card per turn and it ranks their hand, and return pboth digits

    /* HOOKS */
    const [deck, setDeck] = useState(standardDeck);
    const [player, setPlayer] = useState({ 
        hand : [],
        handValue : 0,
        hasLost : false,
    });
    const [opponent, setOpponent] = useState({ 
        hand : [],
        handValue : 0,
        hasLost : false,
    });
    const [pile, setPile] = useState([]);
    const [turn, setTurn, ] = useState([
        [player, setPlayer], 
        [opponent, setOpponent],
    ]);
    const [currentPlayer, setCurrentPlayer] = turn[0];
  
    // keep track of what phraseIndex should stop it is.
    const [phaseIndex, setPhaseIndex] = useState(-2);

    function runPhase(phaseArray){
        //if the phasearray is finished, e.g. one the player has lost, disable the button
        if (phaseArray === 'finished') {
            return null;
        };

        console.log(phaseIndex);

        //Checks what phase is needed to break next.
        //States what index should be skipped on the next follow through of the phases.
        //the index check should be -1 at the start, or the phaseIndex, if th ephase index has changed value.
        let breakCheck = false;
        let indexCheck = phaseIndex === -2 ? -2 : phaseIndex;
        
        //For loop going through all the phases;
        // spilt the type (whether their needs to be a pause or not) 
        //and procedure (the actually function that execute the logic in the phases) 
        //of the current phases
        for (let i = 0; i < phaseArray.length; i++) {
            
            const { type, procedure, } = phaseArray[i];
            
            //check if the indexCheck is greater than current phase 
            //(therefore should be skipped as this phase has already been done in the past)
            if (indexCheck <= i) {
                //set the index check to be i, so that if the next phase were to cancel the phases, 
                //it will store that this phase should block it.
                indexCheck = i;
                //if break check is true , break the loop and then recharge the entire thing.
                if (breakCheck) {
                    break;
                } else {
                    //swtich statement based on the the type of phase.
                    //if player action run the procedure and then make breakCheck false, so the next phase interation will not run.
                    //else jsut auto run the procedure.
                    switch (type) {
                        case 'playerAction':
                            procedure();
                            breakCheck = true;
                        break;
                        
                        case 'auto':
                            procedure();
                        break;
                    
                        default:
                            console('useRunPhase - error', breakCheck, indexCheck);
                        break;
                    };
                    
                }
            // skip the pahse if it has already in done in the previous turn, this is only to clear up all pahses that weer preivous blocked off.
            } else {
                continue;
            };

        };
        //set the pahse array to be the reset (if it the last index nnumebr of the phaseArray, 
        //or set as indexCheck to skip all turns that have already been done.)
        setPhaseIndex(indexCheck === phaseArray.length -1 ? -2 : indexCheck);
    };

    function Turn(drawPhaseType, numberOfCardsToDraw, toRotate) {
        runPhase(opponent.hasLost === false && player.hasLost === false ? [
            { 
                type : drawPhaseType, 
                procedure : () => 
                    drawFromDeck(
                        deck, 
                        setDeck, 
                        currentPlayer, 
                        numberOfCardsToDraw, 
                        setCurrentPlayer,
                    ), 
            },
            { 
                type : 'auto',
                 procedure :  () => 
                    setCurrentPlayer(
                        rankHand(
                            currentPlayer, 
                            'hand', 
                            'handValue', 
                            'hasLost'
                        )
                    ), 
            },
            { 
                type : 'auto', 
                procedure : () => toRotate ?
                    setTurn(
                        rotateTurn(turn)
                    ) : null,
            },
        ] : 'finished');
    };

    function SetUp() {

    };
    function Reset() {

    };
   
    /* RENDER */
    return (
        <div className="board grid">
            <h1 className="board--title">Blackjack game</h1>
            <button onClick={() => Turn('playerAction', 1, true)}>Start turn</button>
            <button onClick={() => Reset()}>Reset</button>
            <button onClick={() => Turn('playerAction', 1, false)}>Stick</button> 
                or 
            <button onClick={() => Turn('playerAction', 0, false)}>Remove</button>
            <Opponents opponent={opponent} />
            <Pile pile={pile} />
            <Deck drawFromDeck={() => drawFromDeck(deck, setDeck, player, 1, setPlayer,)}/>
            <Player player={player} opponentHasLost={opponent.hasLost} />
        </div>
    ); 

};