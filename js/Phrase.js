/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Phrase.js */

class Phrase {
    constructor(phrase){
     this.phrase = phrase.toLowerCase();    
    }
    addPhraseToDisplay(){
        let phraseShown = document.querySelector("div#phrase ul");
        for( let i = 0; i <this.phrase.length; i++ ) {
            if (this.phrase[i] === " ") {
         phraseShown.innerHTML += `<li class="space"> </li>`       
            } else {
         phraseShown.innerHTML += `<li class="hide letter ${this.phrase[i]}">${this.phrase[i]}</li>`;
         }

    }
    return this.phrase
 } ;

 checkLetter(letter){
    if (this.phrase.includes(letter)){
        return true;
    } else {
        return false;
     }
 };

showMatchedLetter(letter){
   let showLetter = document.querySelectorAll("li")
 for (let i = 0; i < showLetter.length; i++) {
    if(showLetter[i].textContent === letter){
    showLetter[i].classList.remove("hide");
    showLetter[i].classList.add("show");
      }  
     }
 };


 };