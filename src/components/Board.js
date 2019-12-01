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
    run,
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
    const [isOpponentTurn, setIsOpponentTurn] = useState(false);
  
    // keep track of what phraseIndex should stop it is.
    const [phaseIndex, setPhaseIndex] = useState(-1);

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
            if (phaseIndex < i) {
                //set the index check to be i, so that if the next phase were to cancel the phases, 
                //it will store that this phase should block it.
                //if break check is true , break the loop and then recharge the entire thing.
                    procedure();
                    setPhaseIndex(i);
                    if (type === 'playerAction') {
                        break;
                    };
                    
            // skip the pahse if it has already in done in the previous turn, this is only to clear up all pahses that weer preivous blocked off.
            } else {
                continue;
            };

        };
        //set the pahse array to be the reset (if it the last index nnumebr of the phaseArray, 
        //or set as indexCheck to skip all turns that have already been done.)
        console.log(phaseIndex, phaseArray.length);
        setPhaseIndex(phaseIndex => phaseIndex === phaseArray.length -1 ? -1 : phaseIndex);
    };

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
        setDeck(({ library, cardsTakenFromLibrary, }) => ({
            cardsTakenFromLibrary : [],
            library : [...library, ...cardsTakenFromLibrary],
        }));
        setPlayer({
            hand : [],
            handValue : 0,
            hasLost : false,
        });
        setOpponent({
            hand : [],
            handValue : 0,
            hasLost : false,
        });
        setPhaseIndex(-1);
        setIsOpponentTurn(false);  
    };

    function StartGame() {
        if (opponent.hand.length === 0 && player.hand.length === 0){
            Turn('auto', 'auto', 2, 2);
        } else {
            return null;
        }
    };

    function OpponentTurn() {
        for (let index = 0; index < opponent.hand.length; index++) {
            Turn('auto', 'auto', 0, 1);
            if (opponent.HasLost || opponent.handValue === 21) {
                break;
            };
        };  
        setIsOpponentTurn(true);     
    };
   
    /* RENDER */
    return (
        <div className="board grid">
            
            <h1 className="board--title">Blackjack game</h1>
            <p>Note : aces are low</p>
            <button onClick={StartGame}>Start Game</button>
            <button onClick={() => Turn('auto', 'auto', 1, 0)}>Twist</button>
            <button onClick={() => {
                Turn('auto', 'auto', 0, 0);
                OpponentTurn();
            }}>Stick</button>
            <button onClick={OpponentTurn}>End Turn</button>
            <button onClick={Reset}>Reset</button>
            <Opponents opponent={opponent} isOpponentTurn={isOpponentTurn} />
            <Pile pile={pile} />
            <Deck drawFromDeck={() => drawFromDeck(deck, setDeck, player, 1, setPlayer,)}/>
            <Player player={player} opponent={opponent} isOpponentTurn={isOpponentTurn} />
             {isOpponentTurn ? <div className="checkStats"> Opponent Hand Value : {opponent.handValue} </div> : null}
        </div>
    ); 

};