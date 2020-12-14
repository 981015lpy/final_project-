let animationNumber = 1
let img
let width = window.innerWidth
let height = window.innerHeight

let snowflakes = [];
let start_div1;

let startTag1 = true
let startTag2 = true
let startTag3 = true
let startTag4 = true
let startTag5 = true
let startTag6 = true
let startTag7 = true

// jn1
let j1 = []
let j1Bool = false
let a = 0

// jn2
let j2 = []
let j2Bool = false
let b = 0

// jn3
let j3 = []
let j3Bool = false
let c = 0


// song
let song
let song1
let song2
let song3
let songover

// person
let mester1 = false
let mester2 = false
let mester3 = false

// game over
let g4

// page one
let speed = 5
let p1_x = 0
let p1_y = 400
let p2_x = width/2-100
let p2_y = 0
let p3_x = width
let p3_y = 400

let fireworks = []

function initPageOne(){
	p1_x = 0
	p1_y = 400
	p2_x = width/2-100
	p2_y = 0
	p3_x = width
	p3_y = 400	
}

function preload() {
	for(let i = 0;i<14;i++){
		j1.push(loadImage("http://127.0.0.1:8848/p5test/j1/"+i+".png"))
	}
	
	for(let i = 0;i<11;i++){
		j2.push(loadImage("http://127.0.0.1:8848/p5test/j2/"+i+".png"))
	}
	
	for(let i = 0;i<10;i++){
		j3.push(loadImage("http://127.0.0.1:8848/p5test/j3/"+i+".png"))
	}
	img1 = loadImage("http://127.0.0.1:8848/game/mygame/img/bg1.jpg")
	img2 = loadImage("http://127.0.0.1:8848/game/mygame/img/bg2.jpg")
	img3 = loadImage("http://127.0.0.1:8848/game/mygame/img/bg3.jpg")
	img4 = loadImage("http://127.0.0.1:8848/game/mygame/img/bg4.jpg")
	img5 = loadImage("http://127.0.0.1:8848/game/mygame/img/bg5.jpg")
	img6 = loadImage("http://127.0.0.1:8848/game/mygame/img/bg6.jpg")
	img7 = loadImage("http://127.0.0.1:8848/game/mygame/img/bg7.jpg")
	p1 = loadImage("http://127.0.0.1:8848/game/mygame/img/p1.png")
	p2 = loadImage("http://127.0.0.1:8848/game/mygame/img/p2.png")
	p3 = loadImage("http://127.0.0.1:8848/game/mygame/img/p3.png")
	boos1 = loadImage("http://127.0.0.1:8848/game/mygame/img/boos1.gif")
	boos2 = loadImage("http://127.0.0.1:8848/game/mygame/img/boos2.gif")
	boos3 = loadImage("http://127.0.0.1:8848/game/mygame/img/boos3.gif")
	song = loadSound('http://127.0.0.1:8848/game/mygame/sound/ancient_times_heart.mp3')
	song1 = loadSound('http://127.0.0.1:8848/game/mygame/sound/boos1.mp3')
	song2 = loadSound('http://127.0.0.1:8848/game/mygame/sound/boos2.mp3')
	song3 = loadSound('http://127.0.0.1:8848/game/mygame/sound/boos3.mp3')
	songover = loadSound('http://127.0.0.1:8848/game/mygame/sound/通关.mp3')
	g4 = loadImage("http://127.0.0.1:8848/game/mygame/img/g4.GIF")
}

function setup() {
	let mycanvas = createCanvas(width, height)
	textSize(50)
	fill(255, 255, 255)
	frameRate(50);
	// imageMode(CENTER);
	noStroke();
}

function draw() {
	background(100, 100, 100);
	updateDraw()
	jn1()
	jn2()
	jn3()
	fill("rgba(255,255,255,0.5)")
	ellipse(mouseX,mouseY,50,50);
}

function gameUp(){
	for (var i = 0; i < fireworks.length; i++) {
		fireworks[i].display();
		fireworks[i].update();
		if (fireworks[i].needRemove()) {
			fireworks.splice(i, 1);
		}
	}
}

