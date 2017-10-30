$('#er1').on('click',function() {
    $('#er2').toggleClass("yincang");
    $('#xz').toggleClass('xuanzhuan');
    $('.left>ul>li>ul li#er1 ul').click(function() {
        return false;
    })
});

$('.xiangmu ul li').click(function() {
    $(this).addClass("xm").attr("style","background-color:#fff").siblings().removeClass("xm").removeAttr("style"); $(this).children('i').show().parent().siblings().children('i').hide();$(this).children('div').show().parent().siblings().children('div').hide();   
});