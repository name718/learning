let arr = [1, 2, 3, 4]
let arrIt = arr[Symbol.iterator]()
console.log(arrIt.next())
console.log(arrIt.next())
console.log(arrIt.next())
console.log(arrIt.next())
console.log(arrIt.next())

let obj = {
    a: 1,
    b: 2,
    [Symbol.iterator]() {
        let keys = Object.keys(this);
        let current = 0;
        return {
            next: () => {
                if (current < keys.length) {
                    return {
                        value: this[keys[current++]],
                        done: false
                    };
                } else {
                    return {
                        value: undefined,
                        done: true
                    };
                }
            }
        };
    }
};

for (let value of obj) {
    console.log(value);
}

function add(x) {
    const inner = (y) => add(x + y);
    inner.valueOf = () => x;
    return inner;
}

console.log(+add(1)(2)(3)(4)); // 输出 10
