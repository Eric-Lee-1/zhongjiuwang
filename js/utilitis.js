//utility ===> 工具

function ajax(method, url, data, callback) {
    // console.log(`method=`, method);
    var xhr = new XMLHttpRequest();
    method = method.toLowerCase()
    if (method === 'get') {
        url += `?${data}`
    }
    xhr.open(method, url, true)

    xhr.onreadystatechange = function () {
        if (this.readyState !== 4) return;

        if (this.status >= 200 && this.status < 300) {
            callback(xhr.responseText)
        } else {
            console.error('发送请求失败');
        }
    }

        console.log(`method=`, method);
    if (method === 'get') {
        xhr.send();
    } else {
        xhr.setRequestHeader('Content-Type', "application/x-www-form-urlencoded");
        xhr.send(data);
    }
}