function PageOneAnimation(){
	p1_x = p1_x + speed
	if(p1_x >= 400){
		p1_x = 400
	}
	image(p1,p1_x,p1_y,200,200)
	
	if(p1_x == 400){
		p2_y = p2_y + speed
		if(p2_y >= 400){
			p2_y = 400
		}
		image(p2,p2_x,p2_y,200,200)		
	}
	if(p2_y == 400){
		p3_x = p3_x - speed
		if(p3_x <= 1300){
			p3_x = 1300
		}
		image(p3,p3_x,p3_y,200,200)
	}
}


function updateJn(){
	if(mester1){
		j1Bool = true
	}else if(mester2){
		j2Bool = true
	}else if(mester3){
		j3Bool = true
	}
}

function jn1(){
	if(j1Bool == true){		
		if(a < 32){
			a++
		}else{
			a = 0
			j1Bool = false
		}
		if(a == 2){
			image(j1[0],width / 2- 250, 100,500,500)
		}else if(a == 4){
			image(j1[1],width / 2- 250, 100,500,500)
		}else if(a == 6){
			image(j1[2],width / 2- 250, 100,500,500)
		}else if(a == 8){
			image(j1[3],width / 2- 250, 100,500,500)
		}else if(a == 10){
			image(j1[4],width / 2- 250, 100,500,500)
		}else if(a == 12){
			image(j1[5],width / 2- 250, 100,500,500)
		}else if(a == 14){
			image(j1[6],width / 2- 250, 100,500,500)
		}else if(a == 16){
			image(j1[7],width / 2- 250, 100,500,500)
		}else if(a == 18){
			image(j1[8],width / 2- 250, 100,500,500)
		}else if(a == 20){
			image(j1[9],width / 2- 250, 100,500,500)
		}else if(a == 22){
			image(j1[10],width / 2- 250, 100,500,500)
		}else if(a == 24){
			image(j1[11],width / 2- 250, 100,500,500)
		}else if(a == 26){
			image(j1[12],width / 2- 250, 100,500,500)
		}else if(a == 28){
			image(j1[13],width / 2- 250, 100,500,500)
		}
	}
}


function jn2(){
	if(j2Bool == true){		
		if(b < 32){
			b++
		}else{
			b = 0
			j2Bool = false
		}
		if(b == 2){
			image(j2[0],width / 2- 250, 100,500,500)
		}else if(b == 4){
			image(j2[1],width / 2- 250, 100,500,500)
		}else if(b == 6){
			image(j2[2],width / 2- 250, 100,500,500)
		}else if(b == 8){
			image(j2[3],width / 2- 250, 100,500,500)
		}else if(b == 10){
			image(j2[4],width / 2- 250, 100,500,500)
		}else if(b == 12){
			image(j2[5],width / 2- 250, 100,500,500)
		}else if(b == 14){
			image(j2[6],width / 2- 250, 100,500,500)
		}else if(b == 16){
			image(j2[7],width / 2- 250, 100,500,500)
		}else if(b == 18){
			image(j2[8],width / 2- 250, 100,500,500)
		}else if(b == 20){
			image(j2[9],width / 2- 250, 100,500,500)
		}else if(b == 22){
			image(j2[10],width / 2- 250, 100,500,500)
		}
	}
}

function jn3(){
	if(j3Bool == true){		
		if(c < 32){
			c++
		}else{
			c = 0
			j3Bool = false
		}
		if(c == 2){
			image(j3[0],width / 2- 250, 100,500,500)
		}else if(c == 4){
			image(j3[1],width / 2- 250, 100,500,500)
		}else if(c == 6){
			image(j3[2],width / 2- 250, 100,500,500)
		}else if(c == 8){
			image(j3[3],width / 2- 250, 100,500,500)
		}else if(c == 10){
			image(j3[4],width / 2- 250, 100,500,500)
		}else if(c == 12){
			image(j3[5],width / 2- 250, 100,500,500)
		}else if(c == 14){
			image(j3[6],width / 2- 250, 100,500,500)
		}else if(c == 16){
			image(j3[7],width / 2- 250, 100,500,500)
		}else if(c == 18){
			image(j3[8],width / 2- 250, 100,500,500)
		}else if(c == 20){
			image(j3[9],width / 2- 250, 100,500,500)
		}
	}
}


function Tx1(){
	let t = frameCount / 60; // update time
	// create a random number of snowflakes each frame
	for (let i = 0; i < random(5); i++) {
		snowflakes.push(new snowflake()); // append snowflake object
	}
	// loop through snowflakes with a for..of loop
	for (let flake of snowflakes) {
		flake.update(t); // update snowflake position
		flake.display(); // draw snowflake
	}
}

