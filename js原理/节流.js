function throttle(func, delay) {
    let lastTime = 0;  // 记录上一次执行的时间戳

    return function (...args) {
        const currentTime = new Date().getTime();  // 获取当前时间戳

        if (currentTime - lastTime >= delay) {
            func.apply(this, args);  // 执行原始函数
            lastTime = currentTime;  // 更新上一次执行的时间戳
        }
    };
}

// 示例用法
const throttledFunc = throttle(() => {
    console.log("Throttled function is executed!");
}, 1000);

// 触发频率高，但只在1秒内执行一次
setInterval(throttledFunc, 200);
