/*
function windowOpen(){
        window.open('http://www.51rgb.com', '_blank', 'width = 600, height = 400, top = 100, left = 0'); //窗口展开 地址  浏览器新窗口+属性
    }
    var inp = document.getElementById("input");
    inp.onclick = windowOpen;//单击事件


   /*  计时器有四种方法：
    setTimeout() ：在指定的毫秒数后调用函数或计算表达式。
    clearTimeout() ：取消由 setTimeout() 方法设置的 timeout。
    setInterval() ：按照指定的周期（以毫秒计）来调用函数或计算表达式。
    clearInterval() ：取消由 setInterval() 设置的 timeout。
   */
//setTimeout() ：在指定的毫秒数后调用函数或计算表达式。
/*
var inum = document.getElementById("inum");
var ialt = document.getElementById("ialt");
ialt.onclick = function (){
    setTimeout("inum.value = 1",1000)
    setTimeout("inum.value = 233",2000)
    setTimeout("inum.value = 100",3000)
    setTimeout("inum.value = 111",4000)
    setTimeout("inum.value = 59",5000)
    setTimeout("inum.value = 1",8000)
    setTimeout("inum.value = 991",10000)
}

//clearTimeout() ：取消由 setTimeout() 方法设置的 timeout。
var seti;
var num = 0;
function startCount(){
    document.getElementById('count').value = num;
    num = num + 1;
    seti = setTimeout("startCount()", 1000);
}
var istart = document.getElementById("istart");
istart.onclick = function () {
    startCount();
}
var istop = document.getElementById("istop");
istop.onclick = function () {
    clearTimeout(seti);
}
*/
/*
//这是简单的使用历史记录history.go()
var back = document.getElementById('back');
        var next = document.getElementById('next');
        back.onclick = function (){
            history.go(-1)
        }
        next.onclick = function (){
            history.go(1)
        };

//时间日期
function clock(){
    var time = new Date();//日期
    var attime = time.getHours() + ":" + time.getMinutes() + ":" + time.getSeconds();//getHours 小时   getMinutes  分钟   getSeconds 秒钟
    document.getElementById("clock").value = attime;
}
setInterval(clock,1000); //设置时间间隔


var setid = null;
var time = 0;
var attime = 0;
function clock(){
    var time = new Date();
    var attime = time.getHours() + ":" + time.getMinutes() + ":" + time.getSeconds();
    document.getElementById("clock").value = attime;
}
var istart =document.getElementById("istart");
istart.onclick = function(){
    setid = setInterval(clock,100);
}
var istop = document.getElementById("istop");
istop.onclick = function(){
    clearInterval(setid);
}
//总结 函数内首先变量了time等于电脑日期,attime等于日期的时 分 秒单位和xx:xx:xx,获得html代码里的clock等于attime, istart鼠标点击等于函数setid(等于零的)=时间 clock函数 后面值的间隔,istop鼠标点击等于函数 解除计时器(setid等于零的)
*/

var u_agent =  navigator.userAgent;     ; 
var B_name="不是想用的主流浏览器!"; 
if(u_agent.indexOf("Firefox")>-1){ 
    B_name="Firefox"+"火狐浏览器"; 
}else if(u_agent.indexOf("Chrome")>-1){ 
    B_name="Chrome"+"谷歌浏览器"; 
}else if(u_agent.indexOf("MSIE")>-1 && u_agent.indexOf("Trident")>-1){ 
    B_name="IE(8-10)";  
}

document.write("浏览器:"+B_name+"<br>");
//document.write("u_agent:"+u_agent+"<br>");
/*
var ua = navigator.userAgent;
function add(){
if (ua.indexOf("Windows NT 5.1") != -1){ alert ("Windows XP");}
if (ua.indexOf("Windows NT 6.0") != -1){ alert ("Windows Vista");}
if (ua.indexOf("Windows NT 6.1") != -1){ alert ("Windows 7");}
if (ua.indexOf("iPhone") != -1){ alert ("iPhone");}
if (ua.indexOf("iPad") != -1){ alert ("iPad");}
}
var win=add();

document.write("操作系统:"+win+"<br>")*/
  function name(){
            var u_agent =  navigator.userAgent;
            var B_name="不是想用的主流浏览器!"; 
            if(u_agent.indexOf("Firefox")>-1){ 
                B_name="Firefox"; 
            }else if(u_agent.indexOf("Chrome")>-1){ 
                B_name="Chrome"; 
            }else if(u_agent.indexOf("MSIE")>-1 && u_agent.indexOf("Trident")>-1){ 
                B_name="IE(8-10)";  
            }
            return{B_name};
        }
        var res = name();
        var arr = [];
        arr.splice(0,0,res.B_name,navigator.platform);
        document.write(arr);
        console.log(arr);

