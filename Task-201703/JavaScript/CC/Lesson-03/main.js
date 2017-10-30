//判断语句 if else
document.write("1.if else练习"+"<br />");
var eat = "no noodles";
if(eat == "rice"){
    document.write("吃米饭");//在浏览器中输出。。。讨厌console...
} else if(eat == "noodles"){
    document.write("吃面条");
} else{
    document.write("那就去外面吃吧"+"<br />");
}

//多种选择 switch
document.write("<br />"+"2.switch练习"+"<br />");
var eat = 2;
switch(eat){
    case 1:
        document.write("这里没有粥，推荐意大利面:"+"<br />");
        
    case 2:
        document.write("意大利面"+"<br />");
        break;
    case 3:
        document.write("蛋糕"+"<br />");
        break;
    case 4:
        document.write("饮料"+"<br />");
        break;
    case 5:
       document.write("牛排"+"<br />");
        break;
    default:
        document.write("如需定制，请叫服务员"+"<br />");
}

//重复 循环语句 for
document.write("<br />"+"3.switch for练习"+"<br />");
var eat_arr = [1,2,3,4,1,2,3];
for(var i = 0;i < eat_arr.length;i++){
    switch(eat_arr[i]){
           case 1:
        document.write("这里没有粥，推荐意大利面:");
        
            case 2:
                document.write("意大利面"+"<br />");
                break;
            case 3:
                document.write("蛋糕"+"<br />");
                break;
            case 4:
                document.write("饮料"+"<br />");
                break;
            case 5:
               document.write("牛排"+"<br />");
                break;
            default:
                document.write("如需定制，请叫服务员"+"<br />"); 
    }
}

//反反复复 循环语句 while
document.write("<br />"+"4.while练习"+"<br />");
var eat_arr = [1,2,3,4,1,2,3];
var i = 0;
while(i < eat_arr.length){
    switch(eat_arr[i]){
           case 1:
        document.write("这里没有粥，推荐意大利面:");
        
            case 2:
                document.write("意大利面"+"<br />");
                break;
            case 3:
                document.write("蛋糕"+"<br />");
                break;
            case 4:
                document.write("饮料"+"<br />");
                break;
            case 5:
               document.write("牛排"+"<br />");
                break;
            default:
                document.write("如需定制，请叫服务员"+"<br />"); 
    }
    i++;
}

//来来回回 循环语句 do while
document.write("<br />"+"5.do while练习"+"<br />");
num = 1;
do{
    document.write("数值为:" +  num+"<br />");
    num++;
}while (num<=10)

//退出循环 break
document.write("<br />"+"6.break练习"+"<br />");
var eat_arr = [2, 2, 3, 4, 2, 2]; // 吃饭选项数组
var i = 0; // 设置起点
var eat_null = 3; // 没钱童鞋的编号
while(i < eat_arr.length) // 循环次数
{ // 循环开始大括号
// 以下为循环内容
// 如果饭卡没钱了，就自己默默离开
    if(i == eat_null){
        i++;
        continue;
    }
    switch(eat_arr[i]){
        case 1:
        case 2:
            document.write("米饭"+"<br />");
            break;
        case 3:
            document.write("面条"+"<br />");
            break;
        default:
            document.write("馒头"+"<br />");
    }
    i++; // 使 i 自增
} // 循环结束大括号

//编程练习
document.write("<br />"+"写一个流程判断，变量 num 与输出值的关系如下："+"<br />"+
"1、如果 num 能同时被 3 和 5 整除，输出字符串 fizzbuzz"+"<br />"+
"2、如果 num 能被 3 整除，输出字符串 fizz"+"<br />"+
"3、如果 num 能被 5 整除，输出字符串 buzz"+"<br />"+
"4、如果变量为空或者不是 Number 类型，输出 false"+"<br />"+
"5、其余情况，输出 num"+"<br />");
var num = [15,3,5,2,'abc','12,34',""];
for(var i = 0;i < num.length;i++)
{
    var val = num[i];
    if(typeof val ==='number'){
        if(val % 3 == 0 && val % 5 == 0){
            document.write(val +":fizzbuzz"+"<br />");
        } else if(val % 3 == 0){
            document.write(val +":fizz"+"<br />");
        } 
        else if(val % 5 == 0){
            document.write(val +":buzz"+"<br />");
        }
    }
    else if(val === null || typeof(val)!="number"  ){
        document.write(val +":false"+"<br />");
    } else{
        document.write(val+"<br />");
    }
}


//