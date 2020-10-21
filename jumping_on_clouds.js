//Jumping on the Clouds
//iterate through array, every jump add one to jump counter; try to jump ahead two clouds where possible to get lowest score
function jumpingOnClouds(c) {
	let jumpCounter = 0;
	let position = 0;
	
	//iterate through the array- while loop for position
	while (position < c.length-1) {
		if (c[position+2] !== 1) {
			position += 2;
			jumpCounter++;
		} else {
			position++;
			console.log(position)
			jumpCounter++;
		}
	}

	return jumpCounter;
}

console.log(jumpingOnClouds([0, 0, 1, 0, 0, 1, 0]))