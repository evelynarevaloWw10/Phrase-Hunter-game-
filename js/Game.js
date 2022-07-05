/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Game.js */

/*game constructor w/ following properties
missed- keeps track of missed guesses
phrases that has an array of phrases
*/
 class Game{
    constructor(){
     this.missed = 0; 
     this.phrases = [
     new Phrase ("you got this"),
     new Phrase ("Acid rain"), 
     new Phrase ("Sunshine state"), 
     new Phrase ("Too long"),
     new Phrase ("want candy")
    ]; 
     this.activePhrase = null; // game starts a null
    }
    startGame(){ // Begins game by selecting random phrase and displaying it to users
        document.querySelector("div#overlay").style.display ="none";
        let newPhrase = this.getRandomPhrase();
        this.activePhrase = newPhrase;
        this.activePhrase.addPhraseToDisplay()
        }
    
     getRandomPhrase() { // return a random phrase from array of phrases
        const random = Math.floor(Math.random() * this.phrases.length);
        return this.phrases[random];
        }; 
        

        // connects phrase and game phrase to make game work
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
  
      // removes heart img based on guesses
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
     // checks to see if any letters are hidden if value is zero it will return true(win)
     checkForWin(){
      //https://www.sitepoint.com/hide-elements-in-css/
        const correctGuess =  document.querySelectorAll('.hide');
        if(correctGuess.length  === 0){
              return true;
        } else { 
              return false;
               }
            };


  // function displays winning or lossing message, used for loop 
 //and manipulated DOM html with element.Id selectors
       gameOver(gameWon){       
        const finsihedOverlay = document.getElementById("overlay");
        finsihedOverlay.style.display = "block";    
        if(gameWon === true){
          document.getElementById("game-over-message").innerHTML = "Wohoo you are the winner!";
          finsihedOverlay.className = ("win");
           game.resetGame();
            }else{
              document.getElementById("game-over-message").innerHTML = "Sorry better luck next time!";
              finsihedOverlay.className = ("lose");  
           game.resetGame();
            }
         

       } 
       
       resetGame() { 
       //intialized varaibles 
        const resetHearts = document.querySelectorAll('.tries img');
        const qwerty = document.getElementById('qwerty');
        const button = qwerty.getElementsByTagName('button');
        const phraseCheck = document.getElementById('phrase');
        phraseCheck.querySelector('ul').innerHTML='';
        
      
        this.missed = 0;// for loop to iterate values 
        for (let i = 0; i < button.length; i++) {
         button[i].disabled = false;
         button[i].classList.remove('chosen');// enables onscreen keyboard buttons to update
         button[i].classList.remove('wrong');
        }
        
        for (let i = 0; i < resetHearts.length; i++) { // resets hearts 
          resetHearts[i].src = 'images/liveHeart.png';
        }
       
      }
    }




     

 

    
        
  
 


  
 
    
    
    
    
    
    
