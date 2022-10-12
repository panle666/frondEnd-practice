// 对象实现symbol.iterator,使对象被for of遍历
const obj1 = {
    0: 1,
    1: 2,
    length: 2,
    [Symbol.iterator]: function () {
        let index = 0;
        return {
            next() {
                return {
                    value: obj1[index++],
                    done: index > obj1.length //done为true停止
                }
            }
        }
    }
}

const obj2 = {
    0: 1,
    1: 2,
    length: 2,
    [Symbol.iterator]: function* () {
        let index = 0;
        while (index < obj2.length) {
            yield obj2[index++];
        }
    }
}

for (let item of obj1) {
    console.log(item);
}

for (let item of obj2) {
    console.log(item);
}
