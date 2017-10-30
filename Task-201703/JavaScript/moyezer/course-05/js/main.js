/*
var pid = document.getElementById("pid");
document.write("内容" + pid.innerHTML);
*/


/*var p = document.getElementsByTagName("p");
for(var i = 0; i<p.length; i++){
    console.log(p[i].innerHTML);
}*/


var inp = document.getElementsByName("iname");
for (var i = 0; i < inp.length; i++) {
    console.log(inp[i].value);
}

var btn = document.getElementById("btn");
btn.onclick = attr;

function attr() {
    /*  var pid = document.getElementById("pid");
      alert(pid.getAttribute("id"));
      alert(pid.getAttribute("title"));
      pid.setAttribute("title", "hello");
      alert(pid.getAttribute("title"));*/

    var pid = document.getElementById("pid");
    pid.innerHTML = "哇塞~";
    console.log(pid.innerHTML);
}

var btn = document.getElementById("btn");
btn.onmouseover = over;
btn.onmouseout = out;

function over() {
    var pid = document.getElementById("menkou");
    menkou.innerHTML = "进来了";
}

function out() {
    var pid = document.getElementById("chukou");
    chukou.innerHTML = "出去了";
}


//光标焦点与失去焦点
var wenben = document.getElementById('wenben');
wenben.onfocus = function(e) {
    abc.innerHTML = '想要买';
}
wenben.onblur = function(e) {
    ab.innerHTML = '不要了';
}


//输入框内容选中与改变
var titi = document.getElementById('titi');
titi.onselect = function(e) {
    fff.innerHTML = '你选中了我';
}
titi.onchange = function(e) {
     fff.innerHTML = '你离开了我';
}

//确认框
function rec() {
    var mesge = confirm('确定提交吗？');
    if(mesge == true) {
        confirm('提交成功！');
    }else {
        confirm('你取消了提交！ ');
    }
}
var wer = document.getElementById('input');
wer.onclick = rec;


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

    
//事件委托
var ulTag = document.getElementById('ulTag');
ulTag.onclick = function(e) {
    var target = e.target;
    var tagName = target.tagName.toLowerCase();
    console.log(tagName);
    if (tagName === 'li') {
//        var val = target.innerHTML;
        var val = target.textContent;
        console.log(val);
    }
}









