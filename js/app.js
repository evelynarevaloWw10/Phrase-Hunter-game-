/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * app.js */

/**
* Begins game by selecting a random phrase and displaying it to user
*/
let startButton = document.getElementById("btn__reset");
const game = new Game();


startButton.addEventListener('click', (e)=> {
    game.startGame();

});

document.getElementById('qwerty').addEventListener('click', (e) => {
    const button = e.target;
    if(button.tagName === 'BUTTON'){
        game.handleInteraction(button);
    }
});
