/**
 * @param {string} S
 * @return {string}
 */
var compressString = function(S) {
    let ans = '';
    let len = S.length;
    let left = 0;

    while (left < len) {
        let count = 0;
        let currentChar = S[left];

        // 内层循环统计相同字符的数量
        while (left < len && S[left] === currentChar) {
            count++;
            left++;
        }

        // 拼接字符和数量
        ans += `${currentChar}${count}`;
    }

    // 返回结果
    return ans.length < len ? ans : S;
};

// 测试用例
const s = "aabcccccaaa";
console.log("a2b1c5a3" === compressString(s), compressString(s));