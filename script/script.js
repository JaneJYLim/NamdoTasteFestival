//subMenu 구현

$("#mainMenu li").mouseover(function(){
    $(this).children(".subMenu").stop().slideDown();
});

$("#mainMenu li").mouseout(function(){
    $(this).children(".subMenu").stop().slideUp();
});

//슬라이드 구현
function fnSlide(){
    $("#slideShuttleFrame>a:first").animate({"margin-left" : "-800px"},1000, function(){
        $("#slideShuttleFrame>a:first").css({"margin-left" : "0"});
        $("#slideShuttleFrame>a:first").insertAfter("#slideShuttleFrame>a:last");
    });
}
setInterval(fnSlide, 3000);

//팝업레이어 구션
$("#bbsNotice table tr:first").click(function(){
    $("#layerPopupBg").css({"display" : "block"});
});

$("#closeBtn button").click(function(){
    $("#layerPopupBg").css({"display" : "none"});
});