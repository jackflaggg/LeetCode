/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
	const newArr = []
	for (let i = 0; i < nums.length; i++) {
		for (let j = i; j < nums.length; j++) {
			if (nums[i] + nums[j + 1] === target){
				newArr.push(i, j + 1);
				return newArr
			}
		}
	}
};