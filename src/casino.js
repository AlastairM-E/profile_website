import React, { useState, useEffect, } from 'react';

/* Deck - an array, whcih contains objects, adn each of those objects are cards. */
const standardDeck = {
    cardsTakenFromLibrary : [],
    library : shuffle([
        {"rank" : 1, "cardSuit" : "H"},
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

        {"rank" : 1, "cardSuit" : "D"},
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

        {"rank" : 1, "cardSuit" : "C"},
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

        {"rank" : 1, "cardSuit" : "S"},
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

    

    const [urls, setUrls] = useState([]);

    function useRenderHand(hand, cardFace,) {
        
        useEffect(() => {
            setUrls(
                hand.reduce(async (accum, { rank, cardSuit, royality },) => {
                    let cardImgUrl = 'JPEG/' + (royality ? royality : rank) + cardSuit;
                    let importUrl = await import('./' + cardImgUrl + '.jpg').then((res) => {
                        return res.default;
                    }).catch(error => error);
                    await accum.push(importUrl);
                }, [])
            );
        }, []);
        
        return hand.map(({ rank, cardSuit, }, index) => {
            return <img 
                className={"card " + cardFace} 
                key={rank + cardSuit}
                src={urls[index]} 
            />
        });
    };

    function rankHand(thisAgent, hand, handValue, hasLost, ) {
        const rankOfHand = thisAgent[hand].reduce((sumOfRank, card) => {
            let cardRank = Array.isArray(card.rank) ? card.rank[1] : card.rank;
            return sumOfRank + cardRank;
        }, 0);
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
    useRenderHand,
    rankHand,
    run,
}