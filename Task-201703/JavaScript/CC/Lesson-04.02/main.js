////函数声明
document.write("1.函数声明"+"<br />");
function add() {
    var sum = 3 + 2;
    document.write(sum);
}
add();

//带参数的函数
document.write("<br />"+"2.带参数的函数"+"<br />");
function add(x,y){
    var x = 1;
    var y = 2;
    var sum = x + y;
    document.write(sum);
}
add();
//函数的返回值
document.write("<br />"+"3.函数的返回值"+"<br />");
function  app(x,y)
  { var sum,x,y;
    var sum = x * y;
    return sum;
  }
 var req1 = app(5,6);
 var req2 = app(2,3);
 var sumq = req1 + req2;
document.write("req1的值:"+req1+"<br/>");
document.write("req2的值:"+req2+"<br/>");
document.write(req1+"与"+req2+"和:"+sumq);
//闭包
//闭包的作用
//1.可以读取函数内部的变量；
document.write("<br />"+"闭包的作用:1.可以读取函数内部的变量"+"<br />");
function outer(){
    var a = 2;
    function inner(){
        document.write(a);
    }
    return inner();
}
outer();
////2.让这些变量的值始终保持在内存中。
//document.write("<br />"+"闭包的作用:2.让这些变量的值始终保持在内存中.示例1："+"<br />");
//var add = null;
//function outer () {
//    var a = 999;
//
//    var add = function (){
//        a++;
//    }
//    function inner () {
//        console.log(a);
//    }
//    return inner;
//}
//var res = outer();
//res(); //999
//add();
//res(); //1000

//示例2：
document.write("<br />"+"闭包的作用:2.让这些变量的值始终保持在内存中.示例2："+"<br />");
function makeAdder(x){
    return function(y){
        return x + y +"<br />";
    }
}
var add5 = makeAdder(5);
var add10 = makeAdder(10);
document.write(add5(5));
document.write(add10(10));
//编程练习
//1、使用javascript代码写出一个函数：实现传入两个整数后弹出较大的整数
document.write("<br />"+"编程练习."+"<br />"+"1、使用javascript代码写出一个函数：实现传入两个整数后弹出较大的整数."+"<br />");
function maxNum(x,y){
    if(x>y){
        return x;
    }else if(y>x){
        return y;
    }else{
        return "我们是相等的！";
    }
}
//2、写一个函数第一次运行时输出1，第二次运行输出2，第三次输出1……以此类推(不允许全局变量);
document.write("<br />"+"编程练习."+"<br />"+"2、写一个函数第一次运行时输出1，第二次运行输出2，第三次输出1……以此类推(不允许全局变量);"+"<br />");
document.write("<br />"+"方法一:"+"<br />");
function outer(){
    var num = 0;
    function inner(){
        num++;
        if(num % 2 == 1){
        return 1;
    }
        else {
            return 2;
        }
    }
    return inner;
}

var res11 = outer();
console.log(res11());
console.log(res11());
console.log(res11());
console.log(res11());
console.log(res11());
console.log(res11());


document.write("<br />"+"方法二:"+"<br />");
function once(){
    var x=false;
    return function(){
        if(!x){
            console.log(1)
            x = true;
        }else {
            console.log(2)
            x = false;
        }
    }
}
var results = once();
results();
results();
results();
results();
results();
results();