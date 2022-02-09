$(document).ready(function(){
    $("#cakes").click(function(){
        $("#card1").show();
        $("#card2,#card3,#card4,#card5,#card6").css("display","none");
    }),
    $("#cupcakes").click(function(){
        $("#card2,#card4").show();
        $("#card1,#card3,#card5,#card6").css("display","none");
    }),
    $("#doghnut").click(function(){
        $("#card3").show();
        $("#card1,#card2,#card4,#card5,#card6").css("display","none");
    }),
    $("#sweets").click(function(){
        $("#card5,#card6").show();
        $("#card1,#card2,#card3,#card4").css("display","none");
    }),
    $("#all").click(function(){
        $("#card5,#card6,#card1,#card2,#card3,#card4").show();
    
    })
});

$(document).ready(function(){
    $("#myinput").on("keyup",function(){
        var value = $(this).val().toLowerCase();
        $(".card").filter(function(){
            $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)
        });
    });
});