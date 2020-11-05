// 1 1 1 0 0 0
// 0 1 0 0 0 0
// 1 1 1 0 0 0
// 0 0 2 4 4 0
// 0 0 0 2 0 0
// 0 0 1 2 4 0


// Complete the hourglassSum function below.
function hourglassSum(arr) {
    let greatest = -1000;

    let rowStart = 0; //rowStart to increase by 6 each loop
    let countStart = 0;

    //return(parseInt(arr[rowStart+2][countStart+0])+ parseInt(arr[rowStart+0][countStart+0]))
    //we know there are 16 hourglasses in a 6x6- 16 loops
    for(let loop = 1; loop <= 4; loop++) {
        //when done countnig a row, restart to start for next row
        countStart = 0;
        for(let rowLoop = 1; rowLoop <= 4; rowLoop++) {
            let sum = parseInt(arr[rowStart+0][countStart+0]) + parseInt(arr[rowStart+0][countStart+1]) + parseInt(arr[rowStart+0][countStart+2]) + parseInt(arr[rowStart+1][countStart+1]) + parseInt(arr[rowStart+2][countStart+0]) + parseInt(arr[rowStart+2][countStart+1]) + parseInt(arr[rowStart+2][countStart+2]);
            
            console.log(arr[rowStart+0][countStart+0], arr[rowStart+0][countStart+1], arr[rowStart+0][countStart+2], arr[rowStart+1][countStart+1], arr[rowStart+2][countStart+0], arr[rowStart+2][countStart+1], arr[rowStart+2][countStart+2]);
            console.log(sum);
            
            if (sum > greatest) {
                greatest = sum;
            }
            countStart++
        }
        rowStart++
    }
    return greatest;
}

console.log(hourglassSum([[-1, -1, 0, -9, -2, -2],[-2, -1, -6, -8, -2, -5],[-1, -1, -1, -2, -3, -4],[-1, -9, -2, -4, -4, -5],[-7, -3, -3, -2, -9, -9],[-1, -3, -1, -2, -4, -5]]))