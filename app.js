const div = document.querySelectorAll('div');
let counter = 0;
let tempElements = [];

const colors = [
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

const shuffle = () => {
	for (i = colors.length - 1; i > 0; i--) {
		let rand = Math.floor(Math.random() * (i + 1));
		let temp = colors[i];
		colors[i] = colors[rand];
		colors[rand] = temp;
	}
	console.log(colors);

	div.forEach((el) => {
		el.classList.add(colors[0]);

		colors.shift();
	});
};
const hide = () => {
	div.forEach((el) => {
		el.classList.add('hidden');
	});
};
const show = () => {
	div.forEach((el) => {
		el.addEventListener('click', function () {
			tempElements.push(this);

			el.classList.remove('hidden');
			counter++;
			console.log(counter);
			if (counter == 2) {
				counter = 0;
				check();

				return;
			}
		});
	});
};
const hideCards = () => {
	div.forEach((el) => {
		if (!el.classList.contains('off')) {
			el.classList.add('hidden');
		}
	});
};
const check = () => {
	console.log(tempElements);

	if (tempElements[0].className == tempElements[1].className) {
		tempElements[0].classList.add('off');
		tempElements[1].classList.add('off');
	} else {
		setTimeout(hideCards, 1000);
	}
	tempElements = [];
};

shuffle();
setTimeout(hide, 2000);
show();
