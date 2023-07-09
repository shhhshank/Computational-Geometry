const points = []
const hull = []

let leftMost;
let currentVertex;
let nextVertex;
let index = 0;



function setup() {
    createCanvas(windowWidth, windowHeight);
    background(0, 0, 0)
    for (let i = 0; i < 20; i++) {
        points.push(createVector(random(windowWidth), random(windowHeight)))
    }

    points.sort((a, b) => a.x - b.x)
    leftMost = points[0]
    currentVertex = leftMost
    hull.push(currentVertex);
    nextVertex = points[1]
    index = 2
}

function draw() {
    background(0);

    stroke(255);
    strokeWeight(8);

    for (let p of points) {
        point(p.x, p.y)
    }

    stroke(0, 0, 255);
    fill(0, 0, 255, 50);
    beginShape();
    for (let p of hull) {
        vertex(p.x, p.y);
    }
    endShape();

    stroke(255, 0, 0)
    strokeWeight(12)
    point(leftMost.x, leftMost.y)

    stroke(0, 255, 0)
    strokeWeight(5)
    line(currentVertex.x, currentVertex.y, nextVertex.x, nextVertex.y)

    const checking = points[index];

    stroke(255)
    strokeWeight(5)
    line(currentVertex.x, currentVertex.y, checking.x, checking.y)

    const a = p5.Vector.sub(nextVertex, currentVertex);
    const b = p5.Vector.sub(checking, currentVertex);
    const cross = a.cross(b);

    if (cross.z < 0) {
        nextVertex = checking
    }

    index += 1

    if (index == points.length) {
        if (nextVertex == leftMost) {
            console.log('done');
            noLoop();
        } else {
            hull.push(nextVertex);
            currentVertex = nextVertex;
            index = 0;
            nextVertex = leftMost;
        }
    }
}


