import React from 'react';

/* Deck - an array, whcih contains objects, adn each of those objects are cards. */
const standardDeck = {
    cardsTakenFromLibrary : [],
    library : shuffle([
        {"rank" : 2, "cardSuit" : "H"},
        {"rank" : 3, "cardSuit" : "H"},
        {"rank" : 4, "cardSuit" : "H"},
        {"rank" : 5, "cardSuit" : "H"},
        {"rank" : 6, "cardSuit" : "H"},
        {"rank" : 7, "cardSuit" : "H"},
        {"rank" : 8, "cardSuit" : "H"},
        {"rank" : 9, "cardSuit" : "H"},
        {"rank" : 10, "cardSuit" : "H"},
        {"rank" : 10, "royality" : "J", "cardSuit" : "H"},
        {"rank" : 10, "royality" : "Q", "cardSuit" : "H"},
        {"rank" : 10, "royality" : "K", "cardSuit" : "H"},
        {"rank" : [11, 1], "royality" : "A", "cardSuit" : "H"},

        {"rank" : 2, "cardSuit" : "D"},
        {"rank" : 3, "cardSuit" : "D"},
        {"rank" : 4, "cardSuit" : "D"},
        {"rank" : 5, "cardSuit" : "D"},
        {"rank" : 6, "cardSuit" : "D"},
        {"rank" : 7, "cardSuit" : "D"},
        {"rank" : 8, "cardSuit" : "D"},
        {"rank" : 9, "cardSuit" : "D"},
        {"rank" : 10, "cardSuit" : "D"},
        {"rank" : 10, "royality" : "J", "cardSuit" : "D"},
        {"rank" : 10, "royality" : "Q", "cardSuit" : "D"},
        {"rank" : 10, "royality" : "K", "cardSuit" : "D"},
        {"rank" : [11, 1], "royality" : "A", "cardSuit" : "D"},

        {"rank" : 2, "cardSuit" : "C"},
        {"rank" : 3, "cardSuit" : "C"},
        {"rank" : 4, "cardSuit" : "C"},
        {"rank" : 5, "cardSuit" : "C"},
        {"rank" : 6, "cardSuit" : "C"},
        {"rank" : 7, "cardSuit" : "C"},
        {"rank" : 8, "cardSuit" : "C"},
        {"rank" : 9, "cardSuit" : "C"},
        {"rank" : 10, "cardSuit" : "C"},
        {"rank" : 10, "royality" : "J", "cardSuit" : "C"},
        {"rank" : 10, "royality" : "Q", "cardSuit" : "C"},
        {"rank" : 10, "royality" : "K", "cardSuit" : "C"},
        {"rank" : [11, 1], "royality" : "A", "cardSuit" : "C"},

        {"rank" : 2, "cardSuit" : "S"},
        {"rank" : 3, "cardSuit" : "S"},
        {"rank" : 4, "cardSuit" : "S"},
        {"rank" : 5, "cardSuit" : "S"},
        {"rank" : 6, "cardSuit" : "S"},
        {"rank" : 7, "cardSuit" : "S"},
        {"rank" : 8, "cardSuit" : "S"},
        {"rank" : 9, "cardSuit" : "S"},
        {"rank" : 10, "cardSuit" : "S"},
        {"rank" : 10, "royality" : "J", "cardSuit" : "S"},
        {"rank" : 10, "royality" : "Q", "cardSuit" : "S"},
        {"rank" : 10, "royality" : "K", "cardSuit" : "S"},
        {"rank" : [11, 1], "royality" : "A", "cardSuit" : "S"},
    ]),
};

/* Library Methods */

