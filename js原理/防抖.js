function debounce(func, delay) {
    let timeoutId;  // 记录定时器ID

    return function (...args) {
        clearTimeout(timeoutId);  // 清除之前的定时器

        timeoutId = setTimeout(() => {
            func.apply(this, args);  // 执行原始函数
        }, delay);
    };
}

// 示例用法
const debouncedFunc = debounce(() => {
    console.log("Debounced function is executed!");
}, 1000);

// 触发频率高，但只在最后一次触发后的1秒内执行一次
for (let i = 0; i < 5; i++) {
    setTimeout(debouncedFunc, 200 * i);
}
