var search = function(nums, target) {
    let left = 0;
    let right = nums.length - 1;
    while (left <= right) {
        let mid = Math.floor((right + left) / 2); // 使用 Math.floor 来确保 mid 是整数
        if (nums[mid] === target) {
            return true; // 找到目标，返回其索引
        } else if (nums[mid] > target) {
            right = mid - 1; // 目标在左半部分，更新 right
        } else {
            left = mid + 1; // 目标在右半部分，更新 left
        }
    }
    return false; // 如果找不到目标，返回 -1
};
let func = (matrix, target) => {
    // 二分查找每行
    // const search = (list, tar) => {
    //     let left = 0;
    //     let right = list.length - 1;
    //     while (left <= right) {
    //         let mid = Math.floor((left + right) / 2);
    //         if (list[mid] === tar) {
    //             return true;
    //         } else if (list[mid] > tar) {
    //             right = mid - 1;
    //         } else {
    //             left = mid + 1;
    //         }
    //     }
    //     return false;
    // };

    // 二维数组按行逐个搜索
    for (let i = 0; i < matrix.length; i++) {
        const result = search(matrix[i], target);
        if (result) {
            return result;
        }
    }
    return false;
};

const matrix = [
    [1, 4, 7, 11],
    [2, 5, 8, 12],
    [3, 6, 9, 16],
    [10, 13, 14, 17]
];
const target = 5;
console.log(func(matrix, target));  // 输出: true
