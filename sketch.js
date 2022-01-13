let xx;
let timer;
let beEnabled;

function preload(){
	xx=loadImage('packingcircles.png')
}

function setup() {
	let width =1200
	let height = 1200
	frameRate(8)
	createCanvas(width, height);
	// put setup code here
	left_x = int(width * -0.5)
	right_x = int(width * 1.5)
	top_y = int(height * -0.5)
	bottom_y = int(height * 1.5)
	resolution = int(width * 0.01)
	//	print('resolution'+ resolution)


	num_columns = 3*int((right_x - left_x) / resolution)
	num_rows = 3*int((bottom_y - top_y) / resolution)
	//	print('num_columns'+ num_columns)
	//	print('num_rows'+ num_rows)


  x_start=120*int(random(1,4));
	note_change=0;
  timer=12*16;
	beEnabled=true;
//	createLoop({duration:2, gif:true,render:true,open:true,startLoop:0,endLoop:47,download:true,fileName: 'test.gif'})
}

function draw() {

	// background(255)
	// fill(255)
	// rect(100,100,1000,1000)
	// // put drawing code here
	// for (let k=1;k<30;k++){
	//
	// 	carve()
	// 	print(k)
	// }

  image(xx,0,0,width,height)

	fill(0)
if (note_change==1){
	rect(0,0,x_start,1200);
	rect(x_start+120,0,1200,1200);
} else{
	x_halfnote=120*int(random(1,3));
	rect(0,0,x_start,1200);
	stroke(255)
	//circle(x_start+60,600,30)
	noStroke()
	rect(x_start+120,0,x_halfnote,1200);
	stroke(255)
	//circle(x_start+120+x_halfnote+60,300,50)
	noStroke()
	rect(x_start+240+x_halfnote,0,1200,1200);
	let leftEdge =int(x_start+240+x_halfnote);
}

//x_start=random(100,600);
// x_halfnote=random(10,600);
// rect(0,0,x_start,1200);
// stroke(255)
// //circle(x_start+60,600,30)
// noStroke()
// rect(x_start+120,0,x_halfnote,1200);
// stroke(255)
// //circle(x_start+120+x_halfnote+60,300,50)
// noStroke()
// rect(x_start+240+x_halfnote,0,1200,1200);
// let leftEdge =int(x_start+240+x_halfnote);
//console.log(x_halfnote)


	// rect(0,0,x_start,1200);
	// rect(x_start+120,0,1200,1200);


	if (random(0,1)<0.25){
		x_start=random(1,1000);
		note_change=0;
	} else {
		x_start=x_start;
		note_change=1;
	}

	// 		save("myfriend")

	console.log(timer)

	if (timer% int(random(1,3)) ){
		fill(0)
		rect(0,0,1200)
	}
	if (timer% int(random(1,3)) ){
		fill(255)
		rect(0,0,1200)
	}
	timer--
	if(timer ==0){
		image(xx,0,0,width,height)
		rect(0,0,x_start,1200);
		rect(x_start+120,0,1200,1200);
		noLoop()
	}
noLoop()
  let seq =500-timer;
//	 save("80800"+seq)
}

function carve(){

	// let	x = 100
	// let y = 100
	// let num_steps=100

	let Array2D = (r,c) => [...Array(r)].map(x=>Array(c).fill(0));
	let m = Array2D(num_columns,num_rows);

	//print("m length "+m.length)

	gain=int(random(-3.1,3.1));
	bend=random(0.2,0.3);
	offset=random(0,num_rows)
	if (random(0,1)<0.75) {
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
		stroke(255)
	}
	else if (dice>0.999995){
		fill(255)
		noStroke();
	}
	else {
		fill(0)
		stroke(255)
	}

	//vertex(100,100)
	//vertex(1100,1300)
	beginShape()
	let dice2=random(0,1)
	let shapesize=random(30,700);
	let stepsize=random(0.1,0.5);
	stroke(255)
	for (k=0;k<50+random(1050,35000);k+=1+random(0,3)) {
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
				stroke(255)
				noFill()
				rect(x,y,shapesize,shapesize)
				vertex(x, y)
			}
			else if (dice2<0.20 && dice2>0.185){
				stroke(0)
				fill(255)
				//	ellipse(x,y,shapesize,shapesize)
				rect(x,y,shapesize,shapesize)
				vertex(x, y)

			}
			else if (dice2<0.30 && dice2>0.265){
				stroke(255)
				//	fill(255)
				fill(0)
				//	ellipse(x,y,shapesize,shapesize)
				rect(x,y,shapesize,random(1,1)*shapesize)
			}
			else if (dice2<0.32){
				stroke(255)
				//				fill(0)
				noFill()

				vertex(x, y)


			}
			else {
				//	noFill()
				stroke(0)
				//fill(0)
				noFill()
				rect(x,y,random(1,1)*shapesize,shapesize)

				//	vertex(x, y)

			}
			//
			//pop()
			x = x + x_step+int(random(0,1))
			y = y + y_step+int(random(0,1))


			//circle(x,y,3) commmmmmmeeent
		}

		endShape()
	}

}