function AnimationFirstPage(){
	
}

// game main
function updateDraw() {
	if (animationNumber == 1) {
		image(img1, 0, 0, width, height)
		Tx1()
		PageOneAnimation()
		if(startTag1 == true){
			clearDiv()
			start1()
			songover.stop()
			song.loop()
		}
		startTag1 = false
	} else if (animationNumber == 2) {
		image(img2, 0, 0, width, height)
		image(p1, width / 2 - 500, 300, 300, 400)
		image(p2, width / 2 - 200, 300, 300, 400)
		image(p3, width / 2 + 100, 300, 300, 400)
		if(startTag2 == true){
			clearDiv()
			start2()
		}
		startTag2 = false
	} else if (animationNumber == 3) {
		image(img3, 0, 0, width, height)
		image(boos1, width / 2 - 200, 100, 400, 400)
		if(startTag3 == true){
			clearDiv()
			start3()	
			song.stop()
			song1.loop()
		}
		startTag3 = false
	} else if (animationNumber == 4) {
		image(img4, 0, 0, width, height)
		image(boos2, width / 2 - 200, 100, 400, 400)
		if(startTag4 == true){
			clearDiv()
			start4()	
			song1.stop()
			song2.loop()
		}
		startTag4 = false
	} else if (animationNumber == 5) {
		image(img5, 0, 0, width, height)
		image(boos3, width / 2 - 200, 100, 400, 400)
		if(startTag5 == true){
			clearDiv()
			start5()
			song2.stop()
			song3.loop()
		}
		
		startTag5 = false
	} else if (animationNumber == 6) {
		image(img6, 0, 0, width, height)
		gameUp()
		if(startTag6 == true){
			clearDiv()
			start6()
			song.stop()
			song1.stop()
			song2.stop()
			song3.stop()
			songover.loop()
		}
		startTag6 = false
	} else if (animationNumber == 7) {
		image(img7, 0, 0, width, height)
		if(mester1){
			image(p1,width/2-250, height/2-250, 500, 500)
		}else if(mester2){
			image(p2,width/2-250, height/2-250, 500, 500)
		}else if(mester3){
			image(p3,width/2-250, height/2-250, 500, 500)
		}
		image(g4, width/2-250, height/2-250, 500, 500)
		Tx1()
		if(startTag7 == true){
			clearDiv()
			start7()
			song.stop()
			song1.stop()
			song2.stop()
			song3.stop()
			songover.loop()
		}
		startTag7 = false
	}
}

function start1() {
	mester1 = false
	mester2 = false
	mester3 = false
	createTitle("Please click to start your journey")
	startBtn("start Game", height - 200)
}

function start2() {
	createTitle("Please choose a person you like")
	PDiv1()
	PDiv2()
	PDiv3()
}


function start3() {
	MessageBox("Who was the longest reigning emperor of the Ming Dynasty?")
	Btn1("Emperor Wanli")
	Btn2("Zhu Yuanzhang")
}

function start4() {
	
	MessageBox("What is wrong about Herodotus?")
	Btn1("Ancient Greek writers")
	Btn2("Don't like traveling")
}

function start5() {
	
	MessageBox("Is India the most populous country in the world?")
	Btn1("No")
	Btn2("Yes")
}

function start6() {
	
	// image(boos1,width/2-200,100,400,400)
	gMessageBox("Congratulations on your success")
	backPageOne("From the beginning")
}

function start7() {
	
	// image(boos1,width/2-200,100,400,400)
	gMessageBox("Game Over")
	backPageOne("From the beginning")
}

function startBtn(BtnTitle, Y) {
	start_div1 = createDiv(BtnTitle)
	start_div1.style("font-size", "24px")
	start_div1.style("color", "white")
	start_div1.style("width", "200px")
	start_div1.style("height", "100px")
	start_div1.style("line-height", "100px")
	start_div1.style("background-color", "rgb(76, 60, 255)")
	start_div1.style("text-align", "center")
	start_div1.style("border-radius", "5px")
	start_div1.style("cursor", "pointer")
	start_div1.position((width / 2) - 100, Y)
	start_div1.style("transition", "all 1s")
	start_div1.mouseOver(function() {
		start_div1.style("color", "red")
		start_div1.style("background-color", "green")
	})
	start_div1.mouseOut(function() {
		start_div1.style("color", "white")
		start_div1.style("background-color", "rgb(76, 60, 255)")
	})
	// console.log(start_div1)
	start_div1.mouseClicked(function() {
		animationNumber = 2
		startTag2 = true
	})

	return start_div1
}

