/*IMPORTS*/
import React from 'react'; 

/*COMPONENT*/
export default function DisplayBoard({
    Turn,
    gameHasStarted,
    player,
    opponent,
    isOpponentTurn,
    Reset,
    StartGame,
    OpponentTurn,
}) {

    function gameStateMessage(agent, opposition, message,) {
        if (opposition.hasLost === true || (agent.handValue > opposition.handValue && !agent.hasLost && isOpponentTurn)) {
           return <div>{message}</div>;
        }  else {
            return null;
        };          
    };

    function hasDrawn(agent, opposition, message) {
        if (agent.handValue === 21 && opposition.handValue === 21 && isOpponentTurn) {
            return <div>{message}</div>
        }
    }

    const isPlayerPlaying = !gameHasStarted || player.hasLost || opponent.hasLost | isOpponentTurn;
    const isPlayerLost = !gameHasStarted || !player.hasLost || opponent.hasLost || isOpponentTurn;

    return (
        <div className="board--DisplayOptions">
                
            <button disabled={gameHasStarted} onClick={StartGame}>Start Game</button>
            <button 
                disabled={isPlayerPlaying} 
                onClick={() => Turn('auto', 'auto', 1, 0)}
            >
                Twist
            </button>
            <button 
                disabled={isPlayerPlaying} 
                onClick={() => {
                    Turn('auto', 'auto', 0, 0);
                    OpponentTurn();
            }}>Stick</button>
            <button 
                disabled={isPlayerLost} 
                onClick={() => player.hasLost ? OpponentTurn() : null}
            >
                Reveal
            </button>
            <button disabled={!gameHasStarted} onClick={Reset}>Reset</button>

            <div className="divide"></div>

            <div className="checkStats">
                <div>your current total card value : {player.handValue}</div> 
                {isOpponentTurn ? <div> Opponent Hand Value : {opponent.handValue} </div> : null}

                {gameStateMessage(player, opponent,  'You have Won')}
                {gameStateMessage(opponent, player, 'You have Lost')}
                {hasDrawn(player, opponent, 'You have Drawn')}
            </div>    
        </div>
    ); 

};