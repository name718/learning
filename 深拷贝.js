function deepClone(obj, hash = new WeakMap()) {
    // 处理 null 或 undefined 情况
    if (obj === null || typeof obj !== "object") return obj;

    // 处理循环引用
    if (hash.has(obj)) return hash.get(obj);

    // 处理 Date
    if (obj instanceof Date) return new Date(obj);

    // 处理 RegExp
    if (obj instanceof RegExp) return new RegExp(obj);

    // 创建对象或数组副本
    const clone = Array.isArray(obj) ? [] : {};

    // 记录当前对象到 WeakMap 以处理循环引用
    hash.set(obj, clone);

    // 遍历并递归复制每个属性
    for (const key in obj) {
        if (obj.hasOwnProperty(key)) {
            clone[key] = deepClone(obj[key], hash);
        }
    }

    // 处理 Symbol 属性
    const symbolKeys = Object.getOwnPropertySymbols(obj);
    for (const sKey of symbolKeys) {
        clone[sKey] = deepClone(obj[sKey], hash);
    }

    return clone;
}
