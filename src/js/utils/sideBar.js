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
