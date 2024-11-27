function myNew(fn, ...args) {
    // 创建一个空对象，并将其原型指向构造函数的原型
    const obj = Object.create(fn.prototype);

    // 调用构造函数，将 obj 作为其 this，并传入参数
    const res = fn.apply(obj, args);

    // 如果构造函数返回一个对象，优先返回该对象；否则返回新创建的 obj
    return typeof res === 'object' && res !== null ? res : obj;
}