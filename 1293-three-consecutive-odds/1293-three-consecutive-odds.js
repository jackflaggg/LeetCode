/**
 * @param {number[]} arr
 * @return {boolean}
 */
var threeConsecutiveOdds = function(arr) {
	for (let i = 0; i < arr.length - 2; i++) {
		if ((arr[i] * arr[i+1] * arr[i+2]) % 2 !== 0 )  {
			return true
		}
	}
	return false;
};