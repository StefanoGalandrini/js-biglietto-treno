/*
	- chiedere il numero di Km da percorrere e inserirla nella variabile distance;
	- chiedere l'età del passeggero e inserirla nella variabile age;
	- SE distance e age sono numeri e sono maggiori di 0:
		- moltiplicare distance per 0.21 e inserire il risultato nella variabile wholePrice;
		- stampare: "Prezzo pieno: euro" + wholePrice
		- SE age < 18:
			- moltiplicare wholePrice per 0.2 e inserire il risultato nella variabile discountedPrice;
			- stampare: "Il viaggiatore è minorenne: il prezzo scontato del 20% è di euro" + discountedPrice;
			ALTRIMENTI SE age > 65:
				- moltiplicare wholePrice per 0.4 e inserire il risultato nella variabile discountedPrice;
				- stampare: "Il viaggiatore è over-65: il prezzo scontato del 40% è di euro" + discountedPrice;
			FINE SE
		FINE SE
		- stampare: "Non si ha diritto ad alcuno sconto"
	FINE SE
	- stampare: "Uno o entrambi i valori inseriti non sono validi"
*/


// prompt for distance and passenger age
const distance = parseFloat(prompt('Inserire i Km da percorrere:'));
const age = parseInt(prompt('Inserire l\'età del passeggero'));

// calculate whole ticket price and round it to 2 decimals
let wholePrice = distance * 0.21;
wholePrice = Math.round((wholePrice + Number.EPSILON) * 100) / 100;

document.getElementById('distance').innerHTML = distance;
document.getElementById('age').innerHTML = age;
document.getElementById('whole-price').innerHTML = wholePrice;

// if () {

// }





