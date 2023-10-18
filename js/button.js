function setupScrollButton() {
  const scrollButton = document.getElementById("scroll-btn");

  window.addEventListener("scroll", () => {
    if (document.body.scrollTop > 10 || document.documentElement.scrollTop > 10) {
      scrollButton.style.display = "block";
    } else {
      scrollButton.style.display = "none";
    }
  });

  scrollButton.addEventListener("click", () => {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE, and Opera
  });
}

// Call the function to set up the scroll button behavior
setupScrollButton();

