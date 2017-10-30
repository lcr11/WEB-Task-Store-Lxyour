var name = new Array("CC","起床别叠被","Qmeng","Tu","xhan","zgl","zimuer","CZF_M","freedom","linggq");

for(i=0;i<name.length;i++)
{
    document.write(name[i]);
}

var number = new Array(1,2,3,4,5,6,7,8,9,10);
var isum = 0;
for(var i = 0;i < number.length;i++)
{
    isum += parseInt(number[i]);
   
}
 document.write("<br>"+isum);