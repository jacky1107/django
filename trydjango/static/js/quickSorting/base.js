var i = 0;
var j = 0;
var button = false;

var div;
var size;
var start;
var canvas;
var sortedArray = [];

function swap(lst, indexA, indexB) {
    var temp = lst[indexA];
    lst[indexA] = lst[indexB];
    lst[indexB] = temp;
}

function startFunction() {
    button = (this.value() == "start");
}

function setup() {
    start = createButton("p", "start");
    start.position(0, 0);

    canvas = createCanvas(windowWidth, windowHeight);
    canvas.parent("#array-container");

    size = 30;
    for (var a = 0; a < size; a++) {
        sortedArray.push(random(10, 500));
    }
}

function draw() {
    background(255);

    var space = size / 5;
    var x = space / 2;
    var w = windowWidth / size;
    for (var index = 0; index < size; index++) {
        fill(100, 130, 255);
        noStroke();
        rect(x, 0, w - space, sortedArray[index]);
        x = w + x;
    }

    start.mousePressed(startFunction);

    if (button) {
        var a = sortedArray[j];
        var b = sortedArray[j + 1];
        if (a > b) {
            swap(sortedArray, j, j + 1);
        }

        if (i < sortedArray.length) {
            j = j + 1;
            if (j >= sortedArray.length - i - 1) {
                j = 0;
                i = i + 1;
            }
        } else {
            console.log("Finished");
            noLoop();
        }
    }
}