/*function add() {
    sum = 3 + 2;
    alert (sum);
}
add();*/

/*
function add(x,y){
    sum = x + y;
    console.log(sum);
}
add (5,7);
add (6,67);
add (3.3,7.0);
add (57,7);
add (4,3);
*/

/*function add(x,z){
    sum = x + z;
    return sum;
}
result = add (3,4);
result2 = add (10,4);
result3 = add (10,4.6);
console.log(result)
document.write ('result 的值是：'+ result+'<br>');
document.write ('result3 的值是：'+ result3);*/

//闭包
/*function out(){
    var a = 1 + 3 * 8 / 2;
    function ter(){
        console.log(a);
    }
    return ter();
}
out();*/

/*var add = null;
function outer () {
    var a = 999;
    add = function (){
        a++;
    }
    function inner (){
        console.log(a);
    }
    return inner;
}
var res = outer();
res();
add();
res();
add();
res();
add();
res();
add();
res();*/

/*
function mak(x) {
    return function(y) {
        return x / y || 6;
    };
}
var add1 = mak(2);//x
var add2 = mak(2);//x

console.log(add1 (5));//y
console.log(add2 (4));//y
*/

//练习~
/*function max(x,y) {
    if(x>y) {
        return x;
    }
    else if(x<y) {
        return y;
    }
    else {
        return "我们相等！ ";
    }
}
console.log (max(8,11));
console.log (max(88,11));
console.log (max(8,131));
console.log (max(11,11));
console.log (max(0.8,1));*/


//写一个函数，奇数的时候输出1 ，偶数的时候输出 2.
/*function outer() {
    var num = 0;
    function inner() {
        num++;
        if(num%2 == 0){
            return 2;
        }else if(num%2 === 1){
            return 1;
        }
    }
    return inner;
}
var res1 = outer();
console.log(res1());
console.log(res1());
console.log(res1());
console.log(res1());
console.log(res1());
console.log(res1());
console.log(res1());*/

// 第二种
function outer() {
    var ta = true;//可以换成false，如果换下面的也要灵活换过来。
    return function() {
        if(ta) {
            console.log(1)
            ta = false;
        } else {
            console.log(2)
            ta = true;
        }
    }
}

var res = outer();
res();
res();
res();
res();
res();
res();
res();
res();
res();
res();







