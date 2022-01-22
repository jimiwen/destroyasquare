//single curve Day 8

function setup() {
	let width =1200
	let height = 1200
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


coloring={
	color1: '#b9c2b8',
	color2: '#d0dbd8',
	color3: '#d68c2b',
}

coloring2={
	color1:'#514059',
	color2:'#474059',
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
	rect(100,100,1000,1000)
	//put drawing code here

	// for (let k=0;k<100;k++){
	//
	// 	carve()
	// //print(k)
	// }


	let	x = 600+random(-200,200)
	let y = 600+random(-200,200)
	let shapesize=random(110,1000);





	 // 	x = 100//+random(-200,200)
 	 // y = 100//+random(-200,200)
 	 // shapesize=random(230,400);
	 //

	 for (let k=0;k<12;k++){
		 if (random(0,1)<0.5){
			 x = 100+random(200,500)
		   y = 100+random(200,500)
		   shapesize=random(23,40);
		 }
		 if(random(0,1)<0.3){
		 carve2(x,y,shapesize,0)
	 } else {
		 carve2(x,y,shapesize,1)
	 }
	 }


	 carve2(x,y,shapesize,1)
	 carve2(x,y,shapesize,1)
   carve2(x,y,shapesize,1)
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

	noLoop()
	//save("combine2")

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
			fill(random([coloring2.color1,coloring2.color2,coloring2.color3,coloring2.color4,coloring2.color5,coloring2.color6]));
			ellipse(x,y,random(0.4,0.5)*shapesize,random(0.4,0.5)*shapesize)
			noFill()
			strokeWeight(0.01+random(0,0.2))
      ellipse(x,y,shapesize*(50-k)/29,shapesize*(50-k)/120)
			strokeWeight(0.1+random(0,0.5))
			x = x + x_step+int(random(0,1))
			y = y + y_step+int(random(0,1))
console.log(k)
		}

	}

fill(random([coloring2.color1,coloring2.color2,coloring2.color3,coloring2.color4,coloring2.color5,coloring2.color6]));
ellipse(x,y,shapesize*(50-k)/29,shapesize*(50-k)/120)
// if (random(0,1)<0.4){
// fill(random([coloring2.color1,coloring2.color2,coloring2.color3,coloring2.color4,coloring2.color5,coloring2.color6]));
// ellipse(x+random(-13,13),y+random(-13,13),shapesize*(50-k)/29+random(-13,13),shapesize*(50-k)/120+random(-13,13))
// stroke(random([coloring2.color1,coloring2.color2,coloring2.color3,coloring2.color4,coloring2.color5,coloring2.color6]))
// }
noFill()
//
// for (let f=0;f<16;k+=int(random(1,3))) {
// 	fill(random([coloring2.color1,coloring2.color2,coloring2.color3,coloring2.color4,coloring2.color5,coloring2.color6]));
// 	ellipse(x,y,shapesize*(50-k)/229,shapesize*(50-k)/120)
// 	noFill();
// }


	return x,y,shapesize;
}
