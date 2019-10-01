$(window).on('load', function () {
    endVid();
	$(window).on('resize', function () {
        endVid();
	});
})

function endVid(){
    //console.log('loaded');
    
    if( winWid <= '991' ){
    }else {
        var winWid = $(window).width();
        var runtime = 17000; //영상 길이
        var delay = 1000;
        var time = runtime + delay;
        setTimeout(function () {
            //console.log('ended');
            $('#vidPc').fadeOut();
            //$('#player').css('opacity', '0');
            $('.vid-txt-box').addClass('end');
            $('.weather').addClass('end');
        }, time);
    }
}
