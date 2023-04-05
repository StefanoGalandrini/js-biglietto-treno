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

// declare variable for initial output
let message;

// calculate whole ticket price
let wholePrice = distance * 0.21;

// check that both distance and age are numbers and greater than zero
if (!isNaN(distance) > 0 && !isNaN(age) > 0) {
	document.getElementById('distance').innerHTML = distance;
	document.getElementById('age').innerHTML = age;
	document.getElementById('whole-price').innerHTML = wholePrice;
	if (age < 18) {
		// 20% discount and round to 2 decimals
		discountedPrice = wholePrice * 0.2;
		discountedPrice = Math.round((discountedPrice + Number.EPSILON) * 100) / 100;

	} else if (age > 65) {
		// 40% discount and round to 2 decimals
		discountedPrice = wholePrice * 0.4;
		discountedPrice = Math.round((discountedPrice + Number.EPSILON) * 100) / 100;
	}
} else {
	message = 'Uno o entrambi i valori inseriti non validi';
	document.getElementById('message').innerHTML = message;
}


// display values for check
document.getElementById('distance').innerHTML = distance;
document.getElementById('age').innerHTML = age;
document.getElementById('whole-price').innerHTML = wholePrice;




