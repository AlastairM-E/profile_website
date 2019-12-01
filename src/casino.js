import React from 'react';

/* Deck - an array, whcih contains objects, adn each of those objects are cards. */
const standardDeck = {
    cardsTakenFromLibrary : [],
    library : shuffle([
        {"rank" : 1, "cardSuit" : "hearts"},
        {"rank" : 2, "cardSuit" : "hearts"},
        {"rank" : 3, "cardSuit" : "hearts"},
        {"rank" : 4, "cardSuit" : "hearts"},
        {"rank" : 5, "cardSuit" : "hearts"},
        {"rank" : 6, "cardSuit" : "hearts"},
        {"rank" : 7, "cardSuit" : "hearts"},
        {"rank" : 8, "cardSuit" : "hearts"},
        {"rank" : 9, "cardSuit" : "hearts"},
        {"rank" : 10, "cardSuit" : "hearts"},
        {"rank" : 11, "cardSuit" : "hearts"},
        {"rank" : 12, "cardSuit" : "hearts"},
        {"rank" : 13, "cardSuit" : "hearts"},
        {"rank" : 14, "cardSuit" : "hearts"},

        {"rank" : 1, "cardSuit" : "diamonds"},
        {"rank" : 2, "cardSuit" : "diamonds"},
        {"rank" : 3, "cardSuit" : "diamonds"},
        {"rank" : 4, "cardSuit" : "diamonds"},
        {"rank" : 5, "cardSuit" : "diamonds"},
        {"rank" : 6, "cardSuit" : "diamonds"},
        {"rank" : 7, "cardSuit" : "diamonds"},
        {"rank" : 8, "cardSuit" : "diamonds"},
        {"rank" : 9, "cardSuit" : "diamonds"},
        {"rank" : 10, "cardSuit" : "diamonds"},
        {"rank" : 11, "cardSuit" : "diamonds"},
        {"rank" : 12, "cardSuit" : "diamonds"},
        {"rank" : 13, "cardSuit" : "diamonds"},
        {"rank" : 14, "cardSuit" : "diamonds"},

        {"rank" : 1, "cardSuit" : "clubs"},
        {"rank" : 2, "cardSuit" : "clubs"},
        {"rank" : 3, "cardSuit" : "clubs"},
        {"rank" : 4, "cardSuit" : "clubs"},
        {"rank" : 5, "cardSuit" : "clubs"},
        {"rank" : 6, "cardSuit" : "clubs"},
        {"rank" : 7, "cardSuit" : "clubs"},
        {"rank" : 8, "cardSuit" : "clubs"},
        {"rank" : 9, "cardSuit" : "clubs"},
        {"rank" : 10, "cardSuit" : "clubs"},
        {"rank" : 11, "cardSuit" : "clubs"},
        {"rank" : 12, "cardSuit" : "clubs"},
        {"rank" : 13, "cardSuit" : "clubs"},
        {"rank" : 14, "cardSuit" : "clubs"},

        {"rank" : 1, "cardSuit" : "spades"},
        {"rank" : 2, "cardSuit" : "spades"},
        {"rank" : 3, "cardSuit" : "spades"},
        {"rank" : 4, "cardSuit" : "spades"},
        {"rank" : 5, "cardSuit" : "spades"},
        {"rank" : 6, "cardSuit" : "spades"},
        {"rank" : 7, "cardSuit" : "spades"},
        {"rank" : 8, "cardSuit" : "spades"},
        {"rank" : 9, "cardSuit" : "spades"},
        {"rank" : 10, "cardSuit" : "spades"},
        {"rank" : 11, "cardSuit" : "spades"},
        {"rank" : 12, "cardSuit" : "spades"},
        {"rank" : 13, "cardSuit" : "spades"},
        {"rank" : 14, "cardSuit" : "spades"},
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

    function renderHand(hand, cardFace ) {
        return hand.map(({ rank, cardSuit}) => <div className={"card " + cardFace} key={rank + cardSuit}>{rank} | {cardSuit} </div>);
    };

    function rankHand(thisAgent, hand, handValue, hasLost) {
        const rankOfHand = thisAgent[hand].reduce((sumOfRank, card) => sumOfRank + card.rank, 0);
        thisAgent[handValue] = rankOfHand;
        thisAgent[hasLost] = rankOfHand > 21 ?  true : false;
        return thisAgent;
    };

    function run(phaseArray) {
        phaseArray.forEach(({ procedure, }) => {
            procedure();
        });
    };

/* EXPORTS */
export {
    standardDeck,
    shuffle,
    draw,
    drawFromDeck,
    renderHand,
    rankHand,
    run,
}