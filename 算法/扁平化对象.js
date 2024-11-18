/**
 * @param {Object} obj - 要扁平化的对象
 * @param {String} prefix - 当前键的前缀
 * @param {Object} result - 保存结果的对象
 */
function flatten(obj, prefix = '', result = {}) {
    for (const key in obj) {
        if (obj.hasOwnProperty(key)) {
            const path = Array.isArray(obj) ? `${prefix}[${key}]` : `${prefix}${prefix ? '.' : ''}${key}`;
            if (typeof obj[key] === 'object' && obj[key] !== null && !Array.isArray(obj[key])) {
                // 递归处理嵌套对象
                flatten(obj[key], path, result);
            } else if (Array.isArray(obj[key])) {
                // 递归处理数组
                flatten(obj[key], path, result);
            } else {
                // 保存扁平化的键值对
                result[path] = obj[key];
            }
        }
    }
    return result;
}

// 测试输入
const input = {
    a: {
        b: {
            c: 1,
            d: true,
            e: null,
        },
    },
    f: {
        g: '3',
        h: '4',
        i: '5',
    },
    j: [
        4,
        5,
        {
            x: 7,
            y: 8,
        },
    ],
};

console.log(flatten(input));
