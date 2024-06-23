/**
 * @param {number[][]} accounts
 * @return {number}
 */
let maximumWealth = function(accounts) {
	let newArr = []
	accounts.map((elem) => newArr.push(elem.reduce((accum, item) => accum + item, 0)))
	return Math.max(...newArr)
};

console.log(maximumWealth([[1, 2], [2, 3]]))