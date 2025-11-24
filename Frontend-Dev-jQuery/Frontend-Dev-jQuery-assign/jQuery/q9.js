// Q9 – Multi-jQuery Widgets
// We use jq1 for carousel & widget highlighting, jq2 for modal and tooltips.

(function () {
  // 1. Version 1 → handles carousel slider rotation.
  jq1(function () {
    var $slides = jq1(".slide");
    var index = 0;

    function showSlide(i) {
      $slides.removeClass("active").eq(i).addClass("active");
    }

    setInterval(function () {
      index = (index + 1) % $slides.length;
      showSlide(index);
    }, 3000);

    // 3. Version 1 → highlights active widget.
    jq1(".widget").on("click", function () {
      jq1(".widget").removeClass("active-widget");
      jq1(this).addClass("active-widget");
    });
  });

  // 2. Version 2 → manages modal popups for notifications.
  // 4. Version 2 → attaches tooltips on hover.
  jq2(function () {
    var $overlay = jq2("#modal-overlay");

    // Open modal
    jq2("#open-modal-btn").on("click", function () {
      $overlay.fadeIn();
    });

    // Close modal
    jq2("#close-modal-btn").on("click", function () {
      $overlay.fadeOut();
    });

    // Simple tooltip implementation
    jq2(".tooltip-target").hover(
      function (e) {
        var tipText = jq2(this).data("tip");
        var $tip = jq2("<span class='tooltip-box'></span>").text(tipText);
        // Attach tooltip element after the hovered span
        jq2(this).after($tip);
      },
      function () {
        jq2(this).siblings(".tooltip-box").remove();
      }
    );
  });
})();
