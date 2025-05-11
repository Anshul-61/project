// Check if the user is logged in on page load
document.addEventListener("DOMContentLoaded", function () {
  const isLoggedIn = localStorage.getItem("loggedIn");

  // Simply checks if user is logged in
  if (isLoggedIn === "true") {
    // User is logged in, no action taken yet
  } else {
    // User is not logged in, no action taken yet
  }
});
