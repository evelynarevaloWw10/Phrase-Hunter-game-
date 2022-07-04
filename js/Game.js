/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Game.js */

class Game{
    constructor(){
     this.missed = 0; 
     this.phrases = [
     new Phrase ("you got this"),
     new Phrase ("keep on keeping on"), 
     new Phrase ("the best is yet to be"), 
     new Phrase ("you talking to me"),
     new Phrase ("may the force be with you")
    ]; 
     this.activePhrase = null;
    }
    startGame(){
        document.querySelector("div#overlay").style.display ="none";
        let newPhrase = this.getRandomPhrase();
        this.activePhrase = newPhrase;
        this.activePhrase.addPhraseToDisplay()
        }
    
     getRandomPhrase() {
        const random = Math.floor(Math.random() * this.phrases.length);
        return this.phrases[random];
        }; 
        
        handleInteraction(button) {
         button.disabled = true;
        if (this.activePhrase.checkLetter(button.innerHTML)) {
        this.activePhrase.showMatchedLetter(button.innerHTML);
        button.classList.add('chosen');

  
          if(this.checkForWin() === true) {
           this.gameOver(true);
          
            };
          } else {            
              
              button.classList.add('wrong');
          
              this.removeLife();
          }       


      };   
  

    //https://www.kirupa.com/html5/finding_elements_dom_using_querySelector.htm
    removeLife(){
     const heartSelect = document.querySelectorAll("img");
       if (this.missed < 4){
       heartSelect[this.missed].src = "images/lostHeart.png";
        this.missed += 1;
       }else if( this.missed === 4) {
        this.gameOver(false);
       }

     };

     checkForWin(){
      //https://www.sitepoint.com/hide-elements-in-css/
        const correctGuess =  document.querySelectorAll('.hide');
        if(correctGuess.length  === 0){
              return true;
        } else { 
              return false;
               }
            };

       gameOver(gameWon){
        const finsihedOverlay = document.getElementById("overlay");
        finsihedOverlay.style.display = "block";    
        if(gameWon === true){
          document.getElementById("game-over-message").innerHTML = "Wohoo you are the winner!";
          finsihedOverlay.className = ("win");
            }else{
              document.getElementById("game-over-message").innerHTML = "Sorry better luck next time!";
              finsihedOverlay.className = ("lose");
            }

       }     
    

     }

 

    
        
  
 


  
 
    
    
    
    
    
    
