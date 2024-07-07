/**
 * @param {number[]} arr
 * @return {number}
 */
var sumOddLengthSubarrays = function(arr) {
	let res = 0;
	for (let i = 0; i < arr.length; i++) {
		for (let j = i; j < arr.length; j++) {
			if (arr.slice(i, j + 1).length % 2 !== 0) {
				res += arr.slice(i, j + 1).reduce((acc, item) => acc + item, 0);
			}
		}
	}
	return res;
};