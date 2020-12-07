let animationNumber = 1
let img
let width = window.innerWidth
let height = window.innerHeight
function preload(){
	img1 = loadImage("../img/bg1.jpg")
	img2 = loadImage("../img/bg2.jpg")
	img3 = loadImage("../img/bg3.jpg")
	img4 = loadImage("../img/bg4.jpg")
	img5 = loadImage("../img/bg5.jpg")
	img6 = loadImage("../img/bg6.jpg")
	img7 = loadImage("../img/bg7.jpg")
	p1 = loadImage("../img/p1.jpg")
	p2 = loadImage("../img/p2.jpg")
	p3 = loadImage("../img/p3.jpg")
	boos1 = loadImage("../img/boos1.jpg")
	boos2 = loadImage("../img/boos2.jpg")
	boos3 = loadImage("../img/boos3.jpg")
}

function setup() {
	let mycanvas = createCanvas(width,height)
	textSize(50)
	fill(255,255,255)
	noLoop()
}

function draw() {
	background(200);
	if(animationNumber == 1){
		clearDiv()
		start1()
	}else if(animationNumber == 2){
		clearDiv()
		start2()
	}else if(animationNumber == 3){
		clearDiv()
		start3()
	}else if(animationNumber == 4){
		clearDiv()
		start4()
	}else if(animationNumber == 5){
		clearDiv()
		start5()
	}else if(animationNumber == 6){
		clearDiv()
		start6()
	}else if(animationNumber == 7){
		clearDiv()
		start7()
	}
}

function start1(){
	image(img1,0,0,width,height)
	createTitle("Please click to start your journey")
	startBtn("start game",height-200)
}

function start2(){
	image(img2,0,0,width,height)
	createTitle("Please choose a person you like")
	image(p1,width/2-400,300,200,200)
	image(p2,width/2-100,300,200,200)
	image(p3,width/2+200,300,200,200)
	PDiv1()
	PDiv2()
	PDiv3()
}


function start3(){
	image(img3,0,0,width,height)
	image(boos1,width/2-200,100,400,400)
	MessageBox("Who was the longest reigning emperor of the Ming Dynasty?")
	Btn1("Emperor Wanli")
	Btn2("Zhu Yuanzhang")
}

function start4(){
	image(img4,0,0,width,height)
	image(boos2,width/2-200,100,400,400)
	MessageBox("What is wrong about Herodotus?")
	Btn1("Ancient Greek writers")
	Btn2("Don't like traveling")
}

function start5(){
	image(img5,0,0,width,height)
	image(boos3,width/2-200,100,400,400)
	MessageBox("Is India the most populous country in the world?")
	Btn1("No")
	Btn2("Yes")
}

function start6(){
	image(img6,0,0,width,height)
	// image(boos1,width/2-200,100,400,400)
	gMessageBox("Congratulations on your success")
	backPageOne("From the beginning")
}

function start7(){
	image(img7,0,0,width,height)
	// image(boos1,width/2-200,100,400,400)
	gMessageBox("Game Over")
	backPageOne("From the beginning")
}

function startBtn(btnText,Y){
	let start_div1 = createDiv(btnText)
	start_div1.style("font-size","24px")
	start_div1.style("color","white")
	start_div1.style("width","200px")
	start_div1.style("height","100px")
	start_div1.style("line-height","100px")
	start_div1.style("background-color","rgb(76, 60, 255)")
	start_div1.style("text-align","center")
	start_div1.style("border-radius","5px")
	start_div1.style("cursor","pointer")
	start_div1.position((width/2)-100,Y)
	start_div1.style("transition","all 1s")
	start_div1.mouseOver(function(){
		start_div1.style("color","red")
		start_div1.style("background-color","green")
	})
	start_div1.mouseOut(function(){
		start_div1.style("color","white")
		start_div1.style("background-color","rgb(76, 60, 255)")
	})
	console.log(start_div1)
	start_div1.mouseClicked(function(){
		animationNumber = 2
		redraw()
	})
	
	return start_div1
}
function createTitle(title){
	let start_div1 = createDiv(title)
	start_div1.style("font-size","24px")
	start_div1.style("color","white")
	start_div1.style("width","500px")
	start_div1.style("height","100px")
	start_div1.style("line-height","100px")
	start_div1.style("background-color","rgba(255,255,255,0.1)")
	start_div1.style("text-align","center")
	start_div1.style("border-radius","5px")
	start_div1.position((width/2)-250,100)
	return start_div1
}


