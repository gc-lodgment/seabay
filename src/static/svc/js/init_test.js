
$(function() {
    
    //객체 생성
    var videocontrol = document.getElementById("vidPc");

    //미디어 재생이 종료되었을때 발생하는 이벤트 처리
    videocontrol.addEventListener("ended",event,false);

    function event(e){
        //이벤트가 발생하였을 경우에 대한 처리
        //console.log('end');

        $('#vidPc').css('opacity', '0');
        $('.vid-txt-box').addClass('end');
        $('.weather').addClass('end');
    }
});