/**
 * ��ȡԪ�ص����ԣ����ص���һ������λ������ֵ
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
 * ��ȡ����ȥ���ֵĿ��
 * @returns {{left: (Number|number), top: (Number|number)}}
 */
function scroll() {
    return {
        left:window.pageXOffset || document.documentElement.scrollLeft,
        top:window.pageYOffset || document.documentElement.scrollTop
    }
}

/**
 * ����Ԫ�ؽڵ�����
 * @param ele
 */
function hide(ele) {
    ele.style.display = "none";
}

/**
 * ����Ԫ�ؽڵ����
 * @param ele
 */
function show(ele) {
    ele.style.display = "block";
}