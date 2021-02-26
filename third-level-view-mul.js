var evnt;
var cntrMode;

$(document).ready(function () {
  $(".image-row-level2 .card img").click(function (e) {
    /* $('.image-row-level2 .slider-for .slick-prev').unbind(); */
    evnt = $(e.target).attr("data-target");
    // console.log(evnt);
    if ($(`${evnt} .modal-body`).has(".slick-initialized").length < 1) {
      var totl = $(`${evnt} .fst-wind`).length;
      /*  var ttal; */
      // console.log(totl);
      if (totl > 5) {
        /* ttal = 5; */
        cntrMode = true;
      } else {
        /* ttal = 5; */
        cntrMode = false;
      }
      $(`${evnt} .slider-for`).slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: true,
        fade: true,
        /* centerPadding: '80%', */
        adaptiveHeight: true,
        asNavFor: `${evnt} .slider-nav`,
      });
      $(`${evnt} .slider-nav`).slick({
        slidesToShow: 5,
        slidesToScroll: 1,
        asNavFor: `${evnt} .slider-for`,
        dots: false,
        centerMode: cntrMode,
        focusOnSelect: true,
        responsive: [
          {
            breakpoint: 768,
            settings: {
              slidesToShow: 3,
            },
          },
        ],
      });
    }
    countUpdHghlt(evnt);
    prevNextArr();
  });

  //To show the same image after the modal is reopened
  $("body").on(
    "click",
    ".slider-for img, .slider-nav .backdrop, .slick-arrow",
    function () {
      countUpdHghlt(evnt);
    }
  );

  $(document).keydown(function (e) {
    if (
      $(`${evnt} .modal-body`).has(".slick-initialized").length == 1 &&
      $(document).has(".modal-open").length == 1
    ) {
      if (e.keyCode == 37 || e.keyCode == 39) {
        if (e.keyCode == 37) {
          /* 7th Jan Mihir */
          $(`${evnt} .slider-for`).slick("slickPrev");
        }
        if (e.keyCode == 39) {
          $(`${evnt} .slider-for`).slick("slickNext");
        }
        countUpdHghlt(evnt);
      }
    }
  });

  $(document).click(function (e) {
    // console.log(e);
    /* if ($(e.target).is("div.col-lg-12")) {
      $("#thrd-lev-mod1").modal("hide");
      $(".modal-backdrop").hide();
    } */
  });
});

// To update the Count of images and highlight the currently active image
function countUpdHghlt(evnt) {
  var crnt = $(`${evnt} .slider-for .slick-track`).find(
    "div.slick-slide.slick-current .fst-wind"
  );
  console.log(crnt, evnt);
  var current = 1;
  if (crnt != undefined) {
    current = $(crnt).attr("data-cnt");
  }
  var ttl = $(`${evnt} .fst-wind`).length;
  /* 7th Jan Mihir */
  if (ttl <= 5) {
    $(".slick-track").css({ margin: "0px" });
    $(".slick-slide").css({ margin: "0 4px 0 4px" });
  }
  $(`${evnt} .photo-cnt`).html("Photos " + current + "/" + ttl);
  $(`${evnt} .slick-active .sec-wind .backdrop`).show();
  /* 7th Jan Mihir */
  $(`${evnt} .slick-current .sec-wind .backdrop`).hide();
}

$(window).resize(function () {
  prevNextArr();
});

// To Hide and Show the Previous and Next Arrows based on the resolution
function prevNextArr() {
  if ($(document).width() < 576) {
    $(
      ".third-level-view .slick-prev, .third-level-view .slick-next, .third-level-view .slider-nav .slick-prev, .third-level-view .slider-nav .slick-next"
    ).hide();
  } else {
    $(
      ".third-level-view .slick-prev, .third-level-view .slick-next, .third-level-view .slider-nav .slick-prev, .third-level-view .slider-nav .slick-next"
    ).show();
  }
}
