function PlaceContent(){
    var headerHeight = $("#header").outerHeight(true);
    $("#content").css("top", headerHeight);
}

$(window).resize(function() {
    PlaceContent();
});
