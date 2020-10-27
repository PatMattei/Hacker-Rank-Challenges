// 1 1 1 0 0 0
// 0 1 0 0 0 0
// 1 1 1 0 0 0
// 0 0 2 4 4 0
// 0 0 0 2 0 0
// 0 0 1 2 4 0

//hourglass pattern is: add i, i+1, i+2, i+5, i+11, i+12, 1+13 to the arr
//starting point pattern is: i, i+1, i+2, +i+3, i+6, i+7....

function hourglassSum(arr) {
	arr = arr.replace(/\n/g, " ");
	let gridArr = arr.split(' ');

	let rowStart = 0; //rowStart to increase by 6 each loop



}

//0, 1, 2, 7, 11, 12, 13
//1, 2, 3, 8, 12, 11, 13
//2, 3, 4, 9, 13, 14, 15
//3, 4, 5, 10, 14, 15, 16

//6, 7, 8, 13, 18, 19, 20
//7, 8, 9, 14, 19, 20, 21


console.log(hourglassSum("1 1 1 0 0 0\n0 1 0 0 0 0\n1 1 1 0 0 0\n0 0 2 4 4 0\n0 0 0 2 0 0\n0 0 1 2 4 0"));