document.addEventListener("DOMContentLoaded", function () {
  // Check if the user is logged in
  if (localStorage.getItem("loggedIn") === "true") {
    // If logged in, hide the hover-trigger element (emoji and coupon)
    const hoverTrigger = document.getElementById("hoverTrigger");
    if (hoverTrigger) {
      hoverTrigger.style.display = "none";
    }
  }

  const hoverTrigger = document.getElementById("hoverTrigger");
  const ghostCoupon = document.getElementById("ghostCoupon");
  const claimButton = document.querySelector(".ghost-coupon button");

  let isClicked = false;

  // Show the coupon when emoji is clicked
  hoverTrigger.addEventListener("click", function () {
    if (!isClicked) {
      ghostCoupon.style.display = "block";
      isClicked = true;
    } else {
      // Hide the coupon when clicked a second time
      ghostCoupon.style.display = "none";
      isClicked = false;
    }
  });

  // Optional: hide coupon on mouse leave if not yet clicked
  hoverTrigger.addEventListener("mouseleave", function () {
    if (!isClicked) {
      ghostCoupon.style.display = "none";
    }
  });

  // When "Claim Now" is clicked
  claimButton.addEventListener("click", function () {
    // Open login page in a new tab
    window.open("login.html", "_blank");

    // Hide the emoji and coupon from the current page
    if (hoverTrigger) {
      hoverTrigger.style.display = "none";  // Hide the emoji once clicked
      ghostCoupon.style.display = "none";   // Hide the coupon as well
    }

    // Set a flag that the coupon has been claimed and the user is logged in
    localStorage.setItem("couponClaimed", "true");
    localStorage.setItem("loggedIn", "true"); // Assuming the user is logged in once they claim the coupon
  });

  // If the coupon was claimed before, ensure the emoji doesn't show up again
  if (localStorage.getItem("couponClaimed") === "true") {
    if (hoverTrigger) {
      hoverTrigger.style.display = "none";  // Hide the emoji if the coupon was claimed
    }
  }
});
