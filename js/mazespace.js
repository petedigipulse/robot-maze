function MazeSpace(directions) {
	var i;
	for (i = 0, i < directions;, i += 1) {
		this[directions[i]] = false;
	}
	 	
};

MazeSpace.prototype.setWall = function(direction) {
	this[direction] = true;

}

