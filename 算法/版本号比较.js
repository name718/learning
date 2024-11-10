/**
 * @param {string} version1
 * @param {string} version2
 * @return {number}
 */
var compareVersion = function (version1, version2) {
    const version1Arr = version1.split('.').map((num) => Number(num));
    const version2Arr = version2.split('.').map((num) => Number(num));
    const maxLen = Math.max(version1.length, version2.length);
    for (let i = 0; i < maxLen; i++) {
        const num1 = version1Arr[i] ?? 0
        const num2 = version2Arr[i] ?? 0
        if (num1 > num2) {
            return 1;
        } else if (num1 < num2) {
            return -1
        }
    }
    return 0;
};
const version1 = "1.0.1";
const version2 = "1";
console.log(compareVersion(version1, version2));
