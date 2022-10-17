//将add(1,2,3) 转化为add(1)(2)(3)

function curry(func) {
    return function curried(...args) {
        if (args.length >= func.length) {
            return func.apply(this, args);
        } else {
            return function (...arg2) {
                return curried.apply(this, args.concat(arg2));
            }
        }
    }
}


function add(a, b, c) {
    return a + b + c;
}

add = curry(add);

add(1)(2)(3);