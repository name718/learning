Function.prototype.myCall = function (context, ...args) {
    // 如果 context 是 null 或 undefined，则默认指向全局对象
    context = context || globalThis;

    // 使用 Symbol 确保属性唯一性
    const key = Symbol('key');
    context[key] = this; // 将函数赋值给 context 的临时属性

    // 调用函数并传递参数
    const result = context[key](...args);

    // 删除临时属性
    delete context[key];

    // 返回结果
    return result;
};
