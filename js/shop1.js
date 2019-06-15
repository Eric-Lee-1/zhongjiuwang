document.querySelector('.left').onmouseover = function () {
    //显示浮动和大图
    document.querySelector('.float').classList.remove('hidden')
    document.querySelector('.right').classList.remove('hidden')
}
document.querySelector('.left').onmouseout = function () {
    //隐藏浮动和大图
    document.querySelector('.float').classList.add('hidden')
    document.querySelector('.right').classList.add('hidden')
}

var float = document.querySelector('.float')
var big = document.querySelector('.right')
document.querySelector('.left').onmousemove = function (evt) {
    //取出鼠标的坐标，设定给float
    var x = evt.offsetX;
    var y = evt.offsetY;

    x = x - float.offsetWidth / 2
    y = y - float.offsetHeight / 2

    if (x < 0) {
        x = 0
    }

    if (x > this.offsetWidth - float.offsetWidth) {
        x = this.offsetWidth - float.offsetWidth
    }

    if (y < 0) {
        y = 0
    }

    if (y > this.offsetHeight - float.offsetHeight) {
        y = this.offsetHeight - float.offsetHeight
    }


    //计算大图背景图的位置
    var bigX = -(7/3) * x;
    var bigY = -(7/3) * y;

    big.style.backgroundPosition = `${bigX}px ${bigY}px`;

    float.style.left = x + 'px'
    float.style.top = y + 'px'
}

//取到所有的缩略图，监听onmouseover
var thumbnails = document.querySelectorAll('.thumbnail li');
for(var i=0; i<thumbnails.length; i++) {
    thumbnails[i].onmouseover = function () {
        //this是缩略图的li
        var src = this.querySelector('img').src;
        document.querySelector('.left img').src = src
        document.querySelector('.right').style.backgroundImage = `url(${src.replace('small', 'big')})`
    }
}
