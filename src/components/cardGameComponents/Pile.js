/*IMPORTS*/
import React from 'react'; 
import { Deck, } from './index';

/*COMPONENT*/
export default function Pile() {

    return (
        <div className="pile">
            <Deck drawFromDeck={() => drawFromDeck(deck, setDeck, player, 1, setPlayer,)}/>
        </div>
    ); 

};