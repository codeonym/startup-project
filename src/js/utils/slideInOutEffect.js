$(function(){
  console.log($(window).scrollTop());
  $(window).on("scroll", function(e) {
    //console.log($(this).scrollTop());
    if($(".section-header").offset().top < $(window).scrollTop() + $(window).innerHeight() - 100) {
      $(".section-header")
        .removeClass("slide-out")
        .addClass("slide-in")
        .animate(
          {left:"0%"}
          ,300,
          ()=> {
            $(".section-header")
              .siblings()
              .removeClass("slide-out")
              .addClass("slide-in");
          });
    }

    if(Math.ceil($(".section-header").offset().top) <= Math.ceil($(window).scrollTop() + 72)){
      $(".section-header").addClass("out");
    }
    if($(".section-header").parents("section").offset().top > Math.ceil($(window).scrollTop()) ){
      $(".section-header").removeClass("out");
      console.log("bingo");
    }
  });
  
});