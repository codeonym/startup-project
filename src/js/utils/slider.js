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


