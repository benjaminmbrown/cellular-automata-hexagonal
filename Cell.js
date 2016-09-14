var Cell = function(_x,_y,_w){
	
	this.x = _x;
	this.y = _y;
	this.w = _w;

	//State Logic
 	this.state = Math.floor(random(2));

 	this.previousState = this.state;

 	this.savePreviousState = function(){
 		this.previousState = this.state;
 	}

 	this.newState = function(s){
 		this.state = s;
 	}

	this.display = function(){

		if(this.previousState === 0 && this.state == 1){
			fill(0,0,255);
		}
		else if(this.previousState == 1 && this.state === 0){
			fill(0,255,0);
		}
		else if(this.state ==1){fill(0)}
		else {fill(255)}

		stroke(1);
		rect(this.x,this.y,this.w,this.w);

	}
}