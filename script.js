// Toggle the menu on hamburger click
document.getElementById('hamburger').addEventListener('click', function() {
    const navLinks = document.getElementById('nav-links');
    navLinks.classList.toggle('active');
});

// Smooth scrolling for navigation links
document.addEventListener('DOMContentLoaded', function() {
    // Get all navigation links
    const navLinks = document.querySelectorAll('#nav-links a');
    
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            
            // Get the target section id from the href
            const targetId = this.getAttribute('href');
            
            // Get the target section
            const targetSection = document.querySelector(targetId);
            
            // Get the header height (for offset)
            const headerHeight = document.querySelector('nav').offsetHeight;
            
            // Calculate the target position
            const targetPosition = targetSection.offsetTop - headerHeight;
            
            // Smooth scroll to target
            window.scrollTo({
                top: targetPosition,
                behavior: 'smooth'
            });
            
            // If mobile menu is open, close it after clicking
            const navLinks = document.getElementById('nav-links');
            if (navLinks.classList.contains('active')) {
                navLinks.classList.remove('active');
            }
        });
    });
});



  
 






 
  
  
  document.addEventListener('DOMContentLoaded', () => {
    // Array of research image URLs to cycle through
    const researchImagesArray = [
      "1 (1).jpg",  
        "1 (2).jpg",  
        "1 (3).jpg",  
        "1 (4).jpg",  
        "1 (5).jpg",  
        "1 (6).jpg",  
        "1 (7).jpg",  
        "1 (8).jpg",  
        "1 (9).jpg",  
        "1 (10).jpg",  
        "1 (11).jpg",  
        "1 (12).jpg",  
        "1 (13).jpg",  
        "1 (14).jpg",  
        "1 (15).jpg",  
        "1 (16).jpg",  
        "1 (17).jpg",  
        "1 (18).jpg",  
        "1 (19).jpg",  
        "1 (20).jpg",  
        "1 (21).jpg"
    ];
  
    const researchImageElements = [
      document.getElementById('research-img-1'),
      document.getElementById('research-img-2'),
      document.getElementById('research-img-3')
    ];
  
    // Initialize each research image with a random image from the array
    researchImageElements.forEach(imgEl => {
      imgEl.src = researchImagesArray[Math.floor(Math.random() * researchImagesArray.length)];
    });
  
    // Function to update an image tile with a fade-out/fade-in effect
    function updateResearchImage(imgEl) {
      imgEl.style.opacity = 0; // fade out
      setTimeout(() => {
        let newImage = researchImagesArray[Math.floor(Math.random() * researchImagesArray.length)];
        imgEl.src = newImage;
        imgEl.style.opacity = 1; // fade in
      }, 1000); // 1-second delay to match fade transition
    }
  
    // Set interval for each image tile to update periodically (every 4 seconds)
    researchImageElements.forEach(imgEl => {
      setInterval(() => {
        updateResearchImage(imgEl);
      }, 4000);
    });
  });
  