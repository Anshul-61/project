document.addEventListener("DOMContentLoaded", function () {
  const hoverTrigger = document.getElementById("hoverTrigger");
  const ghostCoupon = document.getElementById("ghostCoupon");
  const claimButton = document.querySelector(".ghost-coupon button");
  const email = localStorage.getItem("userEmail");
  const loggedIn = localStorage.getItem("loggedIn") === "true";

  if (loggedIn && email) {
    hoverTrigger.style.display = "none";
    console.log(`Welcome back! Logged in as: ${email}`);

    // Show user email in navigation bar
    const userDisplay = document.getElementById("userDisplay");
    if (userDisplay) {
      userDisplay.textContent = `👤 ${email}`;
    }
  }

  let isClicked = false;

  hoverTrigger.addEventListener("click", function () {
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
    window.open("login.html", "_blank");
    hoverTrigger.style.display = "none";
    ghostCoupon.style.display = "none";
    localStorage.setItem("loggedIn", "true");
  });
});
