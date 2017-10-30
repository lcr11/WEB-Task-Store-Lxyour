
var myvar = 123// 给myvar赋值为123

var mychar1 = "双引号里面的是字符串";
var mychar2 = '单引号里面的也是字符串';
var mychar3 = '小蒜：“我喜欢你”';//字符串里面有双引号的情况下外面用单引号包含
var mychar4 = "Uncle Wang：\"小蒜啊，'学习好'才能吸引女孩哦~\"";// 或者在特定符号（引号）前使用 \ 符号，使其转义输出 （不懂啥意思）
var mynum1 = 6;//这是数字 6
var mynum2 = 6.00;//这也是数字 6
var mynum3 = 123e5;//这是123后面加5个00000 即123*100000=12300000
var mynum4 = 123e-5;//这是小数点后移5位 即123/100000=0.00123
var mybool = true;//这是布尔值 布尔值是什么鬼 就是叫布尔值鹅已？
var myarr = [1, 2, 3];//这是数组 中括号里的是数组
var myobject = {"p": "Hello"};//这是对象 大括号里的是对象


var y = "you"
var mysay = "I" + "Love" + y;// i love 都是字符串 y赋值为you也是字符串 三个字符串用 “ + ”连接输出的结果还是字符串

var mynum = 12 + 6 * 2;//数值表达式 输出的结果还是数值

var mybool = mynum > 12;//布尔值表达式 输出的值是布尔值 布尔值就是 "true" 或者  "false"

var num = 24;
var myresult1 = ++num % 4 + 6 * 2; //num = 24  ++在前面 即该数值24先加 1再做运算  %是求余数  24加 1之后求和4的余数  再加6 * 2 即为 13
var myresult2 = num++ % 4 + 6 * 2; //num = 24  ++在后面 即该数值24 先进行求运算   24除以4的余数为0 即为整除 再加上 6 * 2 最后再加 1 即为 13

//将算数运算符放在=前就可以简化，比如 num %= 4 等价于 num = num % 4。


//string--字符串
//Number--数值
//Boolean--布尔值
//Array--数组
//Object--对象
// undefined和null 无效数据？

var a = "6" + "6"; //66
var b = 6 + "6";//66
var c = 60 + 6;//66
var d = 6 + 6 + "";//12
var x = 10 + "20" - 10;//1010  不太懂
var v = 10 + + '10';//20 不太懂 不是数值加字符串吗？





console.log(v)
