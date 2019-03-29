$(window).on("load", function() {
  $(".marshall-slider").each(function() {
    function d() {
      h.find(".slider-item").removeClass("reveal").eq(b).addClass("reveal"),
      h.find(".paging-list .thumb").removeClass("highlight").eq(b).addClass("highlight")
    }

    function f() {
      b = h.find(".paging-list .thumb.highlight").index(),
      b === i ? b = 0 : ++b, d(b)
    }

    function a() {
      g || (g = !0, f())
    }
    var b, g = !1,
      h = $(this),
      i = h.find(".paging-list .thumb").length - 1;

    a(), h.find(".paging-list .thumb").first().addClass("highlight"),
    h.find(".slider-item").first().addClass("reveal"),
    h.find(".paging-list .thumb").on("click", function() {
      h.find(this).hasClass("highlight") || (b = h.find(this).index(), d(b), a())
    }),
    h.find(".nextbtn").on("click", function() {
      b = h.find(".paging-list .thumb.highlight").index(), b === i ? b = 0 : ++b, d(b), a()
    }),
    h.find(".prevbtn").on("click", function() {
      b = h.find(".paging-list .thumb.highlight").index(), i = h.find(".paging-list .thumb").length - 1, 0 === b ? b = i : --b, d(b), a()
    })
  })
});
