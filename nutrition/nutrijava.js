// Toggle menu visibility for mobile view
const menuToggle = document.querySelector('.menu-toggle');
const navLinks = document.querySelector('.nav-links');
menuToggle.addEventListener('click', () => {
  navLinks.classList.toggle('active');
});

// Animate hero section on load
window.addEventListener("load", () => {
  document.querySelector(".hero").classList.add("animate");
});

// Animate plan cards on scroll into view
const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("animate");
      observer.unobserve(entry.target);
    }
  });
}, {
  threshold: 0.2
});

document.querySelectorAll(".plan-card").forEach(card => {
  observer.observe(card);
});

// Display logged-in user's name or email in the header
document.addEventListener("DOMContentLoaded", function () {
  const isLoggedIn = localStorage.getItem("loggedIn") === "true";
  const email = localStorage.getItem("userEmail");
  const userName = localStorage.getItem("userName");

  if (isLoggedIn && (userName || email)) {
    const userDisplay = document.getElementById("userDisplay");
    userDisplay.textContent = `👤 ${userName || email}`; // Display either user's name or email
  }
});
