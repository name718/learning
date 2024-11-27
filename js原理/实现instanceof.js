function myInstanceof(left, right) {
    let proto = Object.getPrototypeOf(left); // 获取对象的原型
    while (proto) {
        if (proto === right.prototype) {
            return true;
        }
        proto = Object.getPrototypeOf(proto); // 一直向上查找原型链
    }
    return false;
}