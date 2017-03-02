/**
 * Created by wz on 2017/3/2.
 */
$(function () {

    $(window).scroll(function (i) {
        var nav = $('#nav')
        if($(window).scrollTop()>=350){
            nav.addClass('float')
            nav.stop().animate({height:25,lineHeight:25},200)
            $('#about').css('margin-top',50)
        }else {
            nav.removeClass('float')
            nav.stop().animate({height:50,lineHeight:50},200)
            $('#about').css('margin-top',0)
        }
        if($(window).scrollTop()<=$('#contact').offset().top){
            $('#toTop').stop().animate({opacity:1})
        }
        $('#about').find('ul').find('li').each(function (i) {
            $(this).css('animation','rota 1s '+i/10+'s').css('animation-fill-mode','forwards')
        })
    })
    $('#home_b,#wang').click(function () {
        $('html body').stop().animate({scrollTop:0})
    })
    $('#about_b').click(function () {
        $('body').stop().animate({scrollTop:$('#about').offset().top})
    })
    $('#res_b').click(function () {
        $('body').stop().animate({scrollTop:$('#edu').offset().top})
    })
    $('#gal_b').click(function () {
        $('body').stop().animate({scrollTop:$('#gallery').offset().top})
    })
    $('#contact_b').click(function () {
        $('body').stop().animate({scrollTop:$('#contact').offset().top})
    })
    /*
     $('.wechat').hover(function () {
     $('#wechat').css('opacity',1)
     }, function () {
     $('#wechat').css('opacity',0)
     })*/
    $('#wechat').find('li').each(function (i) {
        $(this).css('background-position','0 '+-(i*60)+'px')
    })
    $('.wechat').hover(function () {
        $('#wechat').find('li').each(function (i) {
            $(this).css("transform","rotateY(0deg)").css("transition","all 1s "+100*i+'ms').css('opacity',1)
        })
    },function () {
        $('#wechat').find('li').each(function (i) {
            $(this).css('transform','rotateY(-90deg)').css('opacity',0)
        })
    })

    //到顶部

    $('#toTop').click(function () {
        $('body').stop().animate({scrollTop:0})
    })
})
