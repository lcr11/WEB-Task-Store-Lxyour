var message = "Hello World!";
var mlen = message.length;
console.log(mlen);  //length  长度12


var message = "Hello World!";
var upmess = message.toUpperCase();
console.log(upmess); //toUpperCase=把内容改为大写


var mystr = "I like JavaScript!";
var mylen = mystr.length;
var myup = mystr.toUpperCase();
var mylow = mystr.toLowerCase();
console.log("字符串长度：" + mylen);
console.log("大写转化后：" + myup);
console.log("小写转化后：" + mylow);//toLowerCase=内容转换为小写


var mystr = "I like JavaScript!";
console.log(mystr.indexOf("I"));  //取指数I开始的  I下标=0;
console.log(mystr.indexOf("v"));  //取指数v开始  v下标=9;
console.log(mystr.indexOf("v", 8));  //从下标8开始取值  
console.log(mystr.indexOf("a", mystr.indexOf("a") + 1)); //取第二a值 第一a下标=8 第二a下标=10;


var mystr = "I love JavaScript!";
console.log(mystr.charAt(2));  //charAt=返回下标  (2)为下标为1



var mystr = "www.lxyweb.com";
console.log(mystr.split(".")); //数组内分三个值
console.log(mystr.split(".", 2)); //数组内分两个值 第二个.后面的值取消了


var mystr = "I like JavaScript!";
console.log(mystr.substring(7)); //从下标6之后值都输出
console.log(mystr.substring(2, 6));//从下标1开始到下标5结算里面的值输出




//好吧 百度查的  没弄懂
var str  = "abcdaagjdaa";
var obj = {}; //定义个数组,函数计算输出用
var maxs = -1;//接收次数 为5次
var letter;//接收出现值  为a
for(var i = 0; i <str.length; i++){
    if( obj [ str[i] ]){
    obj [str[i]] ++;
    if( obj [str[i]] > maxs){
            maxs = obj[str[i]];
            letter = str[i];
        }  
    }else{
        obj [str[i]]=1;
        if( obj [str[i]] > maxs){
            maxs=obj [str[i]];
            letter=str[i];
        }
    }
}
alert(letter+"是出现次数最多的值,他的出现次数为"+maxs)