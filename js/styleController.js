function PlaceContent(){
    var headerHeight = $("#header").outerHeight(true);

    if(headerHeight > 10){
        $("#content").css("top", headerHeight);
    }
    else{
        setTimeout(PlaceContent(), 50);
    }
}

function ExtendContent(){
    var contentHeight = $("#contentBlock").outerHeight(true);

    if(contentHeight > 0){
        $("#content").css("padding-bottom", contentHeight + 16);
    }
    else{
        ExtendContent();
    }
}

$(window).resize(function() {
    PlaceContent();
    ExtendContent();
});
