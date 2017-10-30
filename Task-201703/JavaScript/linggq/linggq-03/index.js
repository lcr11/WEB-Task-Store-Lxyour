    //var eat = "2";
    //if (eat =="1" ){
    //    console.log("吃米饭");//1选项是吃米饭  而eat没等于1,所以跳过
    //} else if(eat =="2"){
    //    console.log("吃面条");//2选项是吃面条 eat等于2所以输出吃面条
    //} else{
    //    console.log("吃馒头");
    //}


    var num = [2, 3, 8, 51, 48, 8, 30, 50, 100, '', [1,2]];

    for ( var i = 0; i < num.length; i++){
        var val = num[i];
        if ( typeof val ==='number'){
                if ( val % 3===0 && val % 5===0 ){
                    console.log(val+':能被3和5整除')
                } else if ( val % 3 === 0 ){
                    console.log(val+':能被3整除')
                } else if ( val % 5 === 0 ){
                    console.log(val+ ':能被5整除')
                } else{
                    console.log(val)
                }
            
        }
    }