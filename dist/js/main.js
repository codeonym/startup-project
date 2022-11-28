
$(function (){
  $(window).scrollTop(((parseInt($(".scroll-bar-ranger").val()) * parseInt($(document).height()))/ 100) - $(window).innerHeight());
  $(this).on('scroll', function () {
    $(".scroll-bar-ranger").val((parseInt($(window).innerHeight()) + parseInt($(window).scrollTop()))*100/parseInt($(document).height()));
  });
$(".scroll-bar").on("click",".scroll-bar-ranger", function(e) {
  e.preventDefault();
  $(window).scrollTop(((parseInt($(".scroll-bar-ranger").val()) * parseInt($(document).height()))/ 100) - $(window).innerHeight());
});
});
$(document).ready(function(){
  checkScreenSize();
  $(window).on('resize', function(){
    checkScreenSize();
  });
  $(".side-bar-btn").on("click", function(e) {
    var span=$("<svg class='fa hide-nav-bar-btn fa-solid fa-bars fa-2x'></svg>")
            .css({
                position: "absolute",
                top:"30px",
                right:"30px",
                zIndex:"991"
            });
    $(this)
    .hide()
    .siblings("ul")
    .toggleClass("side-bar on")
    .append(span);
  });
  $(".links").on("click",".hide-nav-bar-btn", function(e) {
    $(this)
      .hide()
      .parent("ul.side-bar")
      .toggleClass("side-bar on")
      .siblings(".side-bar-btn").show();
  });
})

function checkScreenSize() {
  if(parseInt($(window).width()) < 922){
    $(".side-bar-btn ")
    .show()
    .siblings("ul")
    .hide()
  }else {
    $(".side-bar-btn ")
    .hide()
    .siblings("ul").css({
      display:"flex"
    });
  }
}

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
//customizable slider
  $(document).ready(function () {
    $(".slider-item").on("click", ".prev", function (e) {
      e.preventDefault();
      var item = $(this).parent(".slider-item");
      item.toggleClass("indexed hidden")
      if (item.is(":first-of-type")) {
        $(".slider-item:last-of-type")
          .toggleClass("indexed hidden");
      } else {
        item
          .prev()
          .toggleClass("indexed hidden");
      }
    });


    $(".slider-item").on("click", ".next", function (e) {
      var item = $(this).parent(".slider-item");
      item.toggleClass("indexed hidden");
      if (item.is(":last-of-type")) {
        $(".slider-item:first-of-type")
          .toggleClass("indexed hidden");
      } else {
        item
          .next()
          .toggleClass("indexed hidden");
      }
      // setTimeout(function () {
      //   $(".slider-item.indexed .next").click();
      // }, 10000);
    });
  
    setInterval(function () {
      $(".slider-item.indexed .next").click();
    }, 3000);
  });


