// Complete the minimumBribes function below.
function minimumBribes(q) {
	let bribes = 0;
	
	for(var i = 0; i < q.length; i++){
		if ((q[i] - (i+1)) > 2) { //too chaotic if there were more than 2 jumps
			return "Too chaotic";
		} 
	}

	//for each number in q:
	for(var i = 0; i < q.length; i++) {
		//if a person was bribed
		if (q[i] < i + 1) {
			//iterate through q up to i
			for(var j = 0; j < i; j++) {
				if (q[j] > q[i]) {
					bribes++;
				}
			}
		}
	}

	return bribes;
}

console.log(minimumBribes([ 1, 2, 5, 3, 7, 8, 6, 4 ]));

//q 1 2 5 3 7 8 6 4
//a 1 2 3 4 5 6 7 8

//3 was bribed 1
//4 was bribed 4
//6 was bribed 2
// 7