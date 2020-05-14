/*IMPORTS*/
import React from 'react'; 
import { Deck, } from './index';

/*COMPONENT*/
export default function Pile() {
    //drawFromDeck={() => drawFromDeck(deck, setDeck, player, 1, setPlayer,)}
    return (
        <div className="pile">
            <Deck />
        </div>
    ); 

};