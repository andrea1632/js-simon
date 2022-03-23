/*
Visualizzare in pagina 5 numeri casuali. Da lì parte un timer di 30 secondi.
Dopo 30 secondi l'utente deve inserire, uno alla volta, i numeri che ha visto precedentemente, tramite il prompt().
Dopo che sono stati inseriti i 5 numeri, il software dice quanti e quali dei numeri da indovinare sono stati individuati.
*/
let contenitore = document.getElementById("contenitore");
var userNum = [];
contenitore.innerHTML += (randomGeneratorInt())
setTimeout(getUserNum, 100);
arrayCompare()
console.log(userNum) 




//funzione per generare 5 numeri random
function randomGeneratorInt (){
    numCpu = [];
    for(i = 0; i < 5; i++){
        let randomNum = Math.floor(Math.random() * 100)
        numCpu.push(randomNum)
    }
    return numCpu;
}
//funzione per ricevere 5 numeri dall'utente
function getUserNum () {
    for (i = 0; i < 5; i++){
        let numInput = parseInt(prompt(`inserisci il ${i +1}° numero`))
        userNum.push(numInput)
    }
    console.log(userNum)
    return userNum;
}
//funzione per determinare l'uguaglianza dei 2 array
function arrayCompare () {
    let points = [];
    for ( y = 0; y <= numCpu.lenght; y++ ){
        if (numCpu.includes (userNum[y])){
            points.push(y)
        }
    }
    return points;
}