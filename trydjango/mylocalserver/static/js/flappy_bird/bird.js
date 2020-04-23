function Bird() {
    this.x = 30;
    this.y = height / 2;

    this.buffer = -10;
    this.velocity = 0;
    this.gravity = 0.3;

    this.show = function () {
        fill(255);
        ellipse(this.x, this.y, 16, 16);
    }

    this.up = function() {
        this.velocity += this.buffer;
    }

    this.update = function () {
        this.velocity += this.gravity;
        this.velocity *= 0.9;
        this.y += this.velocity;

        if (this.y > height) {
            this.y = height
            this.velocity = 0;
        }
        if (this.y < 0) {
            this.y = 0
            this.velocity = 0;
        }
    }

}