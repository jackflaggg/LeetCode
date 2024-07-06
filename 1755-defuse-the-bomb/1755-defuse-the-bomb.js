/**
 * @param {number[]} code
 * @param {number} k
 * @return {number[]}
 */
function decrypt(code, k) {
	const decrypted = Array(code.length).fill(0);

	for (let i = 0; i < code.length; i++) {
		for (let j = 1; j <= Math.abs(k); j++) {
			if (k > 0) {
				decrypted[i] += code[(i + j) % code.length];
			} else if (k < 0) {
				decrypted[i] += code[(i - j + code.length) % code.length];
			}
		}
	}

	return decrypted;
}