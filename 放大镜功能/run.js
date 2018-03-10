/**
 * 获取元素的属性，返回的是一个带单位的属性值
 * @param ele
 * @param attr
 * @returns {*}
 */
function getStyle(ele,attr) {
//if(window.getComputedStyle && typeof window.getComputedStyle === "function"){

//if(window.getComputedStyle != undefined){
    if(window.getComputedStyle){
        return window.getComputedStyle(ele,null)[attr];
    }else{
        return ele.currentStyle[attr];
    }

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

/**
 * 设置元素节点隐藏
 * @param ele
 */
function hide(ele) {
    ele.style.display = "none";
}

/**
 * 设置元素节点出现
 * @param ele
 */
function show(ele) {
    ele.style.display = "block";
}