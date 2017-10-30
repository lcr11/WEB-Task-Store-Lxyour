 document.write("<br>输出点文字</br>");


var abc = document.getElementById("abc");// 获取html ID abc 标签元素 然后变量
    document.write("内容：" + abc.innerHTML);  //JS获取html ID abc 标签元素输出内容:内容:+ 标签内容

var p =document.getElementsByClassName("p"); //获取多个 P标签的元素 然后变量
    for ( var i = 0; i < p.length;i++){    //赋予循环
        alert(p[i].innerHTML);    
    }
/*
var inp = document.getElementsByClassName("iname");
    for( var i = 0; i < inp.length;i++){
        alert(inp[i].value);
    }
var btn = document.getElementById("btn"); //获取元素转化为变量
    btn.onclick = hello;  //鼠标点击btn的时候出发函数
    function hello(){  //函数设定
        var pid = document.getElementById("pid");//获取元素转化变量
        pid.innerHTML ="你好" //pid标签内容改变了    
    }//鼠标点击按钮 pid内容改变


var btn = document.getElementById("btn");
btn.onmouseover = over; //鼠标移到btn=over
btn.onmouseout = out;  //鼠标移开btn=out
    function over(){
        var pid = document.getElementById("pid");
        pid.innerHTML = "over";  //鼠标移动到btn时候,pid输出over
    }
    function out(){
        var pid = document.getElementById("pid");
        pid.innerHTML = "out";  //鼠标移开btn时候,pid输出out
    }

var inp = document.getElementById("input");
inp.onfocus = focus; //获得焦点
inp.onblur = blur; //焦点离开
function focus() {
    var pid = document.getElementById("pid");
    pid.innerHTML = "focus";
}
function blur() {
    var pid = document.getElementById("pid");
    pid.innerHTML = "blur";
}

var inp = document.getElementById("input");
inp.onselect = select; //点击事件
inp.onchange = change; //内容发生改变
function select() {
    var pid = document.getElementById("pid");
    pid.innerHTML = "select";
}
function change() {
    var pid = document.getElementById("pid");
    pid.innerHTML = "change";
}

function rec(){
        var message = confirm("Do you like me?");
        if (message == true) {
            document.write("么么哒！~");
        }else {
            document.write("泥奏凯！");
        }
    }
var inp = document.getElementById("input");
inp.onclick = rec;

 var oDiv = document.getElementById("box");
    oDiv.onmousedown = function (ev) {  //鼠标点击的时候触发的事件
        var oEvent = ev;
        var disX = oEvent.clientX - oDiv.offsetLeft;
        var disY = oEvent.clientY - oDiv.offsetTop;
        document.onmousemove = function (ev) {
            oEvent = ev;
            oDiv.style.left = oEvent.clientX - disX + "px";
            oDiv.style.top = oEvent.clientY - disY + "px";
        }
        document.onmouseup = function () {
            document.onmousemove = null;
            document.onmouseup = null;
        }
    }
    */



var oDiv = document.getElementById("box");
    oDiv.onmousedown = function (ev) {
        var oEvent = ev;
        var disX = oEvent.clientX - oDiv.offsetLeft;
        var disY = oEvent.clientY - oDiv.offsetTop;
        document.onmousemove = function (ev) {
            oEvent = ev;
            oDiv.style.left = oEvent.clientX - disX + "px";
            oDiv.style.top = oEvent.clientY - disY + "px";
        }
        document.onmouseup = function () {
            document.onmousemove = null;
            document.onmouseup = null;
        }
    }