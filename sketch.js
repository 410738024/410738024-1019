function setup() {
	createCanvas(windowWidth, windowHeight);
}
function draw() {
background(100) //背景顏色灰色
noFill()//不充滿顏色
//stroke(255)	
//rect(100,100,50)
rectMode(CENTER)	
//ellipse(125,100,30) 	
//rect(100,100,100)
for(var j=-1;j<int(height/(50));j++){
    for(var i=-1;i<int(width/(50));i++){	
       rect(100+(i*50),100+(j*50),50+mouseX/10) 
			stroke("#6AF540")//綠
			strokeWeight(8)
	     ellipse(125+(i*50),100+(j*50),30+mouseX/100) 
			stroke("#FF6F36")//橘
        rect(100+(i*50),100+(j*50),100+mouseY/5)  
			stroke("#FF42D0")//粉
    }    
  }
}
