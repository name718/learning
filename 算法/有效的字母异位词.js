/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function (s, t) {
    return s.split('').sort().sort() === t.split('').sort().sort()
};

console.log(isAnagram('car', 'rac'));
