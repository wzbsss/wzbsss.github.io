$(function(){
    $(".shipin").click(function(){
        $("section").slideDown(500);
        $(".shipin").hide();
    })
    $(".tianqi1").click(function(){
    	$(".tianqi").css("display","block");
    	
    })
    $(".tianqi span").click(function(){
    	$(".tianqi").css("display","none");
    });
    $(".lizi").click(function(){
    	$("#lizi").css("display","block");
    });
    $("#lizi").click(function(){
    	$("#lizi").css("display","none");
    });
    $(".left").click(function(){
    	$("section").slideUp(500);
    	 $(".shipin").show();
    })
    $(".right").click(function(){
    	$("section").slideUp(500);
    	$(".shipin").show(500);
    	
    })
     $(".tu1").click(function(){
        $(".mask1").slideDown("slow");
   }).siblings('.mask').slideUp('slow');

   $(".tu2").click(function(){
        $(".mask2").slideDown("slow");
   })
   $(".tu3").click(function(){
        $(".mask3").slideDown("slow");
   })
   $(".tu4").click(function(){
        $(".mask4").slideDown("slow");
   })
   $(".tu5").click(function(){
        $(".mask5").slideDown("slow");
   })
   $(".tu6").click(function(){
        $(".mask6").slideDown("slow");
   })
   $('.mask').click(function(){
        $(this).slideUp('slow');
   })

})