// Q7 – Search Courses

$(document).ready(function () {
  const $search = $("#course-search");
  const $courses = $(".course-list li");
  const $matchCount = $("#match-count");

  // Helper to update course list based on query
  function filterCourses() {
    const query = $search.val().toLowerCase();
    let count = 0;

    $courses.each(function () {
      const title = $(this).data("title");
      const lowerTitle = title.toLowerCase();

      // Reset previous highlighting
      $(this).html(title);

      if (!query) {
        // 3. Toggle visibility of courses not matching search (show all when empty)
        $(this).show();
      } else if (lowerTitle.indexOf(query) !== -1) {
        // Match found
        $(this).show();
        count++;

        // 2. Highlight matched text using .css() / DOM manipulation
        const startIdx = lowerTitle.indexOf(query);
        const endIdx = startIdx + query.length;
        const highlighted =
          title.substring(0, startIdx) +
          "<span class='highlight-match'>" +
          title.substring(startIdx, endIdx) +
          "</span>" +
          title.substring(endIdx);
        $(this).html(highlighted);
      } else {
        $(this).hide();
      }
    });

    // 4. Show count of matched courses dynamically.
    $matchCount.text(count);
  }

  // 1. Search input filters courses in real-time using .keyup().
  $search.on("keyup", filterCourses);

  // 5. Clear search → reset list to show all courses.
  $("#clear-search-btn").on("click", function () {
    $search.val("");
    filterCourses();
  });

  // Initialize count
  filterCourses();
});
