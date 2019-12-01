/*IMPORTS*/
import React from 'react'; 

import url from '../../JPEG/Red_back.jpg';

/*COMPONENT*/
export default function Deck({ drawFromDeck, }) {
    // click event listener : onClick={drawFromDeck}
    /* RENDER */
    return (
        <img className="deck" src={url} />
    ); 

};