
/* 
Visualizzare in pagina 5 numeri casuali. Da lì parte un timer di 30 secondi. Dopo 30 secondi i numeri scompaiono e l'utente deve inserire, uno alla volta, i numeri che ha visto precedentemente, tramite il prompt(). Dopo che sono stati inseriti i 5 numeri, il software dice quanti e quali dei numeri da indovinare sono stati individuati.
*/

// 5 numeri casuali
//const randomNumber = Math.floor(Math.random() * 11);
const ulEl = document.querySelector('.list');
let x = document.querySelector('h3');

const arrayRdmNumb = [];
const arrayGivenNumb = [];

generateRdmNumb();
console.log(arrayRdmNumb);

setTimeout(function(){x.innerHTML = '!! You got 5 seconds left !!'}, 2500);
setTimeout(() => {ulEl.innerHTML = '';}, 5000);
setTimeout(() => {
    for (let index = 0; index < 5; index++) {
        const givenNumb = Number(prompt(`Remember the sequence? Type here the number of the sequence in position ${index+1}`));
        arrayGivenNumb.push(givenNumb)       
    }
    generateResult()   
 },5100);



function generateResult(){
    let rightNumb;
    rightNumb = confrontNumbers(arrayRdmNumb);

    x.innerHTML = `You guessed ${rightNumb.length} time${rightNumb.length != 1 ? 's' : ''} right`;
 
    if(rightNumb.length === 0) return;   
    ulEl.insertAdjacentElement("afterend", generateDetails(rightNumb));
    
}

function generateDetails(arr){
    const divEl = document.createElement('div');
    divEl.className = 'd_flex';
    divEl.innerHTML = '<h5>Number</h5>'
    arr.forEach((number, index) => {
        const h6El = document.createElement('h6');
        h6El.innerHTML = arr.length === index + 1 ? number : `${number}&nbsp;&nbsp;&nbsp; and`
        divEl.insertAdjacentElement("beforeend", h6El)
    })
    return divEl
}

function confrontNumbers(arr) {
    return arr.filter((number, index) => number === arrayGivenNumb[index]);
}

function generateRdmNumb() {
    for (let i = 0; i < 5; i++) {
        const randomNumber = Math.floor(Math.random() * 11);
        arrayRdmNumb.push(randomNumber) 
        const liEl = document.createElement('li')
        liEl.innerHTML = randomNumber 
        ulEl.appendChild(liEl)   
    }
}











 
