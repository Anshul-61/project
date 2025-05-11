document.addEventListener("DOMContentLoaded", function () {
  const hoverTrigger = document.getElementById("hoverTrigger");
  const ghostCoupon = document.getElementById("ghostCoupon");
  const claimButton = document.querySelector(".ghost-coupon button");
  const email = localStorage.getItem("userEmail");
  const loggedIn = localStorage.getItem("loggedIn") === "true";
  const logoutBtn = document.getElementById("logoutBtn");
  const userDisplay = document.getElementById("userDisplay");

  if (loggedIn && email) {
    hoverTrigger.style.display = "none";
    console.log(`Welcome back! Logged in as: ${email}`);

    // Show user email in navigation bar
    if (userDisplay) {
      userDisplay.textContent = `👤 ${email}`;
    }

    // Show the Logout button when logged in
    if (logoutBtn) {
      logoutBtn.style.display = "block";
    }
  } else {
    // Hide the Logout button when logged out
    if (logoutBtn) {
      logoutBtn.style.display = "none";
    }
  }

  // Handle the hover-triggered coupon logic
  let isClicked = false;

  hoverTrigger.addEventListener("click", function () {
    console.log("Hover trigger clicked");  // Debugging
    if (!isClicked) {
      ghostCoupon.style.display = "block";
      isClicked = true;
    } else {
      ghostCoupon.style.display = "none";
      isClicked = false;
    }
  });

  hoverTrigger.addEventListener("mouseleave", function () {
    if (!isClicked) {
      ghostCoupon.style.display = "none";
    }
  });

  claimButton.addEventListener("click", function () {
    window.open("../login page/signup.html", "_blank");
    hoverTrigger.style.display = "none";
    ghostCoupon.style.display = "none";
    localStorage.setItem("loggedIn", "true");
    localStorage.setItem("userEmail", email);  // Assume the email is available or capture it during login.
  });

  // Logout functionality
  if (logoutBtn) {
    logoutBtn.addEventListener("click", function () {
      // Clear localStorage on logout
      localStorage.removeItem("loggedIn");
      localStorage.removeItem("userEmail");

      // Hide the user display and logout button
      if (userDisplay) {
        userDisplay.textContent = "";
      }
      logoutBtn.style.display = "none";

      // Redirect to home page or login page
      window.location.href = "../login page/login.html"; // Or wherever you want to redirect
    });
  }
});
