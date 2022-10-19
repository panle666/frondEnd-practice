//在返回的函数中引用局部作用域的变量，使这些本该回收的变量生命延长
//条件1：函数中return一个function
//条件2：return的function中引用局部作用域的变量

function test() {
    const a = '11';//局部变量a
    return function () {
        console.log(a);
    }
}

let callbackFn = test();

callbackFn();//执行callbackFn,打印test函数内部的a


callbackFn = null;//释放闭包的变量，使GC可以正常回收变量a