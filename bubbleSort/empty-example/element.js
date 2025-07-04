class Element {
    constructor(x, c, h) {
        this.x = x;
        this.c = c;
        this.h = h;
    }

    display() {
        fill(this.c, 100, 100);
        rect(this.x, height-this.h, wsize, this.h);
    }
}