/**
 * @param {number[]} arr
 * @return {number}
 */
var findLucky = function(arr) {
	const numberCount = new Map();
	arr.map(num => numberCount.has(num) ? numberCount.set(num, numberCount.get(num) + 1) : numberCount.set(num, 1));

	let luckyNumber = -1;

	// Находим "счастливое" число
	numberCount.forEach((count, num) => {
		if (num === count && num > luckyNumber) {
			luckyNumber = num;
		}
	});

	return luckyNumber;
};