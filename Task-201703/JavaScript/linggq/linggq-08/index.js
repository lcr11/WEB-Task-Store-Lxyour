//var op = document.getElementById("ip");
//document.write(op.nodeName + "<br>" + op.nodeValue + "<br>" + op.nodeType);
//
////nodeName 返回节点属性名   nodeValue 返回节点值 元素节点返回null  nodeType 节点类型 元素1 属性2 文本(回车也算)3 注释8  文档9
//
//
//var pBox = document.getElementsByClassName("p-Box");
//console.log(pBox)//html如果是id就不同哎  
//var pBox2 = document.getElementsByName("p-Box")
//console.log(pBox2)
//
//
//var divBox = document.getElementById("divBox");
////var div = document.createElement('div');创建个DIV
//var span = document.createElement('span');创建个span标签
//var text = document.createTextNode('..........');创建个文本节点
////div.appendChild(text);在div节点加入文本
////divBox.appendChild(div);
//var divBox2 = document.createDocumentFragment("33333")
//
//console.log(divBox2)
//setTimeout(function (){
//    divBox.removeChild(span)
//},3000)利用计时器 + 删去节点
//
//
//span.appendChild(text);在span标签加入文本
//divBox.appendChild(span);
////console.log(divBox)

//var divBox = document.getElementById("divBox");
////divBox.innerHTML = '<i>linggq</i>';这个输出出来是带<标签>
//divBox.innerText = '<i>linggq</i>';这个是不带<标签>
//
//
//divBox.style.color = '#233';这是JS设置属性
//divBox.style.marginLeft = '200px'
//var className = divBox.className;

//var val = '      sagdsg4886468311   ';

//function trim(str){
//var str = str.replace(/(^\s+)|(\s+$)/g,'');
//    return str;
//}这是简单的驱动数值中空格的方法
//console.log(trim(val));
//
//function isArray(obj){
//    if(obj && obj.push){
//        return true;
//    }
//    return false;
//}这是判断值 是否为数值的方法


//var li_num = 0;
//var childNodes = document.getElementById("father").childNodes;
//for(i = 0; i<childNodes.length;i++){
//    document.write("节点名" + childNodes[i].nodeName + " ");
//    document.write("节点类型" + childNodes[i].nodeType + " ");
//    if(childNodes[i].nodeType == 1){
//        document.write("我是"+ childNodes[i].innerHTML + "<br>");
//        li_num++;
//    } else {
//        document.write("<br>");
//        console.log("这是个空的节点");
//    }
//}
//document.write("子节点数目:"+ childNodes.length + "<br>");
//document.write("li 子节点数目:"+ li_num + "<br>");
//document.write("文本子节点数目:"+ (childNodes.length - li_num));
//
//var sec = document.getElementById("sec");
//console.dir(sec);
//var gran =sec.parentNode.parentNode;
//document.write(gran.id + "说:" + gran.title);

//    function createnode(){
//        var btn = document.createElement("input");
//        btn.setAttribute("type", "button");
//        btn.setAttribute("class", "class-xx");
//        btn.setAttribute("value", "吸进去");
//        btn.setAttribute("onclick", "removenode()");
//        document.body.appendChild(btn);
//    }//哎 写了几遍发现写错蛮多的
//    function removenode(){
//        var fnode = document.getElementById("father");
//        var nodes = fnode.childNodes;
//        for (var i = 0; i < nodes.length; i++) {
//                    if (nodes[i] && nodes[i].nodeType == 1) {
//                        var rm = fnode.removeChild(nodes[i]);
//                        rm = null;
//                        return;
//                    }
//                }
//            }
//     var createbtn = document.getElementById("createbtn");
//            createbtn.onclick = createnode;

//function addnode(){
//    var fnode = document.getElementById("father");
//    var newnode = document.createElement("li");
//    newnode.innerHTML= "大娃";
//    fnode.insertBefore(newnode,fnode.childNodes[0]);
//}
//var add =document.getElementById("add-btn");
//add.onclick = addnode;

function replacenode() {
            var fuJi = document.getElementById("father");
            var daWa = document.getElementById("first");
            var li = document.createElement("li");
            li.innerHTML = "金刚葫芦娃";
            fuJi.replaceChild(li, daWa);
        }
        var replace = document.getElementById("replace-btn");
        replace.onclick = replacenode;