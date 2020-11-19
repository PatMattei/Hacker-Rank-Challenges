// Complete the minimumBribes function below.
function minimumBribes(q) {
	let bribes = 0;
	//a is the original line; q is the line after cuts and bribes have been made
	let a = new Array(q.length); // create an empty array with length 45
	for(var i = 0; i < a.length; i++){
		a[i] = i + 1; 
	}
	
	for(var i = 0; i < q.length; i++){
		if ((q[i] - a[i]) > 2) { //too chaotic if there were more than 2 jumps
			return "Too chaotic";
		} 
	}

	//loop through q until the last positions are the same
	while (a[a.length-1] !== q[a.length-1]) {
		for(var i = 0; i < q.length; i++){
			if (q[i] != a[i]) {
				//indx is final position 
				let indx = a.indexOf(q[i]);
				let num = q[i];

				bribes+= (indx-i);
				
				a.splice(i, 0, num);
				a.splice(indx+1, 1);
			}
		}
	}
	return bribes;
}

console.log(minimumBribes([ 1, 2, 5, 3, 7, 8, 6, 4 ]));


// 1 2 3 4 5 6 7 8
// 1 2 3 4 5 7 6 8    7
// 1 2 3 4 5 7 8 6    8
// 1 2 3 5 4 7 8 6    5
// 1 2 5 3 4 7 8 6    5
// 1 2 5 3 7 4 8 6    7
// 1 2 5 3 7 8 4 6    8
// 1 2 5 3 7 8 6    6

// 1 2 5 3 7 8 6 4


// 7