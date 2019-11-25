/*IMPORTS*/
import React from 'react'; 

/*COMPONENT*/
export default function Deck({ drawFromDeck, }) {
    
    /* RENDER */
    return (
        <div className="deck" onClick={drawFromDeck}>Deck</div>
    ); 

};