var bird;
var pipe = [];

function setup() {
    createCanvas(600, 600);
    bird = new Bird();
    pipe.push(new Pipe());
}


function draw() {
    background(0);
    bird.show();
    bird.update();

    if (frameCount % 80 == 0) {
        pipe.push(new Pipe());
    }

    for (var i = pipe.length - 1; i >= 0; i--) {
        pipe[i].show();
        pipe[i].update();

        if (pipe[i].hits(bird)) {
            console.log("GAME OVER");
        }

        if (pipe[i].offscreen()) {
            pipe.splice(i, 1);
        }
    }
}

function keyPressed() {
    if (key == " ") {
        bird.up();
    }
}