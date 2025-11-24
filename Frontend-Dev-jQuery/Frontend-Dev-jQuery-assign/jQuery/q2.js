// Q2 – Product Highlight

$(document).ready(function () {
  // 1. Click on a product → highlight background.
  $(".product").on("click", function (e) {
    // Ignore clicks on favorite icon so its own handler runs
    if ($(e.target).hasClass("favorite")) {
      return;
    }
    // Remove highlight from all products first
    $(".product").removeClass("highlighted");
    // Then add highlight to the clicked product
    $(this).addClass("highlighted");

    // 5. Show an alert if a product is out of stock (using data attribute).
    const stock = $(this).data("stock"); // reads data-stock attribute
    if (stock === "out") {
      alert($(this).find("h3").text() + " is currently out of stock.");
    }
  });

  // 2. Hover over a product → show additional product details.
  $(".product").hover(
    function () {
      // slideDown reveals the details smoothly on mouse enter
      $(this).find(".details").stop(true, true).slideDown();
    },
    function () {
      // slideUp hides the details when mouse leaves
      $(this).find(".details").stop(true, true).slideUp();
    }
  );

  // 3. Clicking a “Favorite” icon → toggles a “selected” class.
  $(".favorite").on("click", function (e) {
    e.stopPropagation(); // prevent triggering parent click handler
    // Toggle CSS class to visually mark the item as favorite
    $(this).toggleClass("selected");
  });

  // 4. Apply different styles to products with discounts using attribute selector.
  // (The main styling is done via CSS using [data-discount="true"].)
  // Here we can also add a small glow via jQuery for extra effect.
  $("[data-discount='true']").each(function () {
    // Add an extra class to emphasize discount via JS if needed
    $(this).addClass("discounted-js");
  });
});
