$(function() {
	
	headerFunc();
	scrollFunc();
    vidFunc();
	
});

function headerFunc () {
	var navTab	= $(".nav-tab"),
		gNav	= $(".gnb .nav"),
		bgDrop	= $(".bg-drop");
	navTab.on('click', function() {
		gNav.addClass("on");
	});
	gNav.find(".bg-drop, .i-x").on('click', function() {
		gNav.removeClass("on");
	});
}

function scrollFunc () {
	var gnb	= $(".gnb"),
		btnTop	= $("#btnTop"),
		top		= $(".visual .slide").outerHeight(),
		gnbTop  = gnb.height(),
        windowWid = $(window).width();
	$(window).scroll(function() {
		var scr = $(window).scrollTop();
		// console.log(scr);
		// console.log(top); 
		// 상단 해더 고정 배경 클래스 추가
        //console.log(windowWid);
        if( windowWid < '992' ){
            if ( scr == 0 ) {
                gnb.removeClass('on');
            } else if ( scr > 0 ) {
                gnb.addClass('on'); 
            } 
        }else { 
            if ( scr <= gnbTop ) {
                gnb.removeClass('on');
                $('.weather').removeClass('on');
            } else if ( scr > gnbTop ) {
                gnb.addClass('on');
                $('.weather').addClass('on');
            } 
        }
		// top 버튼 display
		if ( scr > top ) {
			btnTop.fadeIn();
		} else {
			btnTop.fadeOut();
		}
	});
	btnTop.on('click', function() {
		$('html, body').stop().animate({scrollTop: '0'}, 500);
	});
}

/* movie */
function vidFunc(){
    $('body').css({'overflow': 'hidden', 'height': '100%'});
    
    vidWH();
    $(window).resize(function(){
        vidWH();
    }).resize();
    
    $('.vid-wrap').find('.vid-txt').on('click', function(){
        $(this).parents('.vid-wrap').fadeOut();
        $('.header, .weather').removeClass('vid');
        $('body').css({'overflow': 'auto', 'height': '100%'});
    });
}

function vidWH(){
    var winWid = $(window).width(),
        winHt = $(window).height(),
        vid = $('.vid-wrap');
    
    vid.css({'width' : winWid+'px', 'height' : winHt+'px'}); 
    
    if( winWid <= '991' ){
        //console.log('m');
        $('#vidM').get(0).load();
        $('.vid-area.m .vid-box').css({'height' : winHt+'px'}); 
        /*if( winWid <= '500' ){
            $('.vid-area.m .vid-box #vidM').css({'margin-left' : '-'+(winWid/2)+'px'}); 
        }*/

        $('.vid-area.m .vid-box').fadeIn(500, function(){
            $('#vidM').get(0).play();
            $(this).find('#vidM').on('ended',function(){
                $(this).parents('.vid-area.m .vid-box').fadeOut(500);
            });
        });
    }else {
        var myPlayer;
        $("#vidM").stop();
        
        $('.weather').css({'cursor' : 'pointer'}); 
        $('.vid-wrap, .weather').hover(function(){
            vid.find('.vid-txt-box').addClass('on');
            $('.weather').addClass('active');
        }, function(){
            vid.find('.vid-txt-box').removeClass('on');
            $('.weather').removeClass('active');
        });
        
        $(window).load(function(){
            var isIframe = function () {
                var a = !1;
                try {
                    self.location.href != top.location.href && (a = !0)
                } catch (b) {
                    a = !0
                }
                return a
            };

            var options = {
                playOnlyIfVisible: true
            };
            
            myPlayer = $(".vidPc").YTPlayer({align:"center,left"});
        });

        
        vid.find('.vidPc').css({'width' : winWid+'px', 'height' : '100%'}); 
    }
}
