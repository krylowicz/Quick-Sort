let values = [];
let backup = [];
const swaps = [];

let i = 0;
let w = 5;
let swapIndex = 0;
let sorted = false;

class Swap {
	constructor(a, b) {
		this.a = a;
		this.b = b;
	}
}

function setup() {
	createCanvas(800, 200);

	values = new Array(floor(width / w));
	
	for (let i = 0; i < values.length; i++) {
		values[i] = random(height);
	}

	backup = values.slice(0);

	quicksort(values, 0, values.length - 1);
	sorted = true;
}

const quicksort = (arr, start, end) => {
	if (start >= end) {
		return;
	}

	let index = partition(arr, start, end);
	quicksort(arr, start, index - 1);
	quicksort(arr, index + 1, end);
}

const partition = (arr, start, end) => {
	let pivotIndex = start;
	let pivotValue = arr[end];
	
	for (let i = start; i < end; i++) {
		if (arr[i] < pivotValue) {
			swap(arr, i, pivotIndex);
			pivotIndex++
		}
	}
	swap(arr, pivotIndex, end);
	return pivotIndex;
}


function draw() {
	background(51);
	
	if (swapIndex < swaps.length) {
		const sw = swaps[swapIndex];
		swap(backup, sw.a, sw.b);
		swapIndex++;
	} else {
		noLoop();
		console.log('finished');
	}

	for (let i = 0; i < backup.length; i++) {
		stroke(0);
		fill(255);
		rect(i * w, height - backup[i], w, backup[i]);
	}
}

const swap = (arr, a, b) => {

	const swap = new Swap(a, b);

	if (!sorted) {
		swaps.push(swap);
	}

	let temp = arr[a];
	arr[a] = arr[b];
	arr[b] = temp;
}