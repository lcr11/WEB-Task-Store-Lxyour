
var classmate = ["月影班长","牛奶","小凡","小伟","子木","涂涂","大酒神","小白","子墨","莫夜泽",];
document.write("群里随机的" + classmate.length + "位老司机。"+"<br>");
document.write("一号老司机是冉冉升起的 ： " + classmate[0]+"；"+"<br>");
document.write("二号老司机是冉冉升起的 ： " + classmate[1]+"；"+"<br>");
document.write("三号老司机是冉冉升起的 ： " + classmate[2]+"；"+"<br>");
document.write("四号老司机是冉冉升起的 ： " + classmate[3]+"；"+"<br>");
document.write("五号老司机是冉冉升起的 ： " + classmate[4]+"；"+"<br>");
document.write("六号老司机是冉冉升起的 ： " + classmate[5]+"；"+"<br>");
document.write("七号老司机是冉冉升起的 ： " + classmate[6]+"；"+"<br>");
document.write("八号老司机是冉冉升起的 ： " + classmate[7]+"；"+"<br>");
document.write("九号老司机是冉冉升起的 ： " + classmate[8]+"；"+"<br>");
document.write("十号老司机是冉冉升起的 ： " + classmate[9]+"；"+"<br>");

var mynum = [1,2,3,4,5,6,7,8,9,10];
document.write("1+2+3+4+5+6+7+8+9+10=");
document.write(mynum[0]+mynum[1]+mynum[2]+mynum[3]+mynum[4]+mynum[5]+mynum[6]+mynum[7]+mynum[8]+mynum[9]+"；");

var mynum = [1,2,3,4,5,6,7,8,9,10];
function mynum() {
    var i, sum = 0;
    for (i = 0; i < arguments.length; i++) {
        sum += arguments[i];
    }
    return sum;
}
document.writem(mynum());

