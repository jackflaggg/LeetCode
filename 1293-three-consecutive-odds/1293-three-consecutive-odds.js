/**
 * @param {number[]} arr
 * @return {boolean}
 */
var threeConsecutiveOdds = function(arr) {
	for (let i = 0; i < arr.length; i++) {
		if (arr[i] % 2 !== 0 && (arr[i+1] % 2 !== 0 && typeof arr[i+1] === 'number')  && (arr[i+2] % 2 !== 0  && typeof arr[i+2] === 'number'))  {
			return true
		}
	}
	return false;
};