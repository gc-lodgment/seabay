
$(function() {
    $(window).on('load', function () {
        endVid();
        $(window).on('resize', function () {
            endVid();
        });
    });
});

function endVid(){
    //console.log('loaded');
    var agent = navigator.userAgent.toLowerCase();
    var winWid = $(window).width();
    
    if( winWid <= '991' ){
    }else {
        //console.log('pc');
        if( (navigator.appName == 'Netscape' && navigator.userAgent.search('Trident') != -1) || (agent.indexOf("msie") != -1) || (agent.indexOf("chrome") != -1) ) {
            //alert("익스, 크롬");
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
        }else {
            $("#vidPc").remove(); 
            $('.vid-txt-box').addClass('end');
            $('.weather').addClass('end');
        }
    }
}
