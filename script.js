var userWord = prompt('Inserisci una parola: ');
console.log(userWord);

function checkPalindrom(userWord) {
    return userWord == userWord.split('').reverse().join('');
}
/* QUESTA FUNZIONE PRENDE LA PAROLA INSERITA DAL NOSTRO UTENTE, SEPARA I CARATTERI TRA LORO CON .SPLIT(), NE INVERTE L'ORDINE CON .REVERSE(), E CON .JOIN() CI
RESTITUISCE I CARATTERI INVERTITI SOTTO FORMA DI UNA NUOVA STRINGA //=(CHE E' SEMPRE LA STRINGA ORIGINALE MA SOLO INVERTITA),
CHE VIENE CONFRONTATA CON QUELLA ORIGINALE E SE E' UGUALE SIGNIFCA CHE LA PAROLA E' PALINDROMA E IN QUESTO CASO LA FUNZIONe
CI RESTITUIRA' TRUE, IN CASO CONTRARIO IL RISULTATO SAREBBE FALSE.*/

console.log(checkPalindrom(userWord));

