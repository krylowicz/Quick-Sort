let values = [];

let i = 0;
let w = 10;

function setup() {
	createCanvas(800, 200);

	values = new Array(floor(width / w));
	
	for (let i = 0; i < values.length; i++) {
		values[i] = random(height);
	}

	frameRate(5);
	quicksort(values, 0, values.length - 1);
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

	for (let i = 0; i < values.length; i++) {
		stroke(0);
		fill(255);
		rect(i * w, height - values[i], w, values[i]);
	}
}

const swap = (arr, a, b) => {
	let temp = arr[a];
	arr[a] = arr[b];
	arr[b] = temp;
}