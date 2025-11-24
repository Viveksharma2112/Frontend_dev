// Q8 – Dynamic Blog Posts

$(document).ready(function () {
  const $postsContainer = $("#posts-container");

  // 1. “Add New Post” → append a new post to the list.
  $("#add-post-btn").on("click", function () {
    const count = $postsContainer.children(".post").length + 1;
    const $post = $("<article>").addClass("post")
      .append($("<h3>").text("New Blog Post " + count))
      .append($("<p>").text("This is a dynamically added blog post."));
    $postsContainer.append($post);
  });

  // 2. “Prepend Featured Post” → add a post at the top.
  $("#prepend-post-btn").on("click", function () {
    const $post = $("<article>").addClass("post")
      .append($("<h3>").text("🔥 Featured: Frontend Best Practices"))
      .append($("<p>").text("Tips for writing clean and maintainable frontend code."));
    $postsContainer.prepend($post);
  });

  // 3. “Remove Last Post” → delete last element.
  $("#remove-last-post-btn").on("click", function () {
    $postsContainer.children(".post").last().remove();
  });

  // 4. Add tags to posts → use .before()/.after() for placement.
  $("#add-tags-btn").on("click", function () {
    $(".post").each(function () {
      const $title = $(this).find("h3");
      // Insert tags before and after the title using .before() and .after()
      $title.before($("<span>").addClass("tag").text("Blog"));
      $title.after($("<span>").addClass("tag").text("Article"));
    });
  });

  // 5. Highlight posts with specific keywords dynamically.
  $("#highlight-btn").on("click", function () {
    const keyword = $("#keyword-input").val().toLowerCase();
    $(".post").removeClass("highlight-keyword");

    if (!keyword) return;

    $(".post").each(function () {
      const text = $(this).text().toLowerCase();
      if (text.indexOf(keyword) !== -1) {
        $(this).addClass("highlight-keyword");
      }
    });
  });
});
