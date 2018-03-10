/**
 * ʵ�ֱ�ѡ�е�ˮ����һ��˳���ƶ�����һ��
 * @param sel1
 * @param sel2
 */
function someRun(sel1,sel2){
    var opt1 = sel1.children;
    var opt2 = sel2.children;
    var newOpt = [];
    for(var i = 0 ; i < opt2.length;i++){
        newOpt.push(opt2[i]);
    }
    for(var i = 0 ; i < opt1.length;i++){
        if(opt1[i].selected){
            opt1[i].selected = false;
            newOpt.push(opt1[i]);
        }
    }
    run(newOpt,sel2);
}


/**
 * ʵ��ȫ��ˮ���ƶ���һ��˳���ƶ�����һ��
 * @param sel1
 * @param sel2
 */
function allRun(sel1,sel2){
    var opt1 = sel1.children;
    var opt2 = sel2.children;
    var newOpt = [];
    for(var i = 0 ; i < opt1.length;i++){
        opt1[i].selected = false;
        sel2.appendChild(sel1[i]);
        i--;
    }
    for(var i = 0 ; i < opt2.length;i++){
        newOpt.push(opt2[i]);
    }
    for(var i = 0 ; i < opt1.length;i++){
        newOpt.push(opt1[i])
    }
    run(newOpt,sel2);
}

/**
 * ��ˮ����˳�����������У�����ӵ���������
 * @param arr
 * @param sel
 */
function run(arr,sel) {
    arr.sort(function (a,b) {
        return a.value - b.value;
    })
    sel.innerHTML = "";
    for(var i = 0 ; i < arr.length;i++){
        sel.appendChild(arr[i]);
    }
}