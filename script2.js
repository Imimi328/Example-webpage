document.addEventListener("DOMContentLoaded", function() {
  // Add scrolling animation to the navigation links
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();

      document.querySelector(this.getAttribute('href')).scrollIntoView({
        behavior: 'smooth'
      });
    });
  });

  // Add fade-in animation to sections
  document.querySelectorAll('section').forEach(section => {
    section.classList.add('section-animation');
  });

  // Add parallax effect to sections
  document.addEventListener('scroll', function() {
    document.querySelectorAll('.parallax').forEach(section => {
      let yPos = -(window.pageYOffset / section.dataset.speed);
      section.style.backgroundPosition = `center ${yPos}px`;
    });
  });

  // Add squeeze effect when a button is clicked
  document.querySelectorAll('.nav-btn').forEach(btn => {
    btn.addEventListener('click', function() {
      // Apply the squeeze-effect class to the body
      document.body.classList.add('squeeze-effect');

      // Remove the squeeze-effect class after a delay to revert the effect
      setTimeout(function() {
        document.body.classList.remove('squeeze-effect');
      }, 500); // Adjust the duration as needed to match the transition duration
    });
  });
});
