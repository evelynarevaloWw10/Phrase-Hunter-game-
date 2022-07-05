/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Phrase.js */

// constructor with one @para
class Phrase {
    constructor(phrase){
     this.phrase = phrase.toLowerCase();    
    }
    addPhraseToDisplay(){  // display method adds letter placeholder when game starts
        let phraseShown = document.querySelector("div#phrase ul");// query Selctor to select phrase element
        for( let i = 0; i <this.phrase.length; i++ ) { // for loop to iterate over phrase.length and replace innerhtml with new values 
            if (this.phrase[i] === " ") {
         phraseShown.innerHTML += `<li class="space"> </li>`       
            } else {
         phraseShown.innerHTML += `<li class="hide letter ${this.phrase[i]}">${this.phrase[i]}</li>`;
         }

    }
    return this.phrase
 } ;
//  checkLetter() to verify if letter matches a phrase  
 checkLetter(letter){
    if (this.phrase.includes(letter)){
        return true;
    } else {
        return false;
     }
 };
// will display if letter matches 
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