function sockMerchant(n, ar) {
	//create new empty array to store matches
	let matched = [];
	
	//iterate through array- compare the first sock to each and see if it matches
	while (ar.length > 0) {
		let sock = ar[0];
		ar.shift();

		//find index of a matching sock
		let index = ar.findIndex(matchSock => sock === matchSock);

		if (index >= 0) {
			matched.push(sock);
			ar.splice(index, 1);
		}
	}
	return matched.length;
}

console.log(sockMerchant(9, [10, 20, 20, 10, 10, 30, 50, 10, 20]));