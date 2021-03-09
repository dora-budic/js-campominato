var bombsArray = [];
var playerNumbers = [];
var maxLimit;

// Chiedere all'utente una difficoltà
var control = true;

while (control) {
  var level = parseInt(prompt("Choose level of difficulty: 0 (range 1-100), 1 (1-80) or 2 (1-50)"));
  switch (level) {
    case 0:
    maxLimit = 100;
    control = false;
    break;

    case 1:
    maxLimit = 80;
    control = false;
    break;

    case 2:
    maxLimit = 50;
    control = false;
    break;

    default:
    console.log("You have to choose or 0 or 1 or 2!!");
    break;
  }
}

// Chiamo la funzione per 16 numeri random
var bombsArray = createBombs(bombsArray, maxLimit);
document.getElementById('computer').innerHTML = "Positions with a bomb: " + bombsArray;

// Chiamo la funzione per avere il punteggio dell'utente
var result = score(bombsArray, playerNumbers, maxLimit);
document.getElementById('score').innerHTML = "User has ended the game with " + result + " points.";

// Funzione - genera 16 numeri random tra 1 e 100, senza numeri doppi
function createBombs(array,max) {
  while (array.length < 16) {
    var bomb = randomNumber(1, max);
    if (!array.includes(bomb)) {
      array.push(bomb);
    }
  }
  return array;
}

// Funzione - genera numero random
function randomNumber(min,max) {
  if (isNaN(min) || isNaN(max)) {
    console.log("Not a number");
  } else {
    var genNumber = Math.floor(Math.random() * (max - min + 1)) + min;
    return genNumber;
  }
}

// Chiedo all'utente di inserire un numero tra 1 e max (100, 80, 50), non puo ripetere lo stesso numero
// Funzione - calcola il numero di volte che l’utente ha inserito un numero consentito
function score(generatedNumbers, insertedNumbers, max) {
  while (insertedNumbers.length < max - 16) {
    var number = parseInt(prompt("Write one number between 1 and " + max));
    if (number >= 1 && number <= max && !isNaN(number) && !insertedNumbers.includes(number)) {
      if (!generatedNumbers.includes(number)) {
        insertedNumbers.push(number);
      } else {
        console.log(insertedNumbers);
        console.log(number);
        return insertedNumbers.length;
      }
    }
  }
  return insertedNumbers.length;
}
