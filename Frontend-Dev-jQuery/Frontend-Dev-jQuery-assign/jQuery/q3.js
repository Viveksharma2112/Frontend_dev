// Q3 – Interactive FAQ

$(document).ready(function () {
  // 1. Click on a question → toggle answer visibility.
  $(".question").on("click", function () {
    // next() finds the immediate sibling .answer of the clicked question
    $(this).next(".answer").slideToggle();
  });

  // 2. Hover → change question color.
  $(".question").hover(
    function () {
      $(this).css("color", "#007acc");
    },
    function () {
      $(this).css("color", "");
    }
  );

  // 3. Double-click question → collapse all answers.
  $(".question").on("dblclick", function () {
    // slideUp on all answers collapses the full FAQ list
    $(".answer").slideUp();
  });

  // 4. Focus on answer input → highlight parent question.
  $(".answer-input").on("focus", function () {
    // closest('.faq-item') climbs up the DOM to the container
    const item = $(this).closest(".faq-item");
    item.addClass("focused-question");
  });

  // 5. Blur from input → reset background color.
  $(".answer-input").on("blur", function () {
    $(this).closest(".faq-item").removeClass("focused-question");
  });
});
