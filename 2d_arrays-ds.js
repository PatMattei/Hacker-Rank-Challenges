//-9 -9 -9 1 1 1 
//0 -9 0 4 3 2
//-9 -9 -9 1 2 3
//0 0 8 6 6 0
//0 0 0 -2 0 0
//0 0 1 2 4 0

//hourglass pattern is: add i+0, i+1, i+2, i+7, i+12, i+12, 1+13 to the arr
//starting point pattern is: i+0, i+1, i+2, +i+3, i+6, i+7....

function hourglassSum(arr) {
	let greatest = 0;

	arr = arr.replace(/\n/g, " ");
	let gridArr = arr.split(' ');
	console.log(gridArr)

	let rowStart = 0; //rowStart to increase by 6 each loop

	//we know there are 16 hourglasses in a 6x6- 16 loops
	for(loop = 1; loop <= 4; loop++) {
		for(rowLoop = 1; rowLoop <= 4; rowLoop++) {
			sum = parseInt(gridArr[rowStart + 0]) + parseInt(gridArr[rowStart + 1]) + parseInt(gridArr[rowStart + 2]) + parseInt(gridArr[rowStart + 7]) + parseInt(gridArr[rowStart + 12]) + parseInt(gridArr[rowStart + 13]) + parseInt(gridArr[rowStart + 14]);
			
			if (sum > greatest) {
				greatest = sum;
			}
			rowStart++
		}
		rowStart += 2;
	}
	return greatest;
}

//0, 1, 2, 7, 11, 12, 13
//1, 2, 3, 8, 12, 13, 14
//2, 3, 4, 9, 13, 14, 15
//3, 4, 5, 10, 14, 15, 16

//6, 7, 8, 13, 18, 19, 20
//7, 8, 9, 14, 19, 20, 21


console.log(hourglassSum('-9 -9 -9 1 1 1\n0 -9 0 4 3 2\n-9 -9 -9 1 2 3\n0 0 8 6 6 0\n0 0 0 -2 0 0\n0 0 1 2 4 0'));
//console.log(hourglassSum("0 1 2 3 4 5\n6 7 8 9 10 11\n12 13 14 15 16 17\n18 19 20 21 22 23\n24 25 26 27 28 29\n30 31 32 33 34 35"));