$(function() {
	
	headerFunc();
	scrollFunc();
	
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
