document.addEventListener('DOMContentLoaded', function() {
    const loadingOverlay = document.getElementById('loadingOverlay');
    const anchors = document.querySelectorAll('a');

    anchors.forEach(function(anchor) {
      anchor.addEventListener('click', function(event) {
        event.preventDefault();
        loadingOverlay.style.display = 'flex';

        const link = this.getAttribute('href');
        setTimeout(function() {
          window.location.href = link;
        }, 1000); 
      });
    });
  });