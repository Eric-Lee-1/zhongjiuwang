var tel = document.querySelector('#tel')
var tel_show = document.querySelector('.tel_show')
var yz1,yz2,yz3,yz4,yz5,yz6 ='';
tel.onclick = function () {
    tel.parentElement.style.borderColor = '#7ac23c';
    tel_show.style.opacity = 1;
    tel_show.innerHTML = '请输入手机号码';
    tel_show.style.borderColor = '#cccccc';
    tel_show.style.color = '#666666';
    tel_show.style.backgroundColor = '#ffffff';
}
tel.onblur = function () {

    tel.parentElement.style.borderColor = '#cccccc';
    var Tel = /1[3-9]\d{9}/
    var tel1 = this.value;
    console.log(tel1);
    if (Tel.test(tel1)) {
        tel_show.style.opacity = 0;
        yz1='true';
        ajax('get','../php/regist.php','zjw_username='+tel1,function(resp){
            resp = JSON.parse(resp)
            if(resp.result === false){
                console.log(1222222222)
                tel_show.style.opacity = 1;
                tel_show.innerHTML = '该手机号码已注册';
                tel_show.style.borderColor = '#ffbdbe';
                tel_show.style.color = '#e3393c';
                tel_show.style.backgroundColor = '#ffebeb';
                yz1= 'false';        
            }
        })
    } else if (tel1 === "") {
        tel_show.innerHTML = '请输入手机号码';
        tel_show.style.borderColor = '#ffbdbe';
        tel_show.style.color = '#e3393c';
        tel_show.style.backgroundColor = '#ffebeb';
        yz1= 'false';
    } else {
        tel_show.innerHTML = '请输入正确手机号码';
        tel_show.style.borderColor = '#ffbdbe';
        tel_show.style.color = '#e3393c';
        tel_show.style.backgroundColor = '#ffebeb';
        yz1= 'false';
    }
}


var password = document.querySelector('#password')
var password_show = document.querySelector('.password_show')
password.onclick = function () {
    password.parentElement.style.borderColor = '#7ac23c';
    password_show.style.opacity = 1;
    password_show.innerHTML = '6-20位字符，可使用字母、数字或符号的组合，不建议使用纯数字、纯字母、纯符号';
    password_show.style.borderColor = '#cccccc';
    password_show.style.color = '#666666';
    password_show.style.backgroundColor = '#ffffff';
}
password.onblur = function () {
    password.parentElement.style.borderColor = '#cccccc';
    var Password = /\w{6,20}/
    var password1 = this.value;
    if (Password.test(password1)) {
        password_show.style.opacity = 0;
        yz2='true';
    } else if (password1 === "") {
        password_show.innerHTML = '密码长度只能在6-20之间，不包含空格';
        password_show.style.borderColor = '#ffbdbe';
        password_show.style.color = '#e3393c';
        password_show.style.backgroundColor = '#ffebeb';
        yz2= 'false';
    } else {
        password_show.innerHTML = '密码长度只能在6-20之间，不包含空格';
        password_show.style.borderColor = '#ffbdbe';
        password_show.style.color = '#e3393c';
        password_show.style.backgroundColor = '#ffebeb';
        yz2= 'false';
    }
}

var con_password = document.querySelector('#con_password')
var con_password_show = document.querySelector('.con_password_show')
con_password.onclick = function () {
    con_password.parentElement.style.borderColor = '#7ac23c';
    con_password_show.style.opacity = 1;
    con_password_show.innerHTML = '请再次输入密码';
    con_password_show.style.borderColor = '#cccccc';
    con_password_show.style.color = '#666666';
    con_password_show.style.backgroundColor = '#ffffff';
}
con_password.onblur = function () {
    con_password.parentElement.style.borderColor = '#cccccc';
    var con_password1 = this.value;
    if (password.value === con_password1) {
        con_password_show.style.opacity = 0;
        yz3='true';
    } else if (con_password1 === "") {
        yz3= 'false';
    } else {
        con_password_show.innerHTML = '两次输入密码不一致';
        con_password_show.style.borderColor = '#ffbdbe';
        con_password_show.style.color = '#e3393c';
        con_password_show.style.backgroundColor = '#ffebeb';
        yz3= 'false';
    }
}

