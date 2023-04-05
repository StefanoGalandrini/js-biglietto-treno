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

// declare variables for final output
let message = null;
let discountedPrice = null;

// prompt for distance and passenger age
const distance = parseFloat(prompt('Inserire i Km da percorrere:'));
const age = parseInt(prompt('Inserire l\'età del passeggero'));

// check values
document.getElementById('age').innerHTML = age;
document.getElementById('distance').innerHTML = distance;

// calculate whole price = € 0,21 / Km
let wholePrice = distance * 0.21;

if (isNaN(distance) || isNaN(age)) {
	message = 'Uno o entrambi i valori inseriti non sono validi!';
	document.getElementById('message').innerHTML = message;
} else if (distance <= 0 || age <= 0) {
	message = 'I dati inseriti devono essere maggiori di zero!';
	document.getElementById('message').innerHTML = message;
} else if (age < 18) {
	// 20% discount and round to 2 decimals
	discountedPrice = wholePrice - (wholePrice * 0.2);
	discountedPrice = Math.round((discountedPrice + Number.EPSILON) * 100) / 100;
	wholePrice = Math.round((wholePrice + Number.EPSILON) * 100) / 100;

	const defPrice1 = `Il prezzo del biglietto è di € ${wholePrice}`;
	const defPrice2 = `Lo sconto applicato è del 20%`;
	const defPrice3 = `Il prezzo scontato del biglietto è di € ${discountedPrice}`;

	document.getElementById('def-price1').innerHTML = defPrice1;
	document.getElementById('def-price2').innerHTML = defPrice2;
	document.getElementById('def-price3').innerHTML = defPrice3;

} else if (age > 65) {
	// 40% discount and round to 2 decimals
	discountedPrice = wholePrice - (wholePrice * 0.4);
	discountedPrice = Math.round((discountedPrice + Number.EPSILON) * 100) / 100;
	wholePrice = Math.round((wholePrice + Number.EPSILON) * 100) / 100;

	const defPrice1 = `Il prezzo del biglietto è di € ${wholePrice}`;
	const defPrice2 = `Lo sconto applicato è del 40%`;
	const defPrice3 = `Il prezzo scontato del biglietto è di € ${discountedPrice}`;

	document.getElementById('def-price1').innerHTML = defPrice1;
	document.getElementById('def-price2').innerHTML = defPrice2;
	document.getElementById('def-price3').innerHTML = defPrice3;

} else {
	wholePrice = Math.round((wholePrice + Number.EPSILON) * 100) / 100;

	const defPrice1 = ``;
	const defPrice2 = `Non si ha diritto a sconti`;
	const defPrice3 = `Il prezzo del biglietto è di € ${wholePrice}`;

	document.getElementById('def-price1').innerHTML = defPrice1;
	document.getElementById('def-price2').innerHTML = defPrice2;
	document.getElementById('def-price3').innerHTML = defPrice3;
}
