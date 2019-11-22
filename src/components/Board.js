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
    useRunPhase, 
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
  
    /* HELPER FUNCTIONS */
    function runAdv() {
        opponent.hasLost === false && player.hasLost === false ? useRunPhase([
            { type : 'playerAction', procedure : drawFromDeck(deck, setDeck, currentPlayer, 1, setCurrentPlayer,), },
            { type : 'auto', procedure :  setCurrentPlayer(rankHand(currentPlayer, 'hand', 'handValue', 'hasLost')), },
            { type : 'auto', procedure : setTurn(rotateTurn(turn)), },
        ]) : null;
    };

    /* RENDER */
    return (
        <div className="board grid">
            <button onClick={() => {
                /*opponent.hasLost === false && player.hasLost === false ? run([
                    drawFromDeck(deck, setDeck, currentPlayer, 1, setCurrentPlayer,),
                    setCurrentPlayer(rankHand(currentPlayer, 'hand', 'handValue', 'hasLost')),
                    setTurn(rotateTurn(turn)),
                ]) : null;*/
                runAdv();
            }}> run a turn</button>
            <Opponents opponent={opponent} />
            <Pile pile={pile} />
            <Deck drawFromDeck={() => drawFromDeck(deck, setDeck, player, 1, setPlayer,)}/>
            <Player player={player} />
        </div>
    ); 

};