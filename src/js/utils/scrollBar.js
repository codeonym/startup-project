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