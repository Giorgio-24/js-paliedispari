//=PALINDROMI PRIMO METODO.
var userWord1 = prompt('Inserisci una parola (Primo metodo):');
console.log(userWord1);

function checkPalindrom1(userWord1) {
    return userWord1 == userWord1.split('').reverse().join('');
}
/* QUESTA FUNZIONE PRENDE LA PAROLA INSERITA DAL NOSTRO UTENTE, SEPARA I CARATTERI TRA LORO CON .SPLIT(), NE INVERTE L'ORDINE CON .REVERSE(), E CON .JOIN() CI
RESTITUISCE I CARATTERI INVERTITI SOTTO FORMA DI UNA NUOVA STRINGA //=(CHE E' SEMPRE LA STRINGA ORIGINALE MA SOLO INVERTITA),
CHE VIENE CONFRONTATA CON QUELLA ORIGINALE E SE E' UGUALE SIGNIFCA CHE LA PAROLA E' PALINDROMA E IN QUESTO CASO LA FUNZIONE
CI RESTITUIRA' TRUE, IN CASO CONTRARIO IL RISULTATO SAREBBE FALSE.*/
console.log(checkPalindrom1(userWord1));

//=PALINDROMI SECONDO METODO.
var userWord2 = prompt('Inserisci una parola (Secondo metodo):');
console.log(userWord2);

function checkPalindrom2(userWord2) {
    var x = userWord2.length - 1;
    for (var i = 0; i <= userWord2.length, x >= 0; i++, x--) {
        if (userWord2[i] === userWord2[x]) {
            return true;
        } else {
            return false;
        }

    }
}

console.log(checkPalindrom2(userWord2));


//=PALINDROMI TERZO METODO.
var userWord3 = prompt('Inserisci una parola (Terzo metodo):');
console.log(userWord3);


function checkPalindrom3(userWord3) {
    var len = Math.floor(userWord3.length / 2);
    for (var i = 0; i < len; i++)
        if (userWord3[i] !== userWord3[userWord3.length - i - 1])
            return false;
    return true;
}

console.log(checkPalindrom3(userWord3));

/* //=PARI E DISPARI.
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

var result = console.log(winOrLoose); */