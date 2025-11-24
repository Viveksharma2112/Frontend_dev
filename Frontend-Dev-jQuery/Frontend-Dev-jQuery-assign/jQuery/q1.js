// Q1 – Welcome Page Greeting

// Run logic after DOM is fully loaded
$(document).ready(function () {
  // Determine greeting based on current time of day
  function getTimeBasedGreeting() {
    const hour = new Date().getHours();
    if (hour < 12) {
      return "Good Morning!";
    } else if (hour < 18) {
      return "Good Afternoon!";
    } else {
      return "Good Evening!";
    }
  }

  // 1. On page load → display a personalized greeting
  const initialGreeting = getTimeBasedGreeting();
  $("#greeting").text(initialGreeting);

  // 2. Button “Change Greeting” → changes text to a motivational quote.
  $("#change-greeting-btn").on("click", function () {
    // Update only the greeting text, not the whole page
    $("#greeting").text("Keep going, you are doing great! 🌟");
  });

  // 3. Toggle visibility of a welcome message using another button.
  $("#toggle-welcome-btn").on("click", function () {
    // slideToggle adds a smooth animation while showing/hiding
    $("#welcome-message").slideToggle();
  });

  // 4. Show an alert when greeting is clicked.
  $("#greeting").on("click", function () {
    // Use text() to read the current greeting and show it in an alert
    alert("Greeting clicked: " + $(this).text());
  });
});
