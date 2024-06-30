/**
 * @param {number} num
 * @return {number}
 */
var numberOfSteps = function(num, count = 0) {
	while (num > 0){
        num % 2 === 0 ? num /= 2 : num--;
		count ++
	}
	return count;
};