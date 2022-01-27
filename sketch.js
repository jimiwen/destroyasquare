//single curve Day 8

function setup() {
	let width =1200
	let height = 1000
	createCanvas(width, height);
	// put setup code here
	left_x = int(width * -0.5)
	right_x = int(width * 1.5)
	top_y = int(height * -0.5)
	bottom_y = int(height * 1.5)
	resolution = int(width * 0.01)
	//	print('resolution'+ resolution)
rectMode(CENTER)
angleMode(DEGREES)
	num_columns = 3*int((right_x - left_x) / resolution)
	num_rows = 3*int((bottom_y - top_y) / resolution)
	//	print('num_columns'+ num_columns)
	//	print('num_rows'+ num_rows)


	coloring={
		color1: '#b9c2b8',
		color2: '#d0dbd8',
		color3: '#debe95',
	}

	coloring2={
		color1:'#514059',
		color2:'#474059',
		color3:'#404759',
		color4:'#404759',
		color5:'#474059',
		color6:'#514059'
	}


	coloring3={
		color1:'#514059',
		color2:'#b85182',
		color3:'#404759',
		color4:'#404759',
		color5:'#474059',
		color6:'#514059'
	}
	// coloring={
	// 	color1: '#232926',
	// 	color2: '#2d3c66',
	// 	color3: '#a3848c',
	// }
	//
	// coloring2={
	// 	color1:'#a3848c',
	// 	color2:'#a3848c',
	// 	color3:'#a3848c'
	// }

}

function draw() {
	background(random([coloring.color1,coloring.color2,coloring.color3]))
	// fill(0)
	// rect(0,0,1199,1199)
	fill(random([coloring.color1,coloring.color2,coloring.color3]))
	rect(600,500,1000,800)
	//put drawing code here

	// for (let k=0;k<50;k++){
	//
	// 	carve()
	// //print(k)
	// }


	let	x = 600+random(-200,200)
	let y = 600+random(-200,200)
	let shapesize=random(110,600);




	//
	// 	x = 100//+random(-200,200)
	// y = 100//+random(-200,200)
	// shapesize=random(230,400);
	//
	//
	// for (let k=0;k<12;k++){
	// 	if (random(0,1)<0.3){
	// 		x = 100+random(200,500)
	// 		y = 100+random(200,500)
	// 		shapesize=random(23,40);
	// 	}
	// 	if(random(0,1)<0.3){
	// 		carve2(x,y,shapesize,0)
	// 	} else {
	// 		carve2(x,y,shapesize,1)
	// 	}
	// }
	//
	// //
	//  carve2(x,y,shapesize,1)
	// carve2(x,y,shapesize,1)
	// carve2(x,y,shapesize,1)
	// carve2(x,y,shapesize,1)
	// carve2(x,y,shapesize,1)
	// carve2(x,y,shapesize,1)
	// carve2(x,y,shapesize,1)
	// carve2(x,y,shapesize,1)
	// carve2(x,y,shapesize,1)
	// carve2(x,y,shapesize,1)
	// carve2(x,y,shapesize,1)
	// carve2(x,y,shapesize,1)
	// carve2(x,y,shapesize,1)
	// carve2(x,y,shapesize,1)



	//   x = 300//+random(200,500)
	//  y = 100//+random(200,500)
	//  shapesize=random(23,40);
	//
	//  carve2(x,y,shapesize,0)
	//  //carve2(x,y,shapesize,0)
	//
	//  x = 100//+random(200,500)
	// y = 200//+random(200,500)
	// shapesize=random(23,40);
	//  carve2(x,y,shapesize,0)
	// // carve2(x,y,shapesize,0)
	//
	// x = 50//+random(200,500)
	// y = 300//+random(200,500)
	// shapesize=random(23,40);
	//  carve2(x,y,shapesize,0)
	//
	// x = 200//+random(200,500)
	// y = 100//+random(200,500)
	// shapesize=random(23,40);
	// carve2(x,y,shapesize,0)
	//
	// x = 400//+random(200,500)
	// y = 100//+random(200,500)
	// shapesize=random(23,40);
	// carve2(x,y,shapesize,0)
	//
	// x = 600//+random(200,500)
	// y = 100//+random(200,500)
	// shapesize=random(23,40);
	// carve2(x,y,shapesize,0)
	//
	// x = 800//+random(200,500)
	// y = 100//+random(200,500)
	// shapesize=random(23,40);
	// carve2(x,y,shapesize,0)
	//
	//
	// x = 100//+random(200,500)
	// y = 500//+random(200,500)
	// shapesize=random(23,40);
	// carve2(x,y,shapesize,0)

	angleMode(DEGREES)
	rectMode(CENTER)
push()
translate(random(600,700),random(-450,-250))
rotate(60)
carve3()
pop()

push()
translate(random(-250,-200),random(500,700))
rotate(-60)
carve3()
pop()
push()
translate(random(-50,50),random(-50,50))
carve3()
pop()
	noLoop()
	//save("organic")

}

