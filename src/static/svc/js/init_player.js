
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
        $('.vid-area.pc .vid-box iframe').remove(); 
        
        //$('#vidPc').pauseVideo();
        $('#vidM').get(0).play();

        
    }else {
        var pchtml = '<iframe id="vidPc" class="vidPc" src="https://www.youtube.com/embed/NupIKt3LM1Q?rel=0&amp;controls=0&amp;autoplay=1&modestbranding=1" allow="autoplay; encrypted-media" frameborder="0" allowfullscreen=""></iframe>';
        
        $("#vidM").get(0).pause();
        $('#vidM').get(0).currentTime = 0;
        
        if ( $('.vid-area.pc .vid-box iframe').length > 0 ) {
            //console.log('있음');
        } else {
            //console.log('없음');
            $('.vid-area.pc .vid-box').append(pchtml);
        }
        
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
