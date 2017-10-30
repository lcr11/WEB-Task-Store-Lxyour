
//var arr = ['x', {a:1}, [1, 2, 3], function(){ return true; }];

/*
console.log(arr[0]);//string
console.log(arr[1]);//object
console.log(arr[2]);//array
console.log(arr[3]);//function
*/

var arr = [[1, 2], [3, 4]]

console.log(arr[0][1]); // 【0】是第一个元素的键值 arr【0】【1】即为数组里第一个元素里的第2个元素 即为2

var arr = ['a', 'b'];

console.log(arr.length);// 2  arr.length为数组成员数量 length的值是键值 + 1  如 arr【1000】=‘c’ 则 arr.length=1001

 //length的值是可以自己设定来变化输出数组的多少 如

 var arr = ['a', 'b', 'c'];

console.log(arr.length); // 如果arr.length = 2 则输出 【‘a’ ，‘b’】


var myarr = ["小新","小月","小王","小可爱","小讨厌"];
console.log("我们班有：" + myarr.length + "人"); //我们班有5人


var myarray = new Array(6);
console.log(myarray); //新建数组

var myarr = new Array(3);
myarr[0] = "小五";
myarr[1] = "小王";
myarr[2] = "小张";
console.log("班级学号为 0 的是：" + myarr[0]);//班级学号为0的是小五
console.log("班级学号为 1 的是：" + myarr[1]);//班级学号为1的是小王
console.log("班级学号为 2 的是：" + myarr[2]);//班级学号为2的是小张
// var arr = [1, "abc", myarr];
// console.log(arr[1])// 赋值
myarr[3] = "小李";
console.log("班级学号为 3 的是：" + myarr[3])// 数组可以增加新元素

var myarr = ["小吉", "小雷", "小可", "小新", "月影"];
var mynum = 4;
console.log("学号为 4 的是：" +   myarr[mynum]  );//myarr[mynum] 数组里的4号元素 月影


var myarr = [[0, 1, 2], [1, 2, 3]];
myarr[0][1] = 6; //将 5 的值传入到数组中，覆盖原有值。
console.log(  myarr[0] 	);// 输出值已结被覆盖 即为 【 0 6 2 】

//作业一
var myarr = ["a", "b", "c","d", "e", "f", "g", "h", "i", "j"];
console.log(myarr[0]);
console.log(myarr[1]);
console.log(myarr[2]);
console.log(myarr[3]);
console.log(myarr[4]);
console.log(myarr[5]);
console.log(myarr[6]);
console.log(myarr[7]);
console.log(myarr[8]);
console.log(myarr[9]);

//作业二

var myarr = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10"]
for (var i = 0; i < myarr.length; i++) {
    array[i]
}