function carve3(){
angleMode(DEGREES)
rectMode(CENTER)
noFill()

strokeWeight(0.5)


		for (k=0;k<150;k+=1){
			strokeWeight(0.5)
			stroke(coloring3.color2)


			rect(650+cos(30)*150+cos(30)*20+cos(30)*k,600,600-sin(30)*k,50,50)
rect(520+cos(30)*150+cos(30)*20+cos(30)*k,500,600-sin(30)*k,50,50)

	stroke(coloring3.color5)
				rect(600+cos(30)*k,600+sin(30)*k,50,50)
					rect(600+cos(30)*k,600-sin(30)*k,50,50)
	rect(650+cos(30)*150+cos(30)*20+cos(30)*k/1.8,530-sin(30)*150-sin(30)*20-sin(30)*k/1.8,50,50)
rect(406+cos(30)*k/1.33,364+sin(30)*k/1.33,50,50)

		}

		carve2(600+cos(30)*150,600-sin(30)*150,20,0)
		angleMode(DEGREES)
		rectMode(CENTER)

for (k=0;k<20;k+=1){
	strokeWeight(0.5)
	stroke(coloring3.color5)
	// rect(450+cos(30)*k,430-sin(30)*k,50,50)
	// rect(450+cos(30)*k,500-sin(30)*k,50,50)
	//rect(450+cos(30)*k,570-sin(30)*k,50,50)
	//	rect(540+cos(30)*k,500-sin(30)*k,50,50)

			rect(570-cos(30)*k,500-sin(30)*k,50,50)
				rect(570-cos(30)*k,500+sin(30)*k,50,50)
				rect(486+cos(30)*k,430-sin(30)*k,50,50)
				rect(486+cos(30)*k,430+sin(30)*k,50,50)

			//		rect(540+cos(30)*k,550+sin(30)*k,50,50)

	//	rect(670+cos(30)*k,500+sin(30)*k,50,50)

		rect(600+cos(30)*150+cos(30)*k,600-sin(30)*150-sin(30)*k,50,50)
		rect(650+cos(30)*150+cos(30)*k,530-sin(30)*150+sin(30)*k,50,50)
		rect(650+cos(30)*150+cos(30)*k,530-sin(30)*150-sin(30)*k,50,50)


	//	rect(770+cos(30)*k,400+sin(30)*k,50,50)
	//	rect(680+cos(30)*150+cos(30)*k,600-sin(30)*150+sin(30)*k,50,50)

}
//carve2(650+cos(30)*150+cos(30)*20,530-sin(30)*150-sin(30)*20,20,0)
carve2(650+cos(30)*150+cos(30)*20,530-sin(30)*150+sin(30)*20,20,0)

//carve2(486+cos(30)*20,430+sin(30)*20,20,0)
carve2(486+cos(30)*20,430-sin(30)*20,20,0)

carve2(570-cos(30)*20,500+sin(30)*20,20,0)
angleMode(DEGREES)
rectMode(CENTER)

for (k=0;k<500;k+=1){
	strokeWeight(0.5)
	stroke(coloring3.color6)
	rect(170+cos(30)*k,500+sin(30)*k,50,50)
	rect(170+cos(30)*k,500-sin(30)*k,50,50)
	rect(cos(30)*500+170+cos(30)*k,400+350-sin(30)*k,50,50)
	rect(cos(30)*500+170+cos(30)*500-cos(30)*k,400+350-sin(30)*500-sin(30)*k,50,50)
	strokeWeight(0.1)
	stroke(coloring3.color6)
	rect(170+cos(30)*500,500+sin(30)*500+k/30,50*(500-k)/500,50)
	rect(170+cos(30)*500,500-sin(30)*500-k/30,50*(500-k)/500,50)
}
}

