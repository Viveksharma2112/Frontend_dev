// Q5 – Team Members Directory

$(document).ready(function () {
  // 1. Click a manager → highlight all direct reports.
  $(".manager").on("click", function () {
    // Remove previous highlights
    $(".employee").removeClass("highlight");
    // .parent() gets <ul class='team'>, then .find('.employee') all direct reports
    $(this).parent().find(".employee").addClass("highlight");
  });

  // 2. Hover on an employee → show contact info using .next().
  $(".employee .name").hover(
    function () {
      // .next() finds the immediate sibling span.contact
      $(this).next(".contact").show();
    },
    function () {
      $(this).next(".contact").hide();
    }
  );

  // 3. Click on a department → change background of all members in that department using .children().
  $(".dept-title").on("click", function () {
    $(".department .employee, .department .manager").removeClass("highlight");
    const dept = $(this).parent(".department");
    // children('.team') gets the list, then find managers + employees
    dept.children(".team").children().addClass("highlight");
  });

  // 4. Select a random employee → highlight sibling employees.
  $("#random-employee-btn").on("click", function () {
    $(".employee").removeClass("random-highlight");
    const $employees = $(".employee");
    const randomIndex = Math.floor(Math.random() * $employees.length);
    const $randomEmployee = $employees.eq(randomIndex);
    // Highlight siblings within the same employee list
    $randomEmployee.siblings(".employee").addClass("random-highlight");
  });

  // 5. Collapse/expand team using .parent() and .find().
  $("#collapse-all-btn").on("click", function () {
    // .find('.employee-list') searches inside each department
    $(".department").find(".employee-list").slideUp();
  });

  $("#expand-all-btn").on("click", function () {
    $(".department").find(".employee-list").slideDown();
  });
});
