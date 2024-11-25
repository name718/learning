Function.prototype.myBind = function (context, ...args) {
    if (typeof this !== 'function') {
        throw new TypeError('Bind must be called on a function');
    }

    const fn = this; // 保存调用 bind 的原函数

    return function boundFunction(...newArgs) {
        // 如果作为构造函数调用，则忽略绑定的 context，`this` 指向实例
        if (this instanceof boundFunction) {
            return new fn(...args, ...newArgs);
        }
        // 普通调用，绑定 context 并合并参数
        return fn.apply(context, [...args, ...newArgs]);
    };
};
