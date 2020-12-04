// Complete the minimumBribes function below.
function minimumBribes(q) {
    let bribes = 0;
    
    for(let i = 0; i < q.length; i++){
        if ((q[i] - (i + 1)) > 2) { //too chaotic if there were more than 2 jumps
            return "Too chaotic";
            return;
        }

        //if a person was bribed
        else if (q[i] < i + 1) {
            //iterate through q up to i
            for(let j = 0; j < i; j++) {
                if (q[j] > q[i]) {
                    bribes++;
                }
            }
        }
    }

    return bribes;
}

console.log(minimumBribes([ 1, 2, 5, 3, 7, 8, 6, 4]));