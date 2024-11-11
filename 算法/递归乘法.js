/**
 * @param {number} A
 * @param {number} B
 * @return {number}
 */
//  1.	分解问题：将乘法拆分为重复的加法。例如，a * b 可以看作 a + (a * (b - 1))，一直递归到 b 为 0 时的基准情况。
// 	2.	基准情况：递归的终止条件很关键，可以设定当 b == 0 时结果为 0。
// 	3.	递归调用：每次递归调用减少 b 的值，直到满足基准情况为止。
var multiply = function (A, B) {
    if (B === 0) return 0;
    if (B > 0) {
        return A + multiply(A, B - 1)
    }
    return  -multiply(A,  -B)
};
console.log(multiply(2, -3))
