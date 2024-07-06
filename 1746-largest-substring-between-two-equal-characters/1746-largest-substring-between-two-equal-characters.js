var maxLengthBetweenEqualCharacters = function(s) {
	let maxDistance = -1;
	let indexMap = {};
	for (let i = 0; i < s.length; i++) {
		let char = s[i];
		if (char in indexMap) {
			maxDistance = Math.max(maxDistance, i - indexMap[char] - 1);
		} else {
			indexMap[char] = i;
		}
	}
	return maxDistance;
};