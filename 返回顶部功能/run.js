
/**
 * 被浏览器缓慢卷走
 * @param ele
 * @param target:要被浏览器卷走的总高度
 */
function scrollRunSlow(ele,target){
    clearInterval(ele.timer);
    ele.timer = setInterval(function () {
        var step = (target-scroll().top)/10; //scroll().top   已经被卷走的高度
        step = step>0 ? Math.ceil(step) : Math.floor(step);
        window.scrollTo(0,scroll().top+step);
        if(Math.abs(target-scroll().top)<=Math.abs(step)){
            window.scrollTo(0,target);
            clearInterval(ele.timer);
        }
    },15)
}

/**
 * 获取被卷去部分的宽高
 * @returns {{left: (Number|number), top: (Number|number)}}
 */
function scroll() {
    return {
        left:window.pageXOffset || document.documentElement.scrollLeft,
        top:window.pageYOffset || document.documentElement.scrollTop
    }
}