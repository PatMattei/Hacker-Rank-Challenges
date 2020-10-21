//we are counting everytime the hiker goes below sea level and comes back up
//set up a counter- everytime it goes from -1 to 0 coutns as a valley

function countingValleys(steps, path) {
	//create valley counter variable set to 0
	let valleyCounter = 0;
	//create height counter- set to 0; sealevel
	let heightCounter = 0;
	//convert string to array we can iterate over
	let arr = path.split('');
	
	//for each character in array
	arr.forEach(char => {
		//if it is U
		if(char === 'U') {
			//if current height is -1, you are coming out of valley
			if (heightCounter === -1) {
				valleyCounter++;
			}
			//add 1 to current height
			heightCounter++
		} else {
			//subtract one from current height
			heightCounter--;
		}
	});
	return valleyCounter;
}

console.log(countingValleys(8, 'UDDDUDUU'))