const game = new Game();

function preload() {
    game.preload();
}

function setup() {
    createCanvas(899, 522);
    game.setup();
}

function draw() {
    game.draw();
}