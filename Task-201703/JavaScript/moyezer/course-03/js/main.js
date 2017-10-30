/*//判断语句 if
var eat = "rice";
if(eat == "rice"){
    console.log("吃米饭");
}
else if(eat == "noodles"){
    console.log("吃面条");
}
else {
    console.log("只有馒头了!");
}


//多种选择 switch
var eat = 6;
switch(eat){
    case 1:
    case 2:
        console.log("🍚米饭");
        break;//用 break 来阻止条件满足后还继续运行下去.
        
    case 3:
        console.log("🍜面条");
        break;
        
    default:
        console.log("🍞馒头啦");
}


//重复重复 循环语句 for
var eat_arr = [2,2,3,4,2,2,2,];//吃饭 选项数组
// 初始化变量↓, 循环条件↓,          循环迭代↓.  
for(var i =0; i < eat_arr.length; i++){
    switch(eat_arr[i]){
        case 1:
        case 2:
            console.log("米饭");
            break;
        case 3:
            console.log("面条");
            break;
        default:
            console.log("馒头");
    }
}


//反反复复 循环语句 while,和 for 循环有相同功能,while 循环重复一段代码,直到某个条件不再满足为止.
var eat_arr = [2,3,2,2,4,2,2,4,4];//数组
var i = 0; //循环起点设置
while(i < eat_arr.length) //循环次数
    {
        switch(eat_arr[i]){
            case 1:
            case 2:
                console.log("吃很多白米饭了");
                break;
            case 3:
                console.log("吃很多面条了");
                break;
            default:
                console.log("干咽了很多馒头了");
    }
        i++; //使i 自增
}



//来来回回 循环语句 do while,do while结构的基本原理和while结构是基本相同的，但是它保证循环体至少被执行一次。因为它是先执行代码，后判断条件，如果条件为真，继续循环。
var num = 1;
do{
    document.write("数值为:" + "<br />");
    num++;
}
while (num<= 5)
    
    

//退出循环 break,用break语句退出当前循环，直接执行后面的代码。
var eat_arr = [2,6,2,2,3,3,4,5,2];
var i = 0;
var eat_max = 6;//最大库存量
while(i < eat_arr.length)
    {
        if(i == eat_max)
            break; // 如果饭菜没了，队伍还在排，则告诉他们解散了
        switch(eat_arr[i]){
            case 1:
            case 2:
                console.log("又是吃白米饭.");
                break;
            case 3:
                console.log("还是面条啊.");
                break;
            default:
                console.log("还是馒头啊啊.");
    }
        i++;
}
    

//继续循环 continue,continue的作用是仅仅跳过本次循环，而整个循环仍然继续执行。
var eat_arr = [2,2,5,4,2,3,2];//数组
var i = 0;
var eat_null = 3;//数组里是 3 的吃面条.
while(i < eat_arr.length){
    if(i == eat_null){
        i++;
        continue;
    }
    switch(eat_arr[i]){
        case 1:
        case 2:
            console.log("崩溃的又是米饭..");
            break;
        case 3:
            console.log("崩溃的又是面条..");
            break;
        default:
            console.log("崩溃的又是馒头..");
    }
    i++;
}*/


//练习
var num = [3, 6, 10, 12, 27, "ga", 30, 49, "buhui", 50," ", 90, "gg", true, [1, 2, 3]];
for (var i = 0; i < num.length; i++) {
    var val = num[i];
    if (typeof val === 'number') {
        if (val % 3 === 0 && val % 5 === 0) {
            console.log(num[i] + ':fizzbuzz');
        } else if (val % 3 === 0) {
            console.log(num[i] + ':fizz');
        } else if (val % 5 === 0) {
            console.log(val + ':buzz');
        } else {
            console.log(val);
        }
    }else if (typeof val != 'number'){
        console.log(val +':false');
    }else {
        console.log(val);
    }
}





    /* switch (typeof num[i]) {
     case 'number':
         if (num[i] % 3 === 0 && num[i] % 5 === 0) {
             console.log(num[i] + ':fizzbuzz');
         } else if (num[i] % 3 === 0) {
             console.log(num[i] + ':fizz');
         } else if (num[i] % 5 === 0) {
             console.log(num[i] + ':buzz');
         } 
         break;
     default:
         console.log(num[i]);
     }*/


    /*var tiem = 1;
    while( tiem <= 30 )
        {
            document.write( tiem +'<br>');
            tiem++;
        }*/