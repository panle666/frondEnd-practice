Array.prototype.myReduce = function (fn, init) {
    let len = this.length;
    let pre = init;
    let i = 0;
    //判断是否传入初始值
    if (init == undefined) {
        //没有传入初始值，数组第一位默认为初始值，当前元素索引值变为1。
        pre = this[0];
        i = 1;
    }
    for (i; i < len; i++) {
        //当前函数返回值为下一次的初始值
        pre = fn(pre, this[i], i)
    }
    return pre;
}

function compose(...fn) {
    if (!fn.length) return (v) => v;
    if (fn.length === 1) return fn[0];
    return fn.myReduce(
        (pre, cur) => {
            return (args) => {
                return pre(cur(args))
            }
        })
}

// 用法如下:
function fn1(x) {
    return x + 1;
}
function fn2(x) {
    return x + 2;
}
function fn3(x) {
    return x + 3;
}
function fn4(x) {
    return x + 4;
}
const a = compose(fn1, fn2, fn3, fn4);
console.log(a(1)); // 1+4+3+2+1=11