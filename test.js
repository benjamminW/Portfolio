document.addEventListener("DOMContentLoaded", function () {
    const carousel = document.querySelector("#carousel");
    const slides = document.querySelectorAll(".carousel-slide");
  
    let currentIndex = 0;
    const slideWidth = slides[0].clientWidth;
  
    // Function to move the carousel
    function moveCarousel() {
      currentIndex++;
      if (currentIndex >= slides.length) {
        currentIndex = 0; // Reset to the first slide
      }
      carousel.style.transform = `translateX(${-currentIndex * slideWidth}px)`;
    }
  
    // Apply CSS transition for smooth scrolling
    carousel.style.transition = "transform 0.5s ease-in-out";
  
    // Set interval for auto-scroll
    setInterval(moveCarousel, 3000); // Change slides every 3 seconds
  });
  
  

  
  Fancybox.bind('[data-fancybox="gallery"]', {
    Toolbar: true,
    Thumbs: {
      autoStart: true,
    },
  });

  const options = {
    contentClick: "toggleCover",
    Images: {
      Panzoom: {
        panMode: "mousemove",
        mouseMoveFactor: 1.1,
        mouseMoveFriction: 0.12,
      },
    },
  };