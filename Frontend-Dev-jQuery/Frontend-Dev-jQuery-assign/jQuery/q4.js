// Q4 – Special Offer Banner

$(document).ready(function () {
  const $banners = $(".banner");
  let currentIndex = 0;

  // Helper: show only the current banner, hide others
  function showCurrentBanner() {
    $banners.hide().eq(currentIndex).fadeIn();
  }

  // Initialize: show the first banner
  showCurrentBanner();

  // 1. “Hide” button → hide specific banners.
  $("#hide-btn").on("click", function () {
    // hide() immediately hides all banners
    $banners.hide();
  });

  // 2. “Show” button → show hidden banners.
  $("#show-btn").on("click", function () {
    $banners.show();
  });

  // 3. “Slide Up/Down” buttons → toggle banners.
  $("#slide-toggle-btn").on("click", function () {
    $(".banner-container").slideToggle();
  });

  // 4. “Fade In/Fade Out” → show/hide banners gradually.
  $("#fade-toggle-btn").on("click", function () {
    $(".banner-container").fadeToggle();
  });

  // 5. Automatically rotate through banners every 5 seconds using .fadeIn()/.fadeOut().
  setInterval(function () {
    // fadeOut current banner then show the next one
    $banners.eq(currentIndex).fadeOut(function () {
      currentIndex = (currentIndex + 1) % $banners.length;
      $banners.eq(currentIndex).fadeIn();
    });
  }, 5000);
});
