var Ewm = document.querySelector('main .w .loginto .Ewm');
var account = document.querySelector('main .w .loginto .account');
var top_Ewn = document.querySelector('main .w .loginto .top p:first-of-type');
var top_account = document.querySelector('main .w .loginto .top p:last-of-type');
var login = document.querySelector('main .w .loginto .account .login')
// console.log(Ewm)
// console.log(account)
// console.log(top_Ewn)
// console.log(top_account)
top_Ewn.onclick = function () {
    top_Ewn.style.fontWeight = 'bolder';
    top_Ewn.style.color = '#e33938';
    top_account.style.fontWeight = '100';
    top_account.style.color = '#1f1f1f'
    Ewm.style.display = 'block';
    account.style.display = 'none';
}

top_account.onclick = function () {
    top_Ewn.style.fontWeight = '100';
    top_Ewn.style.color = '#1f1f1f';
    top_account.style.fontWeight = 'bolder';
    top_account.style.color = '#e33938'
    Ewm.style.display = 'none';
    account.style.display = 'block';

}
login.onclick = function () {
    var username = document.querySelector('#username').value;
    var password = document.querySelector('#password').value;
    console.log(username)
    console.log(password)
    var xhr = new XMLHttpRequest();
    xhr.open('post', '../php/checkedUser.php', true);
    xhr.onreadystatechange = () => {
        if (xhr.readyState !== 4) return;

        if (xhr.status >= 200 && xhr.status < 300) {
            let resp = JSON.parse(xhr.responseText)
            if (resp.result) {
                location.href = "../index.html"
            } else {
                console.log(2222222);
                document.querySelector('main .w .loginto .account div').style.display = 'block';
                document.querySelector('main .w .loginto .account div span').innerHTML = '用户名与密码不匹配'
            }
            if(username ===  ''){
                document.querySelector('main .w .loginto .account div span').innerHTML = '请输入用户名'
            } 
            if( password === ''){
                document.querySelector('main .w .loginto .account div span').innerHTML = '请输入密码'
            }
        
        } 
    }

    xhr.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    xhr.send(`zjw_username=${username}&zjw_password=${password}`);


}





