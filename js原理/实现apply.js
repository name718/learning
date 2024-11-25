Function.prototype.myApply = function (context, argsArray) {
    // 如果 context 是 null 或 undefined，则默认指向全局对象
    context = context || globalThis;

    // 使用 Symbol 确保属性唯一性
    const key = Symbol('key');
    context[key] = this;

    // 确保 argsArray 是一个数组或 undefined
    argsArray = argsArray || [];

    // 调用函数并传递参数
    const result = context[key](...argsArray);

    // 删除临时属性
    delete context[key];

    // 返回结果
    return result;
};
