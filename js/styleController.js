function PlaceContent(){
    var headerHeight = $("#header").outerHeight(true);

    if(headerHeight > 10){
        $("#content").css("top", headerHeight);
    }
    else{
        setTimeout(PlaceContent(), 50);
    }
}

$(window).resize(function() {
    PlaceContent();
});
