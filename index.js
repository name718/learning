function debouce(func, wait) {
    let timeout
    return function (...args) {
        const context = this
        const last = function () {
            timeout = null
            func.apply(context, args)
        }
        clearTimeout(timeout)
        timeout = setTimeout(last, wait)
    }
}

const input = {
    a: {
        b: {
            c: 1,
            d: true,
            e: null,
        },
    },
    f: {
        g: '3',
        h: '4',
        i: '5',
    },
    j: [
        4,
        5,
        {
            x: 7,
            y: 8,
        },
    ],
}

console.log(flatten(input))
// 输出:
// {
// "a.b.c": 1,
// "a.b.d": true,
// "f.g": '3',
// "f.h": '4',
// "f.i": '5',
// "j[0]": 4,
// "j[1]": 5,
// "j[2].x": 7,
// "j[2].y": 8,
// }

function flatten(input) {
    let res = {}
    const flattenHelper = (obj, keyS) => {
        for (const key in obj) {
            const newKey = keyS ? `${keyS}.${key}` : key

            if (obj && typeof obj === 'object' && !Array.isArray(obj[key])) {
                Object.assign(res, flattenHelper(obj[key], newKey))
            } else {
                res[newKey] = obj[key]
            }
        }
    }
    flattenHelper(input,'')
    return res
}
