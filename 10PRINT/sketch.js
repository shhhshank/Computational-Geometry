let offset = 20;

let x = 0;
let y = 0;

let longSound, shortSound;

let prob = 0;
// let toggler = 0;

// function preload() {
//     longSound = loadSound('./audio/long.mp3');
//     shortSound = loadSound('./audio/short.mp3');
// }


function setup() {
    createCanvas(windowWidth, windowHeight);
    background(0, 0, 0)
    frameRate(100)
}

function draw() {
    if (y > windowHeight) {
        return
    }


    prob += 1;

    stroke(255)
    // noFill()
    if (prob % 3 == 0) {
        //longSound.play();
        //if (toggler % 2 == 0) {
        line(x, y, x + offset, y + offset)
        //} else {
        // arc(x, y, offset, offset, 0, PI);
        //}
    } else {
        //shortSound.play();
        //if (toggler % 2 == 0) {
        line(x, y + offset, x + offset, y)
        //} else {
        // arc(x, y, offset, offset, PI, 0);
        //}
    }

    x += offset;

    if (x >= windowWidth) {
        x = 0
        y += offset;
        // toggler += 1
    }


}


