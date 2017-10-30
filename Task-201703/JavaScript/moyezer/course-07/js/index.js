// 打开新的窗口!
function windowOpen() {
    window.open('https://www.2345.com', '_blank', 'width = 600, height = 500, top = 100, left = 500');
}
var inp = document.getElementById("input");
inp.onclick = windowOpen;
//end

//计时器
var inum = document.getElementById("inum");
var ialt = document.getElementById("ialt");
ialt.onclick = function () {
    setTimeout("alert('倒计时 4 秒爆炸!')",1000);
    setTimeout("inum.value = 1",2000);
    setTimeout("inum.value = 2",3000);
    setTimeout("inum.value = 3",4000);
    setTimeout("inum.value = 4",5000);
    setTimeout("alert('BOOM BOOM!')",6000);
};
//可控制的计时器
var seti;
var num = 0;
function startCount() {
    document.getElementById('count').value = num;
    num = num +1;
    seti = setTimeout("startCount()",500);
}
var istart = document.getElementById("istart");
istart.onclick = function (){
    startCount();
}
var istop = document.getElementById("istop");
istop.onclick = function () {
    clearTimeout(seti);
}







