document.addEventListener("DOMContentLoaded", function() {
  // Get the modals
  var flyerModal = document.getElementById("flyerModal");
  var logoModal = document.getElementById("logoModal");
  var websiteModal = document.getElementById("websiteModal");

  // Get the buttons that open the modals
  var flyerBtn = document.getElementById("flyerBtn");
  var logoBtn = document.getElementById("logoBtn");
  var websiteBtn = document.getElementById("websiteBtn");

  // Function to open flyer modal with animation
  function openFlyerModal() {
    flyerModal.style.animation = "fadeIn 0.5s";
    setTimeout(function() {
      flyerModal.style.display = "block";
    }, 100); // Delay for the animation duration
  }

  // Function to open logo modal with animation
  function openLogoModal() {
    logoModal.style.animation = "fadeIn 0.5s";
    setTimeout(function() {
      logoModal.style.display = "block";
    }, 100); // Delay for the animation duration
  }

  // Function to open website modal with animation
  function openWebsiteModal() {
    websiteModal.style.animation = "fadeIn 0.5s";
    setTimeout(function() {
      websiteModal.style.display = "block";
    }, 100); // Delay for the animation duration
  }

  // Function to close modals
  function closeModal(modal) {
    modal.style.display = "none";
  }

  // Event listener for opening flyer modal with animation
  flyerBtn.addEventListener("click", function() {
    openFlyerModal();
    toggleSqueeze(this);
  });

  // Event listener for opening logo modal with animation
  logoBtn.addEventListener("click", function() {
    openLogoModal();
    toggleSqueeze(this);
  });

  // Event listener for opening website modal with animation
  websiteBtn.addEventListener("click", function() {
    openWebsiteModal();
    toggleSqueeze(this);
    // Redirect to Page2.html when the website button is clicked
    window.location.href = "Page2.html";
  });

  // Event listeners for closing modals
  document.querySelectorAll(".close").forEach(function(closeBtn) {
    closeBtn.addEventListener("click", function() {
      var modal = this.closest(".modal");
      modal.style.animation = "fadeOut 0.5s";
      setTimeout(function() {
        closeModal(modal);
      }, 500); // Duration of the fadeOut animation
    });
  });

  // Function to toggle squeezing effect
  function toggleSqueeze(btn) {
    btn.classList.add("squeeze"); // Add the class to trigger the animation
    setTimeout(function() {
      btn.classList.remove("squeeze"); // Remove the class after the animation completes
    }, 300); // Adjust the duration to match the CSS animation duration
  }
});
