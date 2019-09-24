var myPlayer, curTime, allTime, timeStr;

$(window).ready(function(){
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


    $('#pcVid').on("YTPTime", function(e){
        var currentTime = e.time;

        curTime = $("#pcVid").YTPGetTime(); 
        allTime = $("#pcVid").YTPGetTotalTime();
        timeStr = allTime.split(':'); 

        //console.log('time - ', curTime, '/ alltime - ', allTime, timeStr[1]);

        if( curTime == ('00 : '+ (Number(timeStr[1]) -1)) ){
            //console.log('true')
            $('#pcVid').css('opacity', '0');
            $('.vid-txt-box').addClass('end');
            $('.weather').addClass('end');
        }

    });
});