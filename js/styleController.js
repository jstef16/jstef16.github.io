function PlaceContent(){
    var headerHeight = $("#header").outerHeight(true);

    if(headerHeight > 10){
        $("#content").css("top", headerHeight - 1);
    }
    else{
        setTimeout(PlaceContent(), 50);
    }
}

function ExtendContent(){
    var contentBlockHeight = $("#contentBlock").outerHeight(true);
    var contentHeight = $("#content").outerHeight(true);

    if(contentBlockHeight > 0 && contentHeight > 0 && contentBlockHeight >= contentHeight ){
        $("#content").css("padding-bottom", contentBlockHeight - contentHeight + 32);
    }
    else if(contentBlockHeight > 0 && contentHeight > 0 && contentBlockHeight < contentHeight){
        $("#content").css("padding-bottom", 16);
    }
    else if(contentHeight == null){
        ExtendContent();
    }
}

$(window).resize(function() {
    PlaceContent();
    ExtendContent();
});
