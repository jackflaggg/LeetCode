/**
 Do not return anything, modify nums1 in-place instead.
 */
function merge(nums1: number[], m: number, nums2: number[], n: number): void {
	const mergedArray= [...nums1.slice(0, m), ...nums2.slice(0, n)].sort((a, b) => a - b);
	for (let i = 0; i < mergedArray.length; i++) {
		nums1[i] = mergedArray[i];
	}
}