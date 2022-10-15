//先执行宏任务，再执行微任务

//web:
//微任务：MutationObserver、Promise.then catch finally
//宏任务： I/O、setTimeout、setInterval、requestAnimationFrame、js主线程

//任务：同步任务
//     异步任务：宏任务、微任务

// 当前"js主线程"作为第一个宏任务先执行，然后依次执行里面的同步任务、微任务
// settimeout作为第二个宏任务放入宏任务队列，先执行完第一个宏任务"js主线程"的微任务：Promise.then()
// 最后执行第二个宏任务setTimeout


setTimeout(_ => console.log(4));//宏任务，先执行完"js主线程"宏任务下的微任务，最后再执行console.log(4)

new Promise(resolve => {
    resolve()
    console.log(1);//同步任务
}).then(_ => {
    console.log(3);//"js主线程"下的微任务
})

console.log(2); //同步任务

//打印结果： 1 2 3 4