function clearDiv(){
	let div = document.querySelectorAll("div")
	for(let d of div){
		d.style.display = "none"
	}
}

function PDiv1(){
	let start_div1 = createDiv("Captain America")
	start_div1.style("font-size","24px")
	start_div1.style("color","rgba(0,0,0,0)")
	start_div1.style("width","200px")
	start_div1.style("height","200px")
	start_div1.style("line-height","200px")
	start_div1.style("background-color","rgba(255,255,255,0)")
	start_div1.style("text-align","center")
	start_div1.style("cursor","pointer")
	start_div1.position(width/2-400,300)
	start_div1.style("transition","all 1s")
	start_div1.mouseOver(function(){
		start_div1.style("background-color","rgba(0,0,0,0.5)")
		start_div1.style("color","rgba(255,255,255,0.8)")
	})
	start_div1.mouseOut(function(){
		start_div1.style("background-color","rgba(255,255,255,0)")
		start_div1.style("color","rgba(255,255,255,0)")
	})
	console.log(start_div1)
	start_div1.mouseClicked(function(){
		animationNumber = 3
		redraw()
	})
	
	return start_div1
}

function PDiv2(){
	let start_div1 = createDiv("Swordsman")
	start_div1.style("font-size","24px")
	start_div1.style("color","rgba(0,0,0,0)")
	start_div1.style("width","200px")
	start_div1.style("height","200px")
	start_div1.style("line-height","200px")
	start_div1.style("background-color","rgba(255,255,255,0)")
	start_div1.style("text-align","center")
	start_div1.style("cursor","pointer")
	start_div1.position(width/2-100,300)
	start_div1.style("transition","all 1s")
	start_div1.mouseOver(function(){
		start_div1.style("background-color","rgba(0,0,0,0.5)")
		start_div1.style("color","rgba(255,255,255,0.8)")
	})
	start_div1.mouseOut(function(){
		start_div1.style("background-color","rgba(255,255,255,0)")
		start_div1.style("color","rgba(255,255,255,0)")
	})
	console.log(start_div1)
	start_div1.mouseClicked(function(){
		animationNumber = 3
		redraw()
	})
	
	return start_div1
}

function PDiv3(){
	let start_div1 = createDiv("Robert")
	start_div1.style("font-size","24px")
	start_div1.style("color","rgba(0,0,0,0)")
	start_div1.style("width","200px")
	start_div1.style("height","200px")
	start_div1.style("line-height","200px")
	start_div1.style("background-color","rgba(255,255,255,0)")
	start_div1.style("text-align","center")
	start_div1.style("cursor","pointer")
	start_div1.position(width/2+200,300)
	start_div1.style("transition","all 1s")
	start_div1.mouseOver(function(){
		start_div1.style("background-color","rgba(0,0,0,0.5)")
		start_div1.style("color","rgba(255,255,255,0.8)")
	})
	start_div1.mouseOut(function(){
		start_div1.style("background-color","rgba(255,255,255,0)")
		start_div1.style("color","rgba(255,255,255,0)")
	})
	console.log(start_div1)
	start_div1.mouseClicked(function(){
		animationNumber = 3
		redraw()
	})
	
	return start_div1
}



