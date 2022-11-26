const cardsColor = [
	'red',
	'red',
	'blue',
	'blue',
	'yellow',
	'yellow',
	'green',
	'green',
	'brown',
	'brown',
	'gray',
	'gray',
	'lightgreen',
	'lightgreen',
	'cadetblue',
	'cadetblue',
	'violet',
	'violet',
];
let div = document.querySelectorAll('div');
div = [...div];
const startTime = new Date().getTime();

let activeCard = '';
let activeCards = [];
const gamePairs = div.length / 2;
let gameResult = 0;

const clickCard = (e) => {
	activeCard = e.target;
	if (activeCard == activeCards[0]) {
		return;
	}
	activeCard.classList.remove('hidden');

	//Czy to jedno kliknięcie
	if (activeCards.length == 0) {
		activeCards.push(activeCard);

		return;
	}
	//czy to 2 klikniecie
	else {
		div.forEach((el) => {
			el.removeEventListener('click', clickCard);
		});
		activeCards.push(activeCard);

		setTimeout(function () {
			if (activeCards[0].className == activeCards[1].className) {
				activeCards.forEach((element) => {
					element.classList.add('off');
				});
				gameResult++;

				div = div.filter((card) => !card.classList.contains('off'));
				if (gamePairs == gameResult) {
					const endTime = new Date().getTime();
					alert(
						'Twój wynik to : ' + (endTime - startTime) / 1000 + ' s'
					);
					location.reload();
				}
			} else {
				activeCards.forEach((element) => {
					element.classList.add('hidden');
				});
			}
			activeCards = [];
			div.forEach((el) => {
				el.addEventListener('click', clickCard);
			});
		}, 500);
	}
};

const init = () => {
	div.forEach((el) => {
		//1. Wylosować kolor z tablicy
		let randomNumber = Math.floor(Math.random() * cardsColor.length);
		//2. Przypisać kolor do diva
		el.classList.add(cardsColor[randomNumber]);
		//3. Usunąć lemenet z tablicy
		cardsColor.splice(randomNumber, 1);
	});
	setTimeout(function () {
		div.forEach((el) => {
			el.classList.add('hidden');
			el.addEventListener('click', clickCard);
		});
	}, 2000);
};

init();
