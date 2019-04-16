$( document ).on("wb-ready.wb", function() {
    $("#usingYes").click(function(){
        $("div#cdtsYes").removeClass("hidden");
        $("div#cdtsNo").addClass("hidden");
    });
    $("#usingNo").click(function(){
        $("div#cdtsNo").removeClass("hidden");
        $("div#cdtsYes").addClass("hidden");
    });
});

