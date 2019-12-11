/*IMPORTS*/
import React, { useState, useReducer, useEffect, } from 'react';

import { 
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
import DisplayBoard from './cardGameComponents/DisplayBoard';


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
    const [gameHasStarted, setGameHasStarted] = useState(false);

    const [urls, dispatchUrls] = useReducer((state, {  type, data, propertyName, }) => {
        switch (type) {
            case 'FETCH_DATA':
                return {...state, [propertyName] : data, };
            break;
        
            default:
                console.log(type, data);
            break;
        }
    }, []);

    useEffect(() => {
       const mappedUrls = deck.library.map(async ({ rank, cardSuit, royality },) => {
            console.log(royality);
            let cardImgUrl;
            if (royality !== undefined) {
                cardImgUrl = royality + cardSuit;
            } else {
                cardImgUrl = rank + cardSuit;
            };
            
            let importUrl = await import('../JPEG/' +  cardImgUrl + '.jpg').then((res) => {
                return res.default
            }).catch(error => error);
            dispatchUrls({type : 'FETCH_DATA', data : await importUrl, propertyName : cardImgUrl, });
        });
        return undefined;
    }, []);


    function Turn(playerDrawPhaseType, opponentDrawPhaseType, playerDraw, opponentDraw,) {
      run(opponent.hasLost === false && player.hasLost === false ? [
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
        setIsOpponentTurn(false);  
        setGameHasStarted(false);
    };

    function StartGame() {
        if (opponent.hand.length === 0 && player.hand.length === 0){
            Turn('auto', 'auto', 2, 2);
            setGameHasStarted(true);
        } else {
            return null;
        };
    };

    function OpponentTurn() {
        for (let index = 0; index < opponent.hand.length; index++) {
            if (opponent.HasLost || opponent.handValue >= 16) {
                break;
            } else {
                Turn('auto', 'auto', 0, 1);
            };  
        };  
        setIsOpponentTurn(true);     
    };
   
    /* RENDER */
    return (
        <div className="board grid">
            
            <h1 className="board--title">Blackjack</h1> 
            <DisplayBoard 
                Turn={Turn}
                gameHasStarted={gameHasStarted}
                player={player}
                opponent={opponent}
                isOpponentTurn={isOpponentTurn}
                Reset={Reset}
                StartGame={StartGame}
                OpponentTurn={OpponentTurn}
            />
            <Opponents opponent={opponent} isOpponentTurn={isOpponentTurn} urls={urls} />
            <Pile pile={pile} />
            <Player player={player} urls={urls} />

        </div>
    ); 

};