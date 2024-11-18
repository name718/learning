function observe(obj) {
    if (!obj || typeof obj !== 'object') {
        return obj;
    }
    return new Observer(obj);
}

class Observer {
    constructor(obj) {
        this.walk(obj);
    }

    walk(obj) {
        Object.keys(obj).forEach((key) => {
            if (typeof obj[key] === 'object') {
                observe(obj[key]);
            } else {
                this.defineReactive(obj, key, obj[key]);
            }
        });
    }

    defineReactive(obj, key, value) {
        const dep = new Dep();
        Object.defineProperty(obj, key, {
            configurable: false,
            enumerable: true,
            get() {
                // 收集依赖
                Dep.target && dep.addDep(Dep.target);
                return value;
            },
            set(newValue) {
                if (value === newValue) return;
                value = newValue;
                observe(newValue); // 新值也需要响应式处理
                dep.notify(); // 触发依赖
            }
        });
    }
}

// 依赖收集
class Dep {
    constructor() {
        this.subs = [];
    }

    addDep(watcher) {
        this.subs.push(watcher);
    }

    notify() {
        this.subs.forEach(sub => sub.update());
    }
}

class Watcher {
    constructor(obj, key, callback) {
        this.obj = obj;
        this.key = key;
        this.callback = callback;
        this.value = this.get(); // 触发依赖收集
    }

    get() {
        Dep.target = this; // 将当前 watcher 实例赋值给 Dep.target
        const value = this.obj[this.key]; // 触发 getter，收集依赖
        Dep.target = null; // 依赖收集完毕，重置
        return value;
    }

    update() {
        const newValue = this.obj[this.key];
        const oldValue = this.value;
        if (newValue !== oldValue) {
            this.value = newValue;
            this.callback(newValue, oldValue);
        }
    }
}

// 使用示例
const data = {name: 'Majuntao', age: 25};
observe(data);

new Watcher(data, 'name', (newValue, oldValue) => {
    console.log(`name changed from ${oldValue} to ${newValue}`);
});

data.name = 'Majun'; // 触发更新，输出: name changed from Majuntao to Majun
data.age = 26; // 无输出，因为没有 watcher 订阅 `age`
