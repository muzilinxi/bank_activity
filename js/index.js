var oTop = document.getElementById("back-top");
var swiper = new Swiper('.swiper-container', {
    direction: 'vertical'
});

top.onclick = function () {
    swiper.slideTo(0, 1000, false);
};

var screenw = document.documentElement.clientWidth || document.body.clientWidth;
var screenh = document.documentElement.clientHeight || document.body.clientHeight;
oTop.style.left = screenw - oTop.offsetWidth + "px";
oTop.style.top = screenh - oTop.offsetHeight + "px";
window.onscroll = function () {
    var scrolltop = document.documentElement.scrollTop || document.body.scrollTop;
    oTop.style.top = screenh - oTop.offsetHeight + scrolltop + "px";
}

var startScroll, touchStart, touchCurrent;
swiper.slides.on('touchstart', function (e) {
    startScroll = this.scrollTop;
    touchStart = e.targetTouches[0].pageY;
}, true);
swiper.slides.on('touchmove', function (e) {
    touchCurrent = e.targetTouches[0].pageY;
    var touchesDiff = touchCurrent - touchStart;
    var slide = this;
    var onlyScrolling =
        ( slide.scrollHeight > slide.offsetHeight ) &&
        (
            ( touchesDiff < 0 && startScroll === 0 ) ||
            ( touchesDiff > 0 && startScroll === ( slide.scrollHeight - slide.offsetHeight ) ) ||
            ( startScroll > 0 && startScroll < ( slide.scrollHeight - slide.offsetHeight ) )
        );
    if (onlyScrolling) {
        e.stopPropagation();
    }
}, true);
