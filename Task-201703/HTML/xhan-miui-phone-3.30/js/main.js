//相关动画
$(function(){

  //页面加载完导航淡入
  $(".sczb-tp>.title").addClass("animated flipInX");
  $("header>a").addClass("animated flipInX");
  $("header>div").addClass("animated flipInX");

//标题出现后淡入
   var stus=[0,0,0,0,0,0,0],
        ttes=[];
        for(let i=0;i<stus.length;i++){
          ttes.push($(".pro-title").eq(i).offset().top)
        };
      $(window).on("scroll", function (){
        var sTop = $(window).scrollTop();
            sTop = parseInt(sTop);
            for( let i=0;i<ttes.length;i++){
              if(stus[i]==0 && sTop >= ttes[i]-600){
                    $(".pro-title").eq(i).addClass("animated slideInRight");
                     stus[i]=1;
                }
            }
})
});
