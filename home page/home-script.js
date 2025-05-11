document.addEventListener("DOMContentLoaded", function () {
  const hoverTrigger = document.getElementById("hoverTrigger");
  const ghostCoupon = document.getElementById("ghostCoupon");
  const claimButton = document.querySelector(".ghost-coupon button");
  const email = localStorage.getItem("userEmail");
  const loggedIn = localStorage.getItem("loggedIn") === "true";  
  if (loggedIn && email) {
    hoverTrigger.style.display = "none";  // Hide the emoji as the user is logged in
    console.log(`Welcome back! Logged in as: ${email}`);  // You can use this email for further personalization if needed
  }

  let isClicked = false;

  // Show/hide the ghost coupon when the emoji is clicked
  hoverTrigger.addEventListener("click", function () {
    if (!isClicked) {
      ghostCoupon.style.display = "block";
      isClicked = true;
    } else {
      ghostCoupon.style.display = "none";
      isClicked = false;
    }
  });

  // Hide the coupon when mouse leaves the hover area (if not clicked)
  hoverTrigger.addEventListener("mouseleave", function () {
    if (!isClicked) {
      ghostCoupon.style.display = "none";
    }
  });

  // When "Claim Now" button is clicked
  claimButton.addEventListener("click", function () {
    window.open("login.html", "_blank");  // Open login page in a new tab
    hoverTrigger.style.display = "none";  // Hide the emoji
    ghostCoupon.style.display = "none";   // Hide the coupon

    // Simulate the login process (typically would be handled on the login page)
    localStorage.setItem("loggedIn", "true");  // Mark the user as logged in
    // Optionally, save email (after login) using: localStorage.setItem("userEmail", userEmail);
  });
});