var verify = document.querySelector('#verify')
var verify_show = document.querySelector('.verify_show')
verify.onclick = function () {
    verify.style.borderColor = '#7ac23c';
    // console.log(verify_show)
}
verify.onblur = function () {
    verify.style.borderColor = '#cccccc';
    var Verify = /\d{6}/
    var verify1 = this.value;
    if (Verify.test(verify1)) {
        verify_show.style.opacity = 0;
        yz4='true';
    } else if (verify1 === "") {
        verify_show.style.opacity = 1;
        verify_show.innerHTML = '请输入验证码';
        verify_show.style.borderColor = '#ffbdbe';
        verify_show.style.color = '#e3393c';
        verify_show.style.backgroundColor = '#ffebeb';
        yz4= 'false';
    } else {
        verify_show.style.opacity = 1;
        verify_show.innerHTML = '验证码不正确或已超时';
        verify_show.style.borderColor = '#ffbdbe';
        verify_show.style.color = '#e3393c';
        verify_show.style.backgroundColor = '#ffebeb';
        yz4= 'false';
    }
}



var checked_box = document.querySelector('#checked_box')
var checked_box_show = document.querySelector('.checked_box_show')
var check_on = document.querySelector('.check_on')
check_on.parentElement.onclick = function () {
    let check2 = checked_box.checked;
    if (check2 === true) {
        checked_box.checked = false;
        checked_box_show.style.opacity = 1;
        checked_box_show.innerHTML = '请仔细阅读并同意以上协议';
        checked_box_show.style.borderColor = '#ffbdbe';
        checked_box_show.style.color = '#e3393c';
        checked_box_show.style.backgroundColor = '#ffebeb';
        yz5= 'false';
    } else if (check2 === false) {
        checked_box.checked = true;
        checked_box_show.style.opacity = 0;
        yz5='true';
    }

}

var box_move = document.querySelector('.box_move');
var follow = document.querySelector('.follow');
var move_on = document.querySelector('.move_on');
yz6= 'false';
move_on.onmousedown = function (evt) {
    evt.preventDefault();
    var x = evt.offsetX;
     // console.log(move_on)
    move_on.onmousemove = function (evt) {
        evt.preventDefault();
        var dist = evt.offsetX - x;
        if (dist < 0) {
            dist = 0
        } else if (dist > 220) {
            dist = 220
        }
        // console.log(dist)
        follow.style.width = dist + 'px';
        if (dist === 220) {
            yz6 ='true';
            follow.innerHTML = '验证通过';
            follow.style.color = 'white';
            // console.log(box_move.children);
            box_move.childNodes[0].src = '../imgs/regist/qrcode-succ-2016.png'
            box_move.childNodes[0].style.width = '16px'; box_move.childNodes[0].style.height = '16px';
            box_move.childNodes[0].style.margin = '10px 16px';
            // console.log(box_move.childNodes[0].css)
            move_on.style.display = 'none';
        }
        box_move.style.left = dist + 'px';
    }
    window.onmouseup = function (evt) {
        evt.preventDefault;
        move_on.onmousemove = null;
        window.onmouseup = null;
    }
}
window.onclick= function(){
    // console.log(yz1);
    // console.log(yz2);
    // console.log(yz3);
    // console.log(yz4);
    // console.log(yz5);
    // console.log(yz6);
    // console.log(yz1 === 'true'&& yz2 === 'true'&& yz3 === 'true'&& yz4 === 'true'&& yz5 === 'true'  && yz6 === 'true');
    if(yz1 === 'true'&& yz2 === 'true'&& yz3 === 'true'&& yz4 === 'true'&& yz5 === 'true'  && yz6 === 'true'){
        console.log(1111111111);
        document.querySelector('.up1').style.display = 'none';
    }else{
        document.querySelector('.up1').style.display = 'block';
    }
}


var bottom = document.querySelector('.bottom');
console.log(bottom)
bottom.onclick =function(){
    var usernameValue = tel.value;
    var passwordValue = password.value;
    ajax(
        'post',
        "../php/User&Pass_Up.php",`zjw_username=${usernameValue}&zjw_password=${passwordValue}`,function(resp){
            resp = JSON.parse(resp)
            console.log(resp);
            if(resp.result){
                location.href='./login.html'
            }
        }
    )
}
