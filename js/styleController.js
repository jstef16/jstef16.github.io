function SetHeaderHeight(){
    var headerHeight = $("#header").height;
    $("#content").css("margin-top", headerHeight + "px");
}

$(window).resize(SetHeaderHeight());