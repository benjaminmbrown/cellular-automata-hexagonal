var cellularAutomata = [];
var GOL;

function setup() {

    createCanvas(600, 500);
    setFrameRate(10);
    GOL = new GameOfLife();
  //  GOL.init();
}

function draw() {
    background(255);
    GOL.generate();
    GOL.display();
}

function mouseDragged() {

}

function mousePressed(){
    GOL.init();
}

function keyPressed() {
  



}
