/**
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */
var canConstruct = function(ransomNote, magazine) {
	const newMagazine = magazine.split('');
for (const char of ransomNote) {
        const index = newMagazine.indexOf(char);
        if (index !== -1) {
            newMagazine.splice(index, 1);
        } else {
            return false;  // Если текущая буква из ransomNote не найдена в magazine, возвращаем false
        }
    }
	return true
};
