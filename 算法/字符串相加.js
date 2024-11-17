/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
var getSum = function (a, b) {
    const aArr = a.split('').reverse(); // 翻转字符串，方便从低位开始加
    const bArr = b.split('').reverse();
    const res = [];
    let carry = 0;
    const len = Math.max(aArr.length, bArr.length);

    for (let i = 0; i < len; i++) {
        const num1 = i < aArr.length ? parseInt(aArr[i], 10) : 0;
        const num2 = i < bArr.length ? parseInt(bArr[i], 10) : 0;
        const sum = num1 + num2 + carry;
        carry = Math.floor(sum / 10);
        res.push(sum % 10);
    }

    if (carry) {
        res.push(carry);
    }

    return res.reverse().join('');
};

console.log(getSum('12', '5')); // 输出: "17"
