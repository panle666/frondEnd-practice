//由于引用类型赋值只会复制栈空间的引用地址，内容一旦修改会影响其它变量，故而要实现深拷贝，将引用关系分离
const obj1 = { name: 'a' };

function deepClone(initalObj, finalObj) {
    var obj = finalObj || {};
    for (var i in initalObj) {
        var prop = initalObj[i];        // 避免相互引用对象导致死循环，如initalObj.a = initalObj的情况
        if (prop === obj) {
            continue;
        }
        if (typeof prop === 'object') {
            obj[i] = (prop.constructor === Array) ? [] : {};
            deepClone(prop, obj[i]);
        } else {
            obj[i] = prop;
        }
    }
    return obj;
}

// const obj2 = structuredClone(obj1);
const obj2 = deepClone(obj1);

obj2.name = 'b';
console.log(obj1.name);// a
console.log(obj2.name);// b