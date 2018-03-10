/**
 * 实现被选中的水果按一定顺序移动到另一侧
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
 * 实现全部水果移动按一定顺序移动到另一侧
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
 * 将水果按顺序排在数组中，并添加到父盒子中
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