// shuffle - take the deck (an array) and create a new deck (an array still) with all the card randomised.
// each is card is sh=ort to be randomny above or below another card

    function shuffle(deck) { 
        return deck.sort(() => 0.5 - Math.random());
    };

    //draw : enables the player to draw cards and add them to their hand, whilst keeping track of the cards that aren't in the player's hand
    //spilt the deck object to a library and cardsTakenFromLibrary
    //For the number of cards to draw

    function draw(deck, agent, numberOfCardsToDraw) {
        
        let {library, cardsTakenFromLibrary, } = deck;

        console.log('casino js - draw START', [{library,  cardsTakenFromLibrary}, agent], numberOfCardsToDraw);

        for (let index = 0; index < numberOfCardsToDraw; index++) {
            const removeTopCard = library.shift();
            console.log('casino js - draw top', removeTopCard);
            agent.hand.push(removeTopCard);
            cardsTakenFromLibrary.push(removeTopCard);
            
        };
        console.log('casino js - draw END', [{library,  cardsTakenFromLibrary}, agent],);
        return [{library,  cardsTakenFromLibrary}, agent];
    };

    function drawFromDeck(prevDeck, setDeckTo, agent, numberOfCards, setHand){
        const [newDeck, toDraw] = draw(prevDeck, agent, numberOfCards,);
        setDeckTo(newDeck);
        setHand(toDraw);
    };

    function useRenderHand(hand, cardFace, urls) {
        
        
        return hand.map(({ rank, cardSuit, royality, }) => {
            let cardImgUrl;
            if (royality !== undefined) {
                cardImgUrl = royality + cardSuit;
            } else {
                cardImgUrl = rank + cardSuit;
            };
            console.log(cardImgUrl, urls[cardImgUrl])
            return cardFace === 'front' ? <img 
                className={"card " + cardFace} 
                key={rank + cardSuit}
                src={urls[cardImgUrl]} 
            /> : <div className={"card " + cardFace} key={rank + cardSuit}></div>
        
        });
    };

    function rankHand(thisAgent, hand, handValue, hasLost, ) {
        const rankOfHand = thisAgent[hand].reduce((sumOfRank, card) => {
            let aceIsHighOrLow = (sumOfRank + 11) > 21 ? 1 : 0;
            let cardRank = Array.isArray(card.rank) ? card.rank[aceIsHighOrLow] : card.rank;
            return sumOfRank + cardRank;
        }, 0);
        thisAgent[handValue] = rankOfHand;
        thisAgent[hasLost] = rankOfHand > 21 ?  true : false;
        return thisAgent;
    };

    function run(phaseArray) {
        if (phaseArray === 'finished') {
            return null;
        };
        phaseArray.forEach(({ procedure, }) => {
            procedure();
        });
    };

    //setPhaseIndex(-1);
    // keep track of what phraseIndex should stop it is.
    //const [phaseIndex, setPhaseIndex] = useState(-1);
    
    // function runPhase(phaseArray){
    //     //if the phasearray is finished, e.g. one the player has lost, disable the button
    //     if (phaseArray === 'finished') {
    //         return null;
    //     };

    //     console.log(phaseIndex);

    //     //Checks what phase is needed to break next.
    //     //States what index should be skipped on the next follow through of the phases.
    //     //the index check should be -1 at the start, or the phaseIndex, if th ephase index has changed value.
        
    //     //For loop going through all the phases;
    //     // spilt the type (whether their needs to be a pause or not) 
    //     //and procedure (the actually function that execute the logic in the phases) 
    //     //of the current phases
    //     for (let i = 0; i < phaseArray.length; i++) {
            
    //         let { type, procedure, } = phaseArray[i];

    //         //check if the indexCheck is greater than current phase 
    //         //(therefore should be skipped as this phase has already been done in the past)
    //         if (phaseIndex < i) {
    //             //set the index check to be i, so that if the next phase were to cancel the phases, 
    //             //it will store that this phase should block it.
    //             //if break check is true , break the loop and then recharge the entire thing.
    //                 procedure();
    //                 setPhaseIndex(i);
    //                 if (type === 'playerAction') {
    //                     break;
    //                 };
                    
    //         // skip the pahse if it has already in done in the previous turn, this is only to clear up all pahses that weer preivous blocked off.
    //         } else {
    //             continue;
    //         };

    //     };
    //     //set the pahse array to be the reset (if it the last index nnumebr of the phaseArray, 
    //     //or set as indexCheck to skip all turns that have already been done.)
    //     console.log(phaseIndex, phaseArray.length);
    //     setPhaseIndex(phaseIndex => phaseIndex === phaseArray.length -1 ? -1 : phaseIndex);
    // };

/* EXPORTS */
export {
    standardDeck,
    shuffle,
    draw,
    drawFromDeck,
    useRenderHand,
    rankHand,
    run,
}