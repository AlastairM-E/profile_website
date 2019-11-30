/*IMPORTS*/
import React, { useState, useEffect, } from 'react';

import { 
    Deck, 
    Player, 
    Opponents,
    Pile, 
} from './cardGameComponents';

import './assets/Board.scss';
import { 
    standardDeck,
    rankHand,
    drawFromDeck,
} from '../casino';


/*COMPONENT*/
export default function Board() {

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
  
    // keep track of what phraseIndex should stop it is.
    const [phaseIndex, setPhaseIndex] = useState(-1);
    const [breakCheck, setBreakCheck] = useState(false);

    function runPhase(phaseArray){
        //if the phasearray is finished, e.g. one the player has lost, disable the button
        if (phaseArray === 'finished') {
            return null;
        };

        console.log(phaseIndex);

        //Checks what phase is needed to break next.
        //States what index should be skipped on the next follow through of the phases.
        //the index check should be -1 at the start, or the phaseIndex, if th ephase index has changed value.
        
        //For loop going through all the phases;
        // spilt the type (whether their needs to be a pause or not) 
        //and procedure (the actually function that execute the logic in the phases) 
        //of the current phases
        for (let i = 0; i < phaseArray.length; i++) {
            
            let { type, procedure, } = phaseArray[i];

            //check if the indexCheck is greater than current phase 
            //(therefore should be skipped as this phase has already been done in the past)
            if (phaseIndex <= i) {
                //set the index check to be i, so that if the next phase were to cancel the phases, 
                //it will store that this phase should block it.
                setPhaseIndex(i);
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
                            setBreakCheck(true);
                        break;
                        
                        case 'auto':
                            procedure();
                        break;
                    
                        default:
                            console.log('useRunPhase - error', breakCheck, phaseIndex);
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
        setBreakCheck(false);
        setPhaseIndex(phaseIndex => phaseIndex === phaseArray.length -1 ? -1 : phaseIndex);
    };

    useEffect(() => console.log(breakCheck), [breakCheck]);

    function Turn(playerDrawPhaseType, opponentDrawPhaseType, playerDraw, opponentDraw,) {
        runPhase(opponent.hasLost === false && player.hasLost === false ? [
            { type : 'auto', procedure : () => console.log('player', player, opponent), },
            { 
                type : playerDrawPhaseType, 
                procedure : () => 
                    drawFromDeck(
                        deck, 
                        setDeck, 
                        player,
                        playerDraw, 
                        setPlayer
                    ), 
            },
            { 
                type : 'auto',
                 procedure :  () => 
                    setPlayer(
                        rankHand(
                            player,
                            'hand', 
                            'handValue', 
                            'hasLost'
                        )
                    ), 
            },
            { type : 'auto', procedure : () => console.log('computer', player, opponent), },
            { 
                type : opponentDrawPhaseType, 
                procedure : () => 
                    drawFromDeck(
                        deck, 
                        setDeck, 
                        opponent,
                        opponentDraw, 
                        setOpponent,
                    ), 
            },
            { 
                type : 'auto',
                 procedure :  () => 
                    setOpponent(
                        rankHand(
                            opponent,
                            'hand', 
                            'handValue', 
                            'hasLost'
                        )
                    ), 
            },
            { type : 'auto', procedure : () => console.log('end', player, opponent), },
        ] : 'finished');
    };
    
    function Reset() {
        const newAgent = {
            hand : [],
            handValue : 0,
            hasLost : false,
        };

        setDeck(({ library, cardsTakenFromLibrary, }) => ({
            library : [...library, ...cardsTakenFromLibrary],
            cardsTakenFromLibrary : [],
        }));
        setPlayer(newAgent);
        setOpponent(newAgent);
        setBreakCheck(false);
        setPhaseIndex(-1);
    };

    function StartGame() {
        if (opponent.hand.length === 0 && player.hand.length === 0){
            Turn('auto', 'auto', 2, 2);
        } else {
            return null;
        }
    };
   
    /* RENDER */
    return (
        <div className="board grid">
            
            <h1 className="board--title">Blackjack game</h1>
            <button onClick={StartGame}>Start Game</button>
            <button onClick={() => Turn('playerAction', 'playerAction', 1, 1)}>Twist</button>
            <button onClick={() => {
                Reset();
                console.log('reset', deck, player, opponent);
            }}>Reset</button>
            <Opponents opponent={opponent} />
            <Pile pile={pile} />
            <Deck drawFromDeck={() => drawFromDeck(deck, setDeck, player, 1, setPlayer,)}/>
            <Player player={player} opponentHasLost={opponent.hasLost} />

            <div className='checkStats'>
                Library length : {deck.library.length}
                <br/>
                cardsTakenFromLibrary length : {deck.cardsTakenFromLibrary.length}
                <br/>
                playerHand length : {player.hand.length}
                <br/>
                opponentHand length : {opponent.hand.length}
                <br/>
                opponent value : {opponent.handValue}
            </div>

        </div>
    ); 

};