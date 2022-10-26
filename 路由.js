//-------history路由

//修改路由

//param1: data
//param2: title
//param3: url
window.history.pushState(null, null, 'xxx');
// window.history.replaceState()

//由于没有原生API支持监听history.pushState、history.replaceState。
//通过重写两个方法并设置自定义监听事件，调用重写后的方法，方法里面触发自定义事件，在自定义事件回调函数中输出

const bindHistoryEvent = function (type) {
    const historyEvent = history[type];
    return function () {
        const newEvent = historyEvent.apply(this, arguments); //执行history函数
        const e = new Event(type);  //声明自定义事件
        e.arguments = arguments;
        window.dispatchEvent(e);  //抛出事件
        return newEvent;  //返回方法，用于重写history的方法
    };
};

history.pushState = bindHistoryEvent('pushState');
history.replaceState = bindHistoryEvent('replaceState');

window.addEventListener('replaceState', function (e) {
    console.log('调用了replaceState', e);
});
window.addEventListener('pushState', function (e) {
    console.log('调用了pushState', e);
});

//-------history路由


//-------hash路由

//监听hash路由变更
window.addEventListener('hashchange', function (e) {
    console.log('oldURL', e.oldURL);
    console.log('newURL', e.newURL);
})

//修改路由
window.location.hash = 'xxxx';

//-------hash路由