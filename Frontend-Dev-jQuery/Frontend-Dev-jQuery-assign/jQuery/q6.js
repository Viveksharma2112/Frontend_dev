// Q6 – Event Subscription Panel

$(document).ready(function () {
  let notificationsEnabled = false;

  // Helper function to show a success message dynamically in the DOM
  function showMessage(text) {
    $("#status").empty().append(
      $("<p>").addClass("success-msg").text(text)
    );
  }

  // 1. Subscribe → enable notifications.
  $("#subscribe-btn").on("click", function () {
    notificationsEnabled = true;
    showMessage("Notifications have been enabled.");
  });

  // 2. Unsubscribe → disable notifications.
  $("#unsubscribe-btn").on("click", function () {
    notificationsEnabled = false;
    showMessage("Notifications have been disabled.");
  });

  // Shared click handler for all topic buttons
  function topicClickHandler() {
    const topicName = $(this).data("topic");
    if (notificationsEnabled) {
      showMessage("You will receive notifications for: " + topicName);
    } else {
      showMessage("Notifications are disabled. Enable them to follow: " + topicName);
    }
  }

  // Attach handler using .on() so it also works for dynamically added topics
  $(".topic-list").on("click", ".topic-btn", topicClickHandler);

  // 3. Dynamically add new subscription topics → attach .on() click events.
  $("#add-topic-btn").on("click", function () {
    const topicName = $("#new-topic-input").val().trim();
    if (!topicName) return;
    const $li = $("<li>");
    const $btn = $("<button>")
      .addClass("topic-btn")
      .attr("data-topic", topicName)
      .text(topicName);
    $li.append($btn);
    $(".topic-list").append($li);
    $("#new-topic-input").val("");

    showMessage("Topic added: " + topicName);
  });

  // 4. Remove specific subscription → detach .off() event.
  $("#remove-topic-btn").on("click", function () {
    const topicName = $("#remove-topic-input").val().trim();
    if (!topicName) return;

    // Find button by data-topic
    const $btn = $(".topic-btn").filter(function () {
      return $(this).data("topic") === topicName;
    });

    if ($btn.length) {
      // .off() removes events from the selected button, then remove its list item
      $btn.off("click");
      $btn.closest("li").remove();
      showMessage("Topic removed: " + topicName);
    } else {
      showMessage("Topic not found: " + topicName);
    }
  });
});
