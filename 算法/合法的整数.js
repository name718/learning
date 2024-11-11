// 提取出字符串中第一个合法的整数。输入：“a12s3”，输出：123
function extractFirstInteger(str) {
    const match = str.match(/\d+/);
    return match ? parseInt(match[0], 10) : null;
}

console.log(extractFirstInteger("a12s3")); // 输出：12
