var userWord = prompt('Inserisci una parola:');
console.log(userWord);

function checkPalindrom(userWord) {
    return userWord == userWord.split('').reverse().join('');
}
/* QUESTA FUNZIONE PRENDE LA PAROLA INSERITA DAL NOSTRO UTENTE, SEPARA I CARATTERI TRA LORO CON .SPLIT(), NE INVERTE L'ORDINE CON .REVERSE(), E CON .JOIN() CI
RESTITUISCE I CARATTERI INVERTITI SOTTO FORMA DI UNA NUOVA STRINGA //=(CHE E' SEMPRE LA STRINGA ORIGINALE MA SOLO INVERTITA),
CHE VIENE CONFRONTATA CON QUELLA ORIGINALE E SE E' UGUALE SIGNIFCA CHE LA PAROLA E' PALINDROMA E IN QUESTO CASO LA FUNZIONe
CI RESTITUIRA' TRUE, IN CASO CONTRARIO IL RISULTATO SAREBBE FALSE.*/

console.log(checkPalindrom(userWord));


var sum = 0;
var winOrLoose;
var userNumber = parseInt(prompt('Inserisci un numero da 1 a 5:'));



if ((userNumber >= 1 && userNumber <= 5)) {
    var userChioce = prompt('Scegli tra pari e dispari:');
} else {
    alert('ATTENZIONE!! NON HAI INSERITO UN NUMERO VALIDO.')
}

function cpuRandom() {
    cpuNumber = Math.floor(Math.random() * 5) + 1
    return cpuNumber;
}

sum = userNumber + cpuRandom();
console.log(sum);

function evenOrOdd() {
    var bool = false;
    if ((sum % 2 === 0 && userChioce == 'pari') || (sum % 2 !== 0 && userChioce == 'dispari')) {
        bool = true;
    }
    return bool;
}

var y = evenOrOdd();

if (y === true) {
    winOrLoose = 'CONGRATULAZIONI! HAI VINTO:';
} else {
    winOrLoose = 'OH NO! HAI PERSO:';
}

var result = console.log(winOrLoose);