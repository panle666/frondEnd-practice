//ajax原理是通过XmlHttpRequest向服务器发送异步请求，获取服务器数据从而达到异步加载数据的需求

//open()与服务端建立连接
//send()发送给服务器

///封装一个ajax请求
function ajax(options) {
    //创建XMLHttpRequest对象
    const xhr = new XMLHttpRequest();


    //初始化参数的内容
    options = options || {};
    options.type = (options.type || 'GET').toUpperCase();
    options.dataType = options.dataType || 'json';
    const params = options.data;

    //发送请求
    if (options.type === 'GET') {
        if (params) {
            options.url = `${options.url}?${params}`;
        }
        xhr.open('GET', options.url, true);
        xhr.send();
    } else if (options.type === 'POST') {
        xhr.open('POST', options.url, true);
        xhr.send(params);
    }
    //接收请求
    xhr.onreadystatechange = function () {
        if (xhr.readyState === 4) {
            let status = xhr.status;
            if (status >= 200 && status < 300) {
                options.success && options.success(xhr.responseText, xhr.responseXML)
            } else {
                options.fail && options.fail(status)
            }
        }
    }
}

ajax({
    type: 'get',
    dataType: 'json',
    data: '',
    url: 'http://api.inlife.ink/article',
    success: function (text, xml) {//请求成功后的回调函数
        console.log(text)
    },
    fail: function (status) {////请求失败后的回调函数
        console.log(status)
    }
})