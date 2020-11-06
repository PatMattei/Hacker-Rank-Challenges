// Complete the rotLeft function below.
function rotLeft(a, d) {
	//for length of d
	for (let i = 0; i < d; i++) {
		//add the first int in a to end of a
		a.push(a[0]);
		//remove a[0]
		a.shift();
	}
	return a;
}

console.log(rotLeft([1, 2, 3, 4, 5], 4))