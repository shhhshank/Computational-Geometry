let i = 1;

let collatzPath = []

function collatz(n, x, y) {
    if (n == 1) {
        return
    }

    if (n % 2 == 0) {
        let newX = x + (5 * cos(20 * PI / 180))
        let newY = y + (5 * sin(20 * PI / 180))

        collatzPath.push({ x: newX, y: newY })
        collatz(n / 2, newX, newY);
    } else {
        let newX = x + (5 * cos(-20 * PI / 180))
        let newY = y + (5 * sin(-20 * PI / 180))

        collatzPath.push({ x: newX, y: newY })
        collatz((3 * n) + 1, newX, newY);
    }
}

function setup() {
    createCanvas(windowWidth, windowHeight);
    background(0, 0, 0)
}


function draw() {
    if (i == 100) {
        noLoop();
    }

    collatz(i, 0, 0);

    noFill();
    stroke(255, 255, 255, 50);
    strokeWeight(1);
    beginShape();
    for (let i = 0; i < collatzPath.length; i++) {
        const pos = collatzPath[i];
        console.log(pos.x, pos.y)
        curveVertex(pos.x, pos.y);
    }
    endShape();
    i += 1;

}


