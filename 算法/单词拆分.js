/**
 * @param {string} s
 * @param {string[]} wordDict
 * @return {boolean}
 */
var wordBreak = function(s, wordDict) {
    // 将 wordDict 转换为 Set，以加速查找
    const wordSet = new Set(wordDict);

    // dp[i] 表示 s[0...i-1] 是否可以由字典中的单词拼接而成
    const dp = new Array(s.length + 1).fill(false);
    dp[0] = true;  // 空字符串可以拼接

    // 遍历字符串 s
    for (let i = 1; i <= s.length; i++) {
        // 检查从位置 j 到 i 是否能拼接出字典中的单词
        for (let j = 0; j < i; j++) {
            if (dp[j] && wordSet.has(s.substring(j, i))) {
                dp[i] = true;
                break;  // 一旦找到就可以停止，继续检查下一个 i
            }
        }
    }

    return dp[s.length];
};

const s = "leetcode";
const wordDict = ["leet", "code"];
console.log(wordBreak(s, wordDict));  // 输出: true
