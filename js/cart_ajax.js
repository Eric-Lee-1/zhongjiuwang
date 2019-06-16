let xhr = new XMLHttpRequest();
xhr.open("GET", "../php/cart1.php", true)
xhr.onreadystatechange = function () {
    if (xhr.readyState !== 4) return;

    if (xhr.status >= 200 && xhr.status < 300) {
        console.log(xhr.responseText)
        var result = JSON.parse(xhr.responseText);
        console.log(result)
        var resp = JSON.parse(xhr.responseText);
        var trs = resp.map(product => {
            return `
            <tr>
                <td><input type="checkbox" class="option"></td>
                <td><a href="../html/shop1.html"><img src="${product.src}" /><span>${product.name}</span></td>
                <td>￥${product.price}</td>
                <td>${product.count}</td>
                <td><a href="#" class="del">删除</a></td>
            </tr>
            `
        })

        // console.log(trs)
        document.querySelector('tbody').innerHTML = trs.join('')

    } else {

    }
}
xhr.send()
