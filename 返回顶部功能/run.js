
/**
 * ���������������
 * @param ele
 * @param target:Ҫ����������ߵ��ܸ߶�
 */
function scrollRunSlow(ele,target){
    clearInterval(ele.timer);
    ele.timer = setInterval(function () {
        var step = (target-scroll().top)/10; //scroll().top   �Ѿ������ߵĸ߶�
        step = step>0 ? Math.ceil(step) : Math.floor(step);
        window.scrollTo(0,scroll().top+step);
        if(Math.abs(target-scroll().top)<=Math.abs(step)){
            window.scrollTo(0,target);
            clearInterval(ele.timer);
        }
    },15)
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