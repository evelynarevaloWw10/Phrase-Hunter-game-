/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * app.js */

/**
* Begins game by selecting a random phrase and displaying it to user
*/
let startButton = document.getElementById("btn__reset");
const game = new Game(); 


startButton.addEventListener('click', (e)=> { // event listner that listens to user interation to start game
    game.startGame();

});

// created to show displayed keys on screen
document.getElementById('qwerty').addEventListener('click', (e) => {
    const button = e.target;
    if(button.tagName === 'BUTTON'){
        game.handleInteraction(button);
    }
});
 