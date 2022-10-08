// 实现事件分发系统,要求包含三个最基本功能on(监听事件),off(移出事件),emit(触发事件)

class EventEmitter {
    constructor() {
        this._events = {};
    }
    on(event, callback) {
        //监听event事件,触发时调用callback函数
        let callbacks = this._events[event] || [];
        callbacks.push(callback);
        this._events[event] = callbacks;
        return this;
    }
    // 只执行一次订阅事件
    once(type, callBack) {
        function fn() {
            callBack();
            this.off(type, fn);
        }
        this.on(type, fn);
    }

    off(event, callback) {
        //停止监听event事件
        let callbacks = this._events[event];
        this._events[event] = callbacks && callbacks.filter(fn => fn !== callback);
        return this;
    }
    emit(event, ...args) {
        //触发事件,并把参数传给事件的处理函数
        const callbacks = this._events[event];
        callbacks.forEach(fn => fn.apply(null, args));
        return this;
    }
}