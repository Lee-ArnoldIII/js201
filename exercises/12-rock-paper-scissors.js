// Write a function "rockPaperScissors" which takes the throw of player 1 and
// the throw of player 2.
// A throw can have the values of 'rock', 'paper', or 'scissors'.
// It should return the winner: 'player 1', 'player 2', or 'draw'
// Examples:
// rockPaperScissors('rock', 'scissors') --> 'player 1'
// rockPaperScissors('rock', 'paper') --> 'player 2'
// rockPaperScissors('paper', 'paper') --> 'draw'
function rockPaperScissors (player1Throw, player2Throw) {
    if (player1Throw===player2Throw) {
        return "draw";
    } 
    if (player1Throw === 'rock') {
        if(player2Throw==='scissors'){
            return 'player 1';
        }
        else{
            return 'player 2';
        }
    }
    if (player1Throw === 'paper'){
        if(player2Throw==='rock'){
            return 'player 1';
        }
        else {
            return 'player 2';
        }
    }
    if (player1Throw==='scissors'){
        if(player2Throw==='paper'){
            return 'player 1';
        }
        else {
            return 'player 2';
        }
    }  
    
}
