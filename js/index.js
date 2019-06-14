var len = document.querySelector('.list').childElementCount; 
var id;
function slideTo(index) {
    if (index === len) {
        currentIndex = index = 0;
    }

    if (index === -1) {
        currentIndex = index = len - 1;
    }
    document.querySelector('.current').classList.remove('current')
    var items = document.querySelectorAll('.item')
    var item = items[index]
    item.classList.add('current')

    document.querySelector('.focus').classList.remove('focus');
    document.querySelectorAll('.pagination li')[index].classList.add('focus')
    
}

var currentIndex = 0;

function slideNext() {
    currentIndex++;
    slideTo(currentIndex)
}

function slidePrev() {
    currentIndex--
    slideTo(currentIndex)
}


var dots = document.querySelectorAll('.slider .pagination li')
for (var i = 0; i < dots.length; i++) {
    dots[i].cuijn_index = i;
    dots[i].onmouseover = function () {
        currentIndex = this.cuijn_index
        slideTo(currentIndex);
    }
}

function autoPlay() {
    id = setInterval(slideNext, 3000)
}
autoPlay()

document.querySelector('.slider').onmouseover = function () {
    clearInterval(id)
}

document.querySelector('.slider').onmouseout = function () {
    autoPlay()
}