function Boos1(){
	let start_div1 = createDiv("Dark mage")
	start_div1.style("font-size","24px")
	start_div1.style("color","rgba(0,0,0,0)")
	start_div1.style("width","200px")
	start_div1.style("height","200px")
	start_div1.style("line-height","200px")
	start_div1.style("background-color","rgba(255,255,255,0)")
	start_div1.style("text-align","center")
	start_div1.style("cursor","pointer")
	start_div1.position(width/2+200,300)
	start_div1.style("transition","all 1s")
	start_div1.mouseOver(function(){
		start_div1.style("background-color","rgba(0,0,0,0.5)")
		start_div1.style("color","rgba(255,255,255,0.8)")
	})
	start_div1.mouseOut(function(){
		start_div1.style("background-color","rgba(255,255,255,0)")
		start_div1.style("color","rgba(255,255,255,0)")
	})
	console.log(start_div1)
	start_div1.mouseClicked(function(){
		animationNumber = 3
		redraw()
	})
	
	return start_div1
}

function MessageBox(title){
	let start_div1 = createDiv(title)
	start_div1.style("font-size","24px")
	start_div1.style("color","white")
	start_div1.style("width","1000px")
	start_div1.style("height","100px")
	start_div1.style("line-height","100px")
	start_div1.style("background-color","rgba(0,0,0,0.3)")
	start_div1.style("text-align","center")
	start_div1.style("border-radius","5px")
	start_div1.position((width/2)-500,height-400)
	return start_div1
}

function gMessageBox(title){
	let start_div1 = createDiv(title)
	start_div1.style("font-size","24px")
	start_div1.style("color","white")
	start_div1.style("width","1000px")
	start_div1.style("height","100px")
	start_div1.style("line-height","100px")
	start_div1.style("background-color","rgba(0,0,0,0.3)")
	start_div1.style("text-align","center")
	start_div1.style("border-radius","5px")
	start_div1.position((width/2)-500,height-600)
	return start_div1
}

function Btn1(title){
	let start_div1 = createDiv(title)
	start_div1.style("font-size","24px")
	start_div1.style("color","white")
	start_div1.style("width","400px")
	start_div1.style("height","100px")
	start_div1.style("line-height","100px")
	start_div1.style("background-color","rgba(255,0,0,0.3)")
	start_div1.style("text-align","center")
	start_div1.style("border-radius","5px")
	start_div1.style("cursor","pointer")
	start_div1.position((width/2)-800,height-200)
	if(animationNumber == 3){
		start_div1.mouseClicked(function(){
			animationNumber = 4
			redraw()
		})
	}else if(animationNumber == 5){
		start_div1.mouseClicked(function(){
			animationNumber = 6
			redraw()
		})
	}else if(animationNumber == 4){
		start_div1.mouseClicked(function(){
			animationNumber = 7
			redraw()
		})
	}
	return start_div1
}

function Btn2(title){
	let start_div1 = createDiv(title)
	start_div1.style("font-size","24px")
	start_div1.style("color","white")
	start_div1.style("width","400px")
	start_div1.style("height","100px")
	start_div1.style("line-height","100px")
	start_div1.style("background-color","rgba(255,0,0,0.3)")
	start_div1.style("text-align","center")
	start_div1.style("border-radius","5px")
	start_div1.style("cursor","pointer")
	start_div1.position((width/2)+400,height-200)
	if(animationNumber == 4){
		start_div1.mouseClicked(function(){
			animationNumber = 5
			redraw()
		})
	}else if(animationNumber == 3){
		start_div1.mouseClicked(function(){
			animationNumber = 7
			redraw()
		})
	}else if(animationNumber == 5){
		start_div1.mouseClicked(function(){
			animationNumber = 7
			redraw()
		})
	}
	return start_div1
}

function backPageOne(title){
	let start_div1 = createDiv(title)
	start_div1.style("font-size","24px")
	start_div1.style("color","white")
	start_div1.style("width","400px")
	start_div1.style("height","100px")
	start_div1.style("line-height","100px")
	start_div1.style("background-color","rgba(255,0,0,0.3)")
	start_div1.style("text-align","center")
	start_div1.style("border-radius","5px")
	start_div1.style("cursor","pointer")
	start_div1.position((width/2)-200,height-200)
	start_div1.mouseClicked(function(){
		animationNumber = 1
		redraw()
	})
	
	return start_div1
}
