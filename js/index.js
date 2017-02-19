var top=document.getElementById("back-top");
var swiper = new Swiper('.swiper-container', {
    direction: 'vertical'
});
top.onclick=function(){
    swiper.slideTo(0, 1000, false);
};
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
        ( slide.scrollHeight > slide.offsetHeight ) && //allow only when slide is scrollable
        (
            ( touchesDiff < 0 && startScroll === 0 ) || //start from top edge to scroll bottom
            ( touchesDiff > 0 && startScroll === ( slide.scrollHeight - slide.offsetHeight ) ) || //start from bottom edge to scroll top
            ( startScroll > 0 && startScroll < ( slide.scrollHeight - slide.offsetHeight ) ) //start from the middle
        );
    if (onlyScrolling) {
        e.stopPropagation();
    }
}, true);
