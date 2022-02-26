function randomIntFromInterval(min,max){ // min and max included
	min = Math.ceil(min);
	max = Math.floor(max);
    return Math.floor(Math.random()*(max-min+1)) + min;
}

function dist (x1, y1, x2, y2){
	var xd = x2 - x1;
	var yd = y2 - y1;
	return Math.sqrt(xd * xd + yd * yd);
}

function overlaps (r1, r2){
	return !(r2.x > r1.x + r1.width ||
			 r2.x + r2.width < r1.x ||
			 r2.y > r1.y + r1.height ||
			 r2.y + r2.height < r1.y);
}
	