function carve(){

	// let	x = 100
	// let y = 100
	// let num_steps=100


	// initialise field
	let Array2D = (r,c) => [...Array(r)].map(x=>Array(c).fill(0));
	let m = Array2D(num_columns,num_rows);

	//print("m length "+m.length)

	gain=int(random(-3.1,3.1));
	bend=random(0.2,0.3);
	offset=random(0,num_rows)
	if (random(0,1)<1) {
		quantum=1;
		for (let column=0; column<num_columns; column++) {
			for (row=0; row<num_rows; row++) {

				angle = (quantum*(row-offset-gain*bend*column) / (num_rows*bend))/quantum * PI*gain
				// print('angle'+angle)
				m[column][row] = angle
			}
		}
	}
	else{
		quantum=random(2,3);
		for (let column=0; column<num_columns; column++) {
			for (row=0; row<num_rows; row++) {

				angle = int(quantum*((row-offset-gain*bend*column) / (num_rows*bend))/quantum) * PI*gain
				// print('angle'+angle)
				m[column][row] = angle
			}
		}
	}

	//print("angle"+m[100][100])

	let	x = 100+random(-100,1000)
	let y = 100+random(-100,1000)
	let num_steps=100

	strokeWeight(0.1)
	dice=random(0,1)
	if (dice<0.95){
		noFill()
		stroke(random([coloring.color1,coloring.color2,coloring.color3]))
	}
	else if (dice>0.999995){
		//fill(random([coloring.color1,coloring.color2,coloring.color3]))
		noStroke();
	}
	else {
		//fill(random([coloring.color1,coloring.color2,coloring.color3]))
		stroke(random([coloring.color1,coloring.color2,coloring.color3]))
	}

	//vertex(100,100)
	//vertex(1100,1300)
	beginShape()
	let dice2=random(0,1)
	let shapesize=random(30,700);
	let stepsize=random(0.1,0.5);
	stroke(random([coloring.color1,coloring.color2,coloring.color3]))
	for (k=0;k<50+random(1250,5010);k+=1+random(0,3)) {
		strokeWeight(0.1+random(0,0.5))


		x_offset = x - left_x
		y_offset = y - top_y
		if (x_offset<1800 && y_offset< 1800 && x_offset>0 && y_offset>0  ) {
			column_index = int(x_offset / resolution)
			row_index = int(y_offset / resolution)
			//	print(column_index,row_index)
			// NOTE: normally you want to check the bounds here
			grid_angle = m[column_index][row_index]
			x_step = stepsize*resolution * cos(grid_angle)
			y_step = stepsize*resolution * sin(grid_angle)
			//	vertex(x, y)

			//draw shapes
			if (dice2>0.50){
				stroke(random([coloring.color1,coloring.color2,coloring.color3]))
				noFill()

				vertex(x, y)
			}
			else if (dice2<0.20 && dice2>0.185){
				stroke(random([coloring.color1,coloring.color2,coloring.color3]))

				vertex(x, y)
			}
			else if (dice2<0.30 && dice2>0.265){
				stroke(random([coloring.color1,coloring.color2,coloring.color3]))
			}
			else if (dice2<0.62){
				stroke(random([coloring.color1,coloring.color2,coloring.color3]))
				noFill()
				vertex(x, y)
			}
			else {
				stroke(random([coloring.color1,coloring.color2,coloring.color3]))
				noFill()

				vertex(x, y)
			}
			x = x + x_step+int(random(0,1))
			y = y + y_step+int(random(0,1))
			//	rect(x,y,shapesize/(500-k)/500,shapesize)
			circle(x,y,3)
		}
		endShape()
	}
	//	fill(random([coloring.color1,coloring.color2,coloring.color3]))
	rect(x,y,random(0.01,10)*shapesize,shapesize)
	noFill()
}


