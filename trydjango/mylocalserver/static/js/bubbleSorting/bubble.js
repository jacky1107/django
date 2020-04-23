var i = 0;
var j = 0;
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

function swap(indexA, indexB) {
    var temp = sortedArray[indexA];
    sortedArray[indexA] = sortedArray[indexB];
    sortedArray[indexB] = temp;
}

function startFunction() {
    button = true;
}

function array() {
    sortedArray = [];
    for (var k = 0; k < size; k++) {
        sortedArray.push(random(10, 500));
    }
    i = 0;
    j = 0;
}

function setup() {
    size = 30;
    slider = createSlider(10, 100, size);
    slider.parent("#slider");
    slider.center();

    start = select("#start-tag");

    canvas = createCanvas(windowWidth, windowHeight);
    canvas.parent("#array-container");

    selector = select("#bubbleSorting");
    selector.style("background-color", "#eeeeee");
}

function checkSlider() {
    check = true;
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
        var a = sortedArray[j];
        var b = sortedArray[j + 1];
        if (a > b) {
            swap(j, j + 1);
        }
        if (i < sortedArray.length) {
            j = j + 1;
            if (j >= sortedArray.length - i - 1) {
                j = 0;
                i = i + 1;
            }
        } else {
            console.log("Finished");
            button = false;
            i = 0;
            j = 0;
        }
    }
    pre = size;
}