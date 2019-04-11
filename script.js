$( document ).on(wb-ready, function() {
    // if ($("input#usingYes:checked")) {
    //     // $("#cdtsYes").toggleClass("hide");
    //     alert("Stephan Rocks");
    // } if ($("input#usingNo:checked").length > 0) {
    //     $("#cdtsNo").toggleClass("hide");
    // };

    // $("#usingYes").click(function(){
    //     alert("Stephan rocks");
    //     $("div#cdtsYes").toggleClass("hide");
    // });
    // $("input#cdtsNo").click(function(){
    //     $("div#cdtsNo").toggleClass("hide");
    // });


    // $( "input:radio[name='using']" ).click(function () {
    //     var usingCheck = $("input:radio[name='using']:checked").val();
        
    //     // CONDENSED IF/ELSE STATEMENT - TERNARY
    //     usingCheck = (using === '1') ? $( "#cdtsYes" ).show():$( "#cdtsYes" ).hide();
    //   });

    $("input:radio[name='using']").click(function() {
        $("#group .hidden").hide().removeClass("shown");
        $("#" + $(this).val()).show();
        setTimeout(function() {
          $(".hidden").addClass("shown");
        }, 0);
      });

      

});