var i;
var j;
var check = false;
var button = false;

var pre;
var size;
var buffer = 300;

var div;
var start;
var slider;
var canvas;
var selector;
var sortedArray;


function startFunction() {
    button = true;
}

function checkSlider() {
    check = true;
}

function array() {
    sortedArray = [];
    for (var k = 0; k < size; k++) {
        sortedArray.push(random(10, 500));
    }
    i = 0;
    j = sortedArray.length - 1;
}

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

async function swap(arr, indexA, indexB) {
    await sleep(10);

    var temp = arr[indexA];
    arr[indexA] = arr[indexB];
    arr[indexB] = temp;
}

async function quickSort(arr, start, end) {
    if (start >= end) {
        return;
    }
    let index = await partition(arr, start, end);
    await Promise.all([
        quickSort(arr, start, index - 1),
        quickSort(arr, index + 1, end)
    ]);
}

async function partition(arr, start, end) {
    let pivotIndex = start;
    let pivotValue = sortedArray[end];
    for (var i = start; i < end; i++) {
        if (sortedArray[i] < pivotValue) {
            await swap(arr, i, pivotIndex);
            pivotIndex++;
        }
    }
    await swap(arr, pivotIndex, end);
    return pivotIndex;
}

function setup() {
    size = 30;
    slider = createSlider(10, 100, size);
    slider.parent("#slider");
    slider.center();

    start = select("#start-tag");

    canvas = createCanvas(windowWidth, windowHeight);
    canvas.parent("#array-container");

    selector = select("#quickSorting");
    selector.style("background-color", "#eeeeee");
}


function draw() {
    background(255);

    size = slider.value();
    if (size != pre) {
        array();
        check = false;
        button = false;
    }

    var x = buffer;
    var w = (windowWidth - 2 * buffer) / size;
    var space = w / 4;
    for (var index = 0; index < size; index++) {
        fill(100, 130, 255);
        noStroke();
        rect(x + space, 0, w - space, sortedArray[index]);
        x = w + x;
    }

    start.mousePressed(startFunction);
    if (button) {
        quickSort(sortedArray, i, j);
        button = false;
    }
    pre = size;
}