

document.getElementById("scrollToTopButton").addEventListener("click", function() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
});

document.addEventListener('DOMContentLoaded', function() {
    var button = document.getElementById('redirectButton');
    button.addEventListener('click', function() {
        window.location.href = '/aboutus.html';
    });
});

// document.querySelectorAll('.card-img-top').forEach(img => {
//     img.addEventListener('click', function() {
//       const target = this.closest('.card').getAttribute('data-target');
//       document.querySelector(target).scrollIntoView({ behavior: 'smooth' });
//     });
//   });

console.log('Initializing AOS');
     AOS.init({
             once: false,    // Whether animation should happen only once - while scrolling down
        });
        
document.getElementById("toggle-map").addEventListener("click", function() {
    var overlay = document.getElementById('map-overlay');
    if (overlay.style.display === 'none') {
      overlay.style.display = 'block';
      this.textContent = 'Enable Map Interaction';
    } else {
      overlay.style.display = 'none';
      this.textContent = 'Disable Map Interaction';
    }
  });