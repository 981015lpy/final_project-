var bubbleArray = [];
var c1, c2;

function Bubble(xloc, yloc, zloc, rise, rad) {
    this.xloc = xloc;
    this.yloc = yloc;
    this.zloc = zloc;
    this.rad = rad;
    this.rise = rise;
}

function CreateBubbles(howManyBubbles) {
    var count = howManyBubbles;
    for (i = 0; i < count; i++) {
        var x = random(0, 640);
        var y = random(0, 480);
        var z = random(0.3, 0.7);
        var r = map(z, 0.3, 0.7, 7, 25);
        var rise = map(z, 0.3, 0.7, 0.7, 1.7);
        var b = new Bubble(x, y, z, rise, r);
        bubbleArray.push(b);
    }
}

function Show() {
    for (i = 0; i < bubbleArray.length; i++) {
        var x = bubbleArray[i].xloc;
        var y = bubbleArray[i].yloc;
        var z = bubbleArray[i].zloc;
        var r = bubbleArray[i].rad;
        fill(255, 255, 255, z);
        ellipse(x, y, r, r);
    }
}

function Rise() {
    for (i = 0; i < bubbleArray.length; i++) {
        var x = bubbleArray[i].rise;
        bubbleArray[i].yloc -= x;
        var zmin = bubbleArray[i].zloc * -1.5;
        var zmax = bubbleArray[i].zloc * 1.5;
        var slowy = bubbleArray[i].yloc * .08;
        bubbleArray[i].xloc += map(cos(slowy), -1, 1, zmin, zmax)
    }
}

function Edges() {
    for (i = 0; i < bubbleArray.length; i++) {
        if (bubbleArray[i].yloc < -10) {
            bubbleArray[i].yloc = 480 + 20;
            bubbleArray[i].xloc = random(0, 640);
        }
    }
}

function setGradient(x, y, w, h, c1, c2) {
    noFill();
    for (var i = y; i <= y + 480; i++) {
        var inter = map(i, y, y + 480, 0, 1);
        var c = lerpColor(c1, c2, inter - 0.35);
        stroke(c);
        line(x, i, x + 640, i);
    }
}

function setup() {

    createCanvas(640, 480);
    noStroke();
    CreateBubbles(200);
}

function back() {
    c1 = color(171, 252, 171, 1);
    c2 = color(3, 97, 176, .2);
    colorMode(RGB, 255, 255, 255, 1);
    setGradient(0, 0, 640, 480, c1, c2);
    stroke(158, 219, 155);
    strokeWeight(1);
    noFill();
    Show();
    Rise();
    Edges();
    drawbow();
}
var j = 0;

function draw() {
    var i = 0;
    var m = millis();
    var s1 = millis() / 1000;
    back();
    if (s1 > 2.5)
        i = (parseInt)(s1 / 2.5);
    s = s1 - 2.5 * i;

    if (640 - s * 1000 >= 260) //0.38
    {
        back();
        drawwing1();
        drawarrow(640 - s * 1000);
    } else if (s < 0.4) {
        back();
        drawwing1();
        drawarrow(260);
    } else if (240 + s * 50 <= 330) //1.8
    {
        back();
        drawwing2(325 + s * 50);
        drawarrow(240 + s * 50);
    } else if (s <= 1.9) {
        back();
        drawwing2(415);
        drawarrow(330);
    } else if (5080 - s * 2500 >= 0) //2.165
    {
        back();
        drawwing3(s);
        drawarrow(5080 - s * 2500);
    } else if (s <= 2.5) {
        back();
        drawwing1();
    }
}

function drawwing1() {

    stroke(93, 76, 92);
    strokeWeight(1);
    noFill();
    line(350, 100, 350, 300);
}

function drawwing2(x) {

    stroke(93, 76, 92);
    strokeWeight(1);
    noFill();
    line(350, 100, x, 200);
    line(350, 300, x, 200);
}

function drawwing3(x) {

    stroke(93, 76, 92);
    strokeWeight(1);
    noFill();
    if (x < 1.95)
        bezier(350, 100, 330, 150, 330, 250, 350, 300);
    else if (x < 2)
        bezier(350, 100, 370, 150, 370, 250, 350, 300);
    else if (x < 2.05)
        bezier(350, 100, 340, 150, 340, 250, 350, 300);
    else if (x < 2.1)
        bezier(350, 100, 360, 150, 360, 250, 350, 300);
    else
        line(350, 100, 350, 300);
}

function drawbow() {
    stroke(220, 101, 107);
    strokeWeight(7);
    noFill();
    bezier(360, 80, 360, 120, 270, 90, 270, 200);
    bezier(360, 320, 360, 280, 270, 310, 270, 200);
    stroke(157, 52, 57);
    strokeWeight(10);
    line(270, 185, 270, 215);
}

function drawarrow(x) {
    strokeWeight(0);
    fill(112, 210, 167);
    beginShape();
    vertex(x + 70, 200);
    vertex(x + 80, 190);
    vertex(x + 100, 190);
    vertex(x + 90, 200);
    endShape(CLOSE);

    beginShape();
    vertex(x + 70, 200);
    vertex(x + 80, 210);
    vertex(x + 100, 210);
    vertex(x + 90, 200);
    endShape(CLOSE);

    stroke(68, 90, 69);
    strokeWeight(3);
    line(x - 70, 200, x + 88, 200);
    strokeWeight(0);
    fill(112, 210, 167);
    beginShape();
    vertex(x - 80, 200);
    vertex(x - 60, 190);
    vertex(x - 65, 200);
    vertex(x - 60, 210);
    endShape(CLOSE);



}