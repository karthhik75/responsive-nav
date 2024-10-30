// Select the hamburger icon and navigation menu
const hamburger = document.querySelector(".nav__hamburger");
const linksContainer = document.querySelector(".nav__menu");
// Select all navigation links for event listeners
const links = document.querySelectorAll(".nav__menu__link"); // Using querySelectorAll to get all links

// Event listener for hamburger icon click to toggle menu visibility
hamburger.addEventListener("click", () => {
  linksContainer.classList.toggle("active"); // Toggle the 'active' class on menu
  hamburger.classList.toggle("active"); // Toggle the 'active' class on hamburger icon
});

// Event listener for window resize to close menu if necessary
window.addEventListener("resize", () => {
  if (window.matchMedia("(max-width: 550px)").matches) {
    // Check if window width is less than 550px
    closeMenu(); // Close menu if true
  }
});

// Initial check to close menu if the window width is less than 550px
if (window.matchMedia("(max-width: 550px)").matches) {
  // Ensure the correct parentheses
  closeMenu(); // Close menu on load
}

// Function to close the menu when a link is clicked
function closeMenu() {
  links.forEach((link) => {
    link.addEventListener("click", () => {
      linksContainer.classList.remove("active"); // Remove 'active' class from menu
      hamburger.classList.remove("active"); // Remove 'active' class from hamburger
    });
  });
}
