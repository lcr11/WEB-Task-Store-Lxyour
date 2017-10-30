
/*
function unm(x,y){
     if (x > y){  //X比Y大时候返回X值
         return x;
     } else if (y > x ){  //Y比X大时候返回Y值
         return y; 
     } else {
         return "我们相等"; //X和Y一样大时候返回 我们相等
     }
 }
var add = unm(10,11);  //X=10  Y=11  
var add2 = unm(100,1 ); //X=100  Y=1
var add3 = unm(0,0);  //X=0 Y=0  

console.log(add);
console.log(add2);
console.log(add3);
*/



/*
function num(){
    var arr = true ;
    return function(){
        if (arr){
           console.log(1)
           arr = false;
        } else {
            console.log(2)
            arr = true;
        }
    }
}

var aaa = num();

aaa();
aaa();
aaa();
aaa();
*/

function outer(){
    var num = 1;
    var eva = num++;
    if(eva % 2 == 0){
        return 2;

    } else {
        return 1;

    }


}

var res = outer();


document.write(res)
document.write(res)
document.write(res)



