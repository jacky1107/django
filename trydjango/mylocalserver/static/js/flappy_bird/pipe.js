function Pipe() {
    this.x = width;

    this.buffer = 100;
    this.space = random(height / 4);
    this.space = height / 2 + this.space;

    this.w = 30;
    this.h = this.space - this.buffer;
    this.y = this.h + 2 * this.buffer;
    this.speed = 5;

    this.hightlight = false;

    this.show = function () {
        fill(255);
        if (this.hightlight) {
            fill(255, 0, 0);
        }
        rect(this.x, 0, this.w, this.h);
        rect(this.x, this.y, this.w, height - this.y);
    }

    this.update = function () {
        this.x -= this.speed;
    }

    this.offscreen = function () {
        return this.x < -this.w;
    }

    this.hits = function (bird) {
        if (bird.y < this.h || bird.y > this.y) {
            this.hightlight = false;
            if (bird.x < this.x + this.w && bird.x > this.x) {
                this.hightlight = true;
            }
        }
        return this.hightlight;
    }
}