function carve2(x,y,shapesize,wiggle){

angleMode(RADIANS)
ellipseMode(CORNER)


	// initialise field
	let Array2D = (r,c) => [...Array(r)].map(x=>Array(c).fill(0));
	let m = Array2D(num_columns,num_rows);

	//print("m length "+m.length)
	if (random(0,1)>0.5){
		gain=int(random(1.1,3.1));
	}
	else{
		gain=int(random(-3.1,-1.1));
	}

	bend=random(0.2,0.3);
	offset=random(0,num_rows)
	if (random(0,1)<0.99) {
		quantum=1;
		for (let column=0; column<num_columns; column++) {
			for (row=0; row<num_rows; row++) {

				angle = (quantum*(row-offset-gain*bend*column) / (num_rows*bend))/quantum * PI*gain
				// print('angle'+angle)
				m[column][row] = angle
			}
		}
	}
	else{
		quantum=random(2,3);
		for (let column=0; column<num_columns; column++) {
			for (row=0; row<num_rows; row++) {

				angle = int(quantum*((row-offset-gain*bend*column) / (num_rows*bend))/quantum) * PI*gain
				// print('angle'+angle)
				m[column][row] = angle
			}
		}
	}

	//print("angle"+m[100][100])

	// let	x = 100+random(-100,1000)
	// let y = 100+random(-100,1000)
	let num_steps=100

	// strokeWeight(0.1)
	// dice=random(0,1)
	// if (dice<0.95){
	// 	noFill()
	// 	stroke(255)
	// }
	// else if (dice>0.995){
	// 	fill(255)
	// noStroke();
	// }
	// else {
	// 	 fill(0)
	// 	stroke(255)
	// }

	//vertex(100,100)
	//vertex(1100,1300)

	//	let dice2=random(0,1)
	let stepsize=random(0.1,0.5);
	//	print("dice2=  "+dice2)
	let curvelength=random(100,400);
	//stroke(255)
	//measure balance
	let tl=0
	let tr=0
	let bl=0
	let br=0
	let centrepoint =900
	xtemp=x;
	ytemp=y;


	for (k=0;k<50+curvelength;k+=1+random(0,3)) {
		strokeWeight(0.1+random(0,0.5))


		x_offset = xtemp - left_x
		y_offset = ytemp - top_y

		if (x_offset<1800 && y_offset< 1800 && x_offset>0 && y_offset>0  ) {
			column_index = int(x_offset / resolution)
			row_index = int(y_offset / resolution)
			//	print(column_index,row_index)
			// NOTE: normally you want to check the bounds here
			grid_angle = m[column_index][row_index]
			x_step = stepsize*resolution * cos(grid_angle)
			y_step = stepsize*resolution * sin(grid_angle)
			//
			//pop()
			xtemp = xtemp + x_step+int(random(0,1));
			ytemp = ytemp + y_step+int(random(0,1));
			//      print(xtemp,ytemp)
			if (xtemp < centrepoint && ytemp < centrepoint){
				tl=tl+1;
			}
			else if (xtemp < centrepoint && ytemp > centrepoint){
				bl=bl+1;
			}
			else if (xtemp > centrepoint && ytemp < centrepoint) {
				tr=tr+1;
			}
			else{
				br=br+1;
			}
		}
	}
	// print("tl= "+tl)
	// print("tr= "+tr)
	// print("bl= "+bl)
	// print("br= "+br)




	shiftX=wiggle*600*(tl-tr+bl-br)/(tl+tr+bl+br);
	shiftY=wiggle*600*(tl+tr-bl-br)/(tl+tr+bl+br);
	//print(shiftX,shiftY)
	//print(x,y)
	x=x+shiftX;
	y=y+shiftY;
	//print(x,y)

	//draw
	for (k=1;k<50+curvelength;k+=1+random(0,2)) {
		strokeWeight(0.1+random(0,0.5))


		x_offset = x - left_x
		y_offset = y - top_y
		if (x_offset<1800 && y_offset< 1800 && x_offset>0 && y_offset>0  ) {
			column_index = int(x_offset / resolution)
			row_index = int(y_offset / resolution)
			//	print(column_index,row_index)
			// NOTE: normally you want to check the bounds here
			grid_angle = m[column_index][row_index]
			x_step = stepsize*resolution * cos(grid_angle)
			y_step = stepsize*resolution * sin(grid_angle)
			//	vertex(x, y)


			//main curve
			stroke(random([coloring2.color1,coloring2.color2,coloring2.color3])
		)


		//	ellipse(x,y,shapesize,shapesize)
		stroke(random([coloring2.color1,coloring2.color2,coloring2.color3,coloring2.color4,coloring2.color5,coloring2.color6]));
		rect(x,y,random(0.4,0.5)*shapesize,random(0.4,0.5)*shapesize)
		noFill()
		strokeWeight(0.01+random(0,0.2))
		rect(x,y,shapesize*(50-k)/29,shapesize*(50-k)/120)
		strokeWeight(0.1+random(0,0.5))
		x = x + x_step+int(random(0,1))
		y = y + y_step+int(random(0,1))
	//	console.log(k)
	}

}

noStroke()
fill(random([coloring3.color1,coloring2.color2,coloring2.color3,coloring2.color4,coloring2.color5,coloring2.color6]));
rect(x,y,shapesize*(50-k)/29,shapesize*(50-k)/120)
if (random(0,1)<0.8){
	fill(random([coloring3.color1,coloring2.color2,coloring2.color3,coloring2.color4,coloring2.color5,coloring2.color6]));
	rect(x+random(-7,7),y+random(-7,7),shapesize*(50-k)/29+random(-2,5),shapesize*(50-k)/120+random(-1,5))
	//stroke(random([coloring2.color1,coloring2.color2,coloring2.color3,coloring2.color4,coloring2.color5,coloring2.color6]))
}
noFill()

if (random(0,1)<0.5){
	strokeWeight(1)
	fill(random([coloring3.color1,coloring3.color2,coloring3.color3,coloring3.color4,coloring3.color3,coloring3.color2]));
	if (random(0,1)<0.5){
	stroke(random([coloring3.color2,coloring3.color2,coloring3.color3,coloring3.color4,coloring3.color3,coloring3.color2]))
	}
	fill(random([coloring3.color1,coloring3.color2,coloring3.color3,coloring3.color4,coloring3.color2,coloring3.color6]));

	//noStroke()
	if (random(0,1)<0.5){
	stroke(random([coloring3.color1,coloring3.color2,coloring3.color2,coloring3.color4,coloring3.color3,coloring3.color6]))
	}
	rect(x,y-30,shapesize*(50-k)/229,shapesize*(50-k)/120)
	fill(random([coloring3.color2,coloring3.color2,coloring3.color3,coloring3.color4,coloring3.color3,coloring3.color6]));
	if (random(0,1)<0.5){
	stroke(random([coloring3.color2,coloring3.color2,coloring3.color2,coloring3.color4,coloring3.color3,coloring3.color6]))
	}
	rect(x+30,y-40,shapesize*(50-k)/209,shapesize*(50-k)/110)
	fill(random([coloring3.color1,coloring3.color2,coloring3.color3,coloring3.color4,coloring3.color3,coloring3.color6]));
	if (random(0,1)<0.5){
	stroke(random([coloring3.color2,coloring3.color2,coloring3.color3,coloring3.color4,coloring3.color3,coloring3.color6]))
	}
	rect(x+10,y-40,shapesize*(50-k)/209,shapesize*(50-k)/120)
	fill(random([coloring3.color1,coloring3.color2,coloring3.color3,coloring3.color4,coloring3.color3,coloring3.color6]));
	noStroke()
	rect(x+50,y-20,shapesize*(50-k)/209,shapesize*(50-k)/120)
	fill(random([coloring3.color1,coloring3.color2,coloring3.color3,coloring3.color4,coloring3.color3,coloring3.color6]));

	//ellipse(x-random(-20,20),y-random(-20,20),shapesize*(50-k)/random(80,130),shapesize*(50-k)/random(140,200))

	noFill();

}


//return x,y,shapesize;
}
