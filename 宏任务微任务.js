//先执行微任务，再执行宏任务

//web:
//微任务：MutationObserver、Promise.then catch finally
//宏任务： I/O、setTimeout、setInterval、requestAnimationFrame


setTimeout(_ => console.log(4));

new Promise(resolve => {
    resolve()
    console.log(1);
}).then(_ => {
    console.log(3);
})

console.log(2); // 1 2 3 4

