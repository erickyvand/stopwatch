let seconds = 0;
let minutes = 0;
let hours = 0;

let displaySeconds = 0;
let displayMinutes = 0;
let displayHours = 0;

let intervall = null;
let isStarted = false;

/**
 * Handle stopwatch
 */
const stopWatch = () => {
	seconds++;

	if (seconds / 60 === 1) {
		seconds = 0;
		minutes++;

		if (minutes / 60 === 1) {
			minutes = 0;
			hours++;
		}
	}

	if (seconds < 10) {
		displaySeconds = `0${seconds.toString()}`;
	} else {
		displaySeconds = seconds;
	}

	if (minutes < 10) {
		displayMinutes = `0${minutes.toString()}`;
	} else {
		displayMinutes = minutes;
	}

	if (hours < 10) {
		displayHours = `0${hours.toString()}`;
	} else {
		displayHours = hours;
	}

	document.querySelector(
		'#display'
	).innerHTML = `${displayHours}:${displayMinutes}:${displaySeconds}`;
};

/**
 * Start the timer
 */
const start = () => {
	if (!isStarted) {
		intervall = window.setInterval(stopWatch, 1000);
		document.querySelector('#start').innerHTML = 'Start';
		document.querySelector('#start').style.backgroundColor = '#63888f';
		document.querySelector('#stop').style.backgroundColor = '';
		document.querySelector('#reset').style.backgroundColor = '';
		isStarted = true;
	}
};

/**
 * Stop the timer
 */
const stop = () => {
	if (isStarted) {
		window.clearInterval(intervall);
		document.querySelector('#start').innerHTML = 'Resume';
		document.querySelector('#stop').style.backgroundColor = '#63888f';
		document.querySelector('#start').style.backgroundColor = '';
		document.querySelector('#reset').style.backgroundColor = '';
		isStarted = false;
	}
};

/**
 * Reset the timer
 */
const reset = () => {
	if (isStarted || !isStarted) {
		window.clearInterval(intervall);
		seconds = 0;
		minutes = 0;
		hours = 0;

		document.querySelector('#start').innerHTML = 'Start';
		document.querySelector('#display').innerHTML = '00:00:00';
		document.querySelector('#start').style.backgroundColor = '';
		document.querySelector('#stop').style.backgroundColor = '';
		isStarted = false;
	}
};
