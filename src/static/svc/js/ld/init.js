$(function() {
    
    $('html').css({'overflow': 'hidden', 'height': '100%'}); //임시
    
    /*pop.on('scroll touchmove mousewheel', function(event) { 
        event.preventDefault();     
        event.stopPropagation();     
        return false; 
    }); //임시*/
    
    popFn(); //임시
    
    $(window).resize(function(){
        popFn()
    }).resize();
    
});


function popFn(){
    var pop = $('.ld-popup .popup-wrap');
    var windowHt = $(window).height();
    var popHt = pop.height();
    //console.log(popHt, windowHt);
    
    if( windowHt <= popHt ){
        pop.css({'top' : 0+'px', 'margin-top' : 0+'px'});
    }else {
        //세로 가운데 정렬
        pop.css({'top' : '50%', 'margin-top' : -(popHt/2)+'px'});
    }
}