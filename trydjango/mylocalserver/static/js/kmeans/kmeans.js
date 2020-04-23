var size;
var canvas;
var k_cluster = [];

function setup() {
    size = 100;
    canvas = createCanvas(550, 550);
    for (var i = 0; i < size; i++) {
        x = randomGaussian(50, 5);
        y = randomGaussian(50, 5);
        fill(255);
        ellipse(x, y, 3, 3);
    }
}

function draw() {
    background(0);

}