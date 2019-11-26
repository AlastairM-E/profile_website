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
  
    // keep track of what phrase it is.
    const [breakIndex, setBreakIndex] = useState(false);
    const [phaseIndex, setPhaseIndex] = useState(0);

    function runPhase(phaseArray){
        console.log('phaseIndex -', phaseIndex);

        if (phaseArray === 'finished') {
            console.log('hello');
            return null;
        };

        let breakCheck = false;
        let indexCheck = phaseIndex === 0 ? -1 : phaseIndex;
        
            
        //For loop going through all the phases;
        // then it will check if the current phase is necessary, will then skip the rest till it is.
        //the will folow procedure if necessary.
        for (let i = 0; i < phaseArray.length; i++) {

            console.log('useRunPhase', 'start', breakCheck, indexCheck);
            
            const { type, procedure, } = phaseArray[i];
            
            if (indexCheck < i) {
                indexCheck = i;
                if (breakCheck) {
                    break;
                } else {
                    switch (type) {
                        case 'playerAction':
                            console.log('p & o start', player, opponent);
                            procedure();
                            console.log('p & o end', player, opponent);
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
                
            } else {
                continue;
            };

            console.log('useRunPhase', 'end', breakCheck, indexCheck);
        };

        console.log('useRunPhase', 'end', breakCheck, indexCheck);

        setPhaseIndex(indexCheck === phaseArray.length -1 ? 0 : indexCheck);
    };

    /* RENDER */
    return (
        <div className="board grid">
            <h1 className="board--title">Blackjack game</h1>
            <button onClick={() => {
                    runPhase(opponent.hasLost === false && player.hasLost === false ? [
                        { type : 'playerAction', procedure : () => drawFromDeck(deck, setDeck, currentPlayer, 1, setCurrentPlayer,), },
                        { type : 'auto', procedure :  () => setCurrentPlayer(rankHand(currentPlayer, 'hand', 'handValue', 'hasLost')), },
                        { type : 'auto', procedure : () => setTurn(rotateTurn(turn)), },
                    ] : 'finished');
                }
            }> run a turn</button>
            <Opponents opponent={opponent} />
            <Pile pile={pile} />
            <Deck drawFromDeck={() => drawFromDeck(deck, setDeck, player, 1, setPlayer,)}/>
            <Player player={player} opponentHasLost={opponent.hasLost} />
        </div>
    ); 

};