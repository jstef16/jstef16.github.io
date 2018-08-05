function PlaceContent(){
    var headerHeight = $("#header").height();
    $("#content").css("margin-top", headerHeight + "px");
}

$(window).resize(function () {
    PlaceContent();
});