function createTitle(title) {
	let start_div1 = createDiv(title)
	start_div1.style("font-size", "24px")
	start_div1.style("color", "red")
	start_div1.style("width", "500px")
	start_div1.style("height", "100px")
	start_div1.style("line-height", "100px")
	start_div1.style("background-color", "rgba(255,255,255,0.5)")
	start_div1.style("text-align", "center")
	start_div1.style("border-radius", "5px")
	start_div1.position((width / 2) - 250, 100)
	return start_div1
}


function clearDiv() {
	let div = document.querySelectorAll("div")
	for (let d of div) {
		d.style.display = "none"
	}
}

function PDiv1() {
	let start_div1 = createDiv("Ice devil master")
	start_div1.style("font-size", "24px")
	start_div1.style("color", "rgba(0,0,0,0)")
	start_div1.style("width", "300px")
	start_div1.style("height", "400px")
	start_div1.style("line-height", "400px")
	start_div1.style("background-color", "rgba(255,255,255,0)")
	start_div1.style("text-align", "center")
	start_div1.style("cursor", "pointer")
	start_div1.position(width / 2 - 500, 300)
	start_div1.style("transition", "all 1s")
	start_div1.mouseOver(function() {
		start_div1.style("background-color", "rgba(0,0,0,0.5)")
		start_div1.style("color", "rgba(255,255,255,0.8)")
	})
	start_div1.mouseOut(function() {
		start_div1.style("background-color", "rgba(255,255,255,0)")
		start_div1.style("color", "rgba(255,255,255,0)")
	})
	// console.log(start_div1)
	start_div1.mouseClicked(function() {
		animationNumber = 3
		startTag3 = true
		mester1 = true
	})

	return start_div1
}

function PDiv2() {
	let start_div1 = createDiv("Electric magic master")
	start_div1.style("font-size", "24px")
	start_div1.style("color", "rgba(0,0,0,0)")
	start_div1.style("width", "300px")
	start_div1.style("height", "400px")
	start_div1.style("line-height", "400px")
	start_div1.style("background-color", "rgba(255,255,255,0)")
	start_div1.style("text-align", "center")
	start_div1.style("cursor", "pointer")
	start_div1.position(width / 2 - 200, 300)
	start_div1.style("transition", "all 1s")
	start_div1.mouseOver(function() {
		start_div1.style("background-color", "rgba(0,0,0,0.5)")
		start_div1.style("color", "rgba(255,255,255,0.8)")
	})
	start_div1.mouseOut(function() {
		start_div1.style("background-color", "rgba(255,255,255,0)")
		start_div1.style("color", "rgba(255,255,255,0)")
	})
	// console.log(start_div1)
	start_div1.mouseClicked(function() {
		animationNumber = 3
		startTag3 = true
		mester2 = true
	})

	return start_div1
}

function PDiv3() {
	let start_div1 = createDiv("Fire master")
	start_div1.style("font-size", "24px")
	start_div1.style("color", "rgba(0,0,0,0)")
	start_div1.style("width", "300px")
	start_div1.style("height", "400px")
	start_div1.style("line-height", "400px")
	start_div1.style("background-color", "rgba(255,255,255,0)")
	start_div1.style("text-align", "center")
	start_div1.style("cursor", "pointer")
	start_div1.position(width / 2 + 100, 300)
	start_div1.style("transition", "all 1s")
	start_div1.mouseOver(function() {
		start_div1.style("background-color", "rgba(0,0,0,0.5)")
		start_div1.style("color", "rgba(255,255,255,0.8)")
	})
	start_div1.mouseOut(function() {
		start_div1.style("background-color", "rgba(255,255,255,0)")
		start_div1.style("color", "rgba(255,255,255,0)")
	})
	// console.log(start_div1)
	start_div1.mouseClicked(function() {
		animationNumber = 3
		startTag3 = true
		mester3 = true
	})

	return start_div1
}



function Boos1() {
	let start_div1 = createDiv("Dark mage")
	start_div1.style("font-size", "24px")
	start_div1.style("color", "rgba(0,0,0,0)")
	start_div1.style("width", "200px")
	start_div1.style("height", "200px")
	start_div1.style("line-height", "200px")
	start_div1.style("background-color", "rgba(255,255,255,0)")
	start_div1.style("text-align", "center")
	start_div1.style("cursor", "pointer")
	start_div1.position(width / 2 + 200, 300)
	start_div1.style("transition", "all 1s")
	start_div1.mouseOver(function() {
		start_div1.style("background-color", "rgba(0,0,0,0.5)")
		start_div1.style("color", "rgba(255,255,255,0.8)")
	})
	start_div1.mouseOut(function() {
		start_div1.style("background-color", "rgba(255,255,255,0)")
		start_div1.style("color", "rgba(255,255,255,0)")
	})
	// console.log(start_div1)
	start_div1.mouseClicked(function() {
		animationNumber = 3
		redraw()
	})

	return start_div1
}

function MessageBox(title) {
	let start_div1 = createDiv(title)
	start_div1.style("font-size", "24px")
	start_div1.style("color", "white")
	start_div1.style("width", "1000px")
	start_div1.style("height", "100px")
	start_div1.style("line-height", "100px")
	start_div1.style("background-color", "rgba(0,0,0,0.3)")
	start_div1.style("text-align", "center")
	start_div1.style("border-radius", "5px")
	start_div1.position((width / 2) - 500, height - 400)
	return start_div1
}

function gMessageBox(title) {
	let start_div1 = createDiv(title)
	start_div1.style("font-size", "24px")
	start_div1.style("color", "white")
	start_div1.style("width", "1000px")
	start_div1.style("height", "100px")
	start_div1.style("line-height", "100px")
	start_div1.style("background-color", "rgba(0,0,0,0.3)")
	start_div1.style("text-align", "center")
	start_div1.style("border-radius", "5px")
	start_div1.position((width / 2) - 500, height - 600)
	return start_div1
}

function Btn1(title) {
	let start_div1 = createDiv(title)
	start_div1.style("font-size", "24px")
	start_div1.style("color", "white")
	start_div1.style("width", "400px")
	start_div1.style("height", "100px")
	start_div1.style("line-height", "100px")
	start_div1.style("background-color", "rgba(255,0,0,0.3)")
	start_div1.style("text-align", "center")
	start_div1.style("border-radius", "5px")
	start_div1.style("cursor", "pointer")
	start_div1.position((width / 2) - 800, height - 200)
	if (animationNumber == 3) {
		start_div1.mouseClicked(function() {
			updateJn()
			setTimeout(function(){
				animationNumber = 4
				startTag4 = true
			},2000)
			
		})
	} else if (animationNumber == 5) {
		start_div1.mouseClicked(function() {
			updateJn()
			setTimeout(function(){
				animationNumber = 6
				startTag6 = true				
			},2000)
		})
	} else if (animationNumber == 4) {
		start_div1.mouseClicked(function() {
			animationNumber = 7
			startTag7 = true
		})
	}
	return start_div1
}

function Btn2(title) {
	let start_div1 = createDiv(title)
	start_div1.style("font-size", "24px")
	start_div1.style("color", "white")
	start_div1.style("width", "400px")
	start_div1.style("height", "100px")
	start_div1.style("line-height", "100px")
	start_div1.style("background-color", "rgba(255,0,0,0.3)")
	start_div1.style("text-align", "center")
	start_div1.style("border-radius", "5px")
	start_div1.style("cursor", "pointer")
	start_div1.position((width / 2) + 400, height - 200)
	if (animationNumber == 4) {
		start_div1.mouseClicked(function() {
			updateJn()
			setTimeout(function(){
				animationNumber = 5
				startTag5 = true				
			},2000)
		})
	} else if (animationNumber == 3) {
		start_div1.mouseClicked(function() {
			animationNumber = 7
			startTag7 = true
		})
	} else if (animationNumber == 5) {
		start_div1.mouseClicked(function() {
			animationNumber = 7
			startTag7 = true
		})
	}
	return start_div1
}

function backPageOne(title) {
	let start_div1 = createDiv(title)
	start_div1.style("font-size", "24px")
	start_div1.style("color", "white")
	start_div1.style("width", "400px")
	start_div1.style("height", "100px")
	start_div1.style("line-height", "100px")
	start_div1.style("background-color", "rgba(255,0,0,0.3)")
	start_div1.style("text-align", "center")
	start_div1.style("border-radius", "5px")
	start_div1.style("cursor", "pointer")
	start_div1.position((width / 2) - 200, height - 200)
	start_div1.mouseClicked(function() {
		animationNumber = 1
		startTag1 = true
		// redraw()
	})

	return start_div1
}

function snowflake() {
	// initialize coordinates
	this.posX = 0;
	this.posY = random(-50, 0);
	this.initialangle = random(0, 2 * PI);
	this.size = random(2, 5);

	// radius of snowflake spiral
	// chosen so the snowflakes are uniformly spread out in area
	this.radius = sqrt(random(pow(width / 2, 2)));

	this.update = function(time) {
		// x position follows a circle
		let w = 0.6; // angular speed
		let angle = w * time + this.initialangle;
		this.posX = width / 2 + this.radius * sin(angle);

		// different size snowflakes fall at slightly different y speeds
		this.posY += pow(this.size, 0.5);

		// delete snowflake if past end of screen
		if (this.posY > height) {
			let index = snowflakes.indexOf(this);
			snowflakes.splice(index, 1);
		}
	};

	this.display = function() {
		ellipse(this.posX, this.posY, this.size);
	};
}


function Fireworks(radius) {
	var num = 512; //一发烟花里，有多少个点 (比较吃机器)
	var centerPosition = new p5.Vector(random(width / 8, width * 7 / 8), random(height / 2, height * 4 / 5), random(-100,
		100)); //烟花的中心位置
	var velocity = new p5.Vector(0, -22, 0);
	var accel = new p5.Vector(0, 0.4, 0);
	var img;
	var firePosition = [];
	var cosTheta;
	var sinTheta;
	var phi;
	var colorChange = random(0, 5);

	for (var i = 0; i < num; i++) {
		cosTheta = random(0, 1) * 2 - 1;
		sinTheta = sqrt(1 - cosTheta * cosTheta);
		phi = random(0, 1) * 2 * PI;
		firePosition[i] = new p5.Vector(radius * sinTheta * cos(phi), radius * sinTheta * sin(phi), radius * cosTheta); //1发烟花里各个点的位置计算
		firePosition[i] = p5.Vector.mult(firePosition[i], 1.12);
	}

	//调整烟花随机颜色，使其更亮丽
	if (colorChange >= 3.8) {
		img = createLight(0.9, random(0.2, 0.5), random(0.2, 0.5));
	} else if (colorChange > 3.2) {
		img = createLight(random(0.2, 0.5), 0.9, random(0.2, 0.5));
	} else if (colorChange > 2) {
		img = createLight(random(0.2, 0.5), random(0.2, 0.5), 0.9);
	} else {
		img = createLight(random(0.5, 0.8), random(0.5, 0.8), random(0.5, 0.8));
	}


	this.display = function() {
		for (var i = 0; i < num; i++) {
			push();
			translate(centerPosition.x, centerPosition.y, centerPosition.z);
			translate(firePosition[i].x, firePosition[i].y, firePosition[i].z);
			blendMode(ADD); //各个小点（发光源遮罩效果）
			image(img, 0, 0);
			pop();

			firePosition[i] = p5.Vector.mult(firePosition[i], 1.015); //更新小点（发光源）扩散位置
		}
	}

	this.update = function() { //模拟重力加速度
		radius = dist(0, 0, 0, firePosition[0].x, firePosition[0].y, firePosition[0].z);
		centerPosition.add(velocity);
		velocity.add(accel);
	}

	this.needRemove = function() {
		if (centerPosition.y - radius > height) {
			return true;
		} else {
			return false;
		}
	}
}

function createLight(rPower, gPower, bPower) {
	var side = 64;
	var center = side / 2.0;
	var img = createImage(side, side);
	img.loadPixels();
	for (var y = 0; y < side; y++) {
		for (var x = 0; x < side; x++) {
			var distance = (sq(center - x) + sq(center - y)) / 10.0;
			var r = int((255 * rPower) / distance);
			var g = int((255 * gPower) / distance);
			var b = int((255 * bPower) / distance);
			// img.pixels[x + y * side] = color(r, g, b);
			img.set(y, x, color(r, g, b));
		}
	}

	img.updatePixels();
	return img;
}

function keyPressed() { //每事件添加一发烟花
	fireworks.push(new Fireworks(80)); //80为烟花初始半径
}

function touchStarted() { //每事件添加一发烟花
	fireworks.push(new Fireworks(80));
	return false;
}
