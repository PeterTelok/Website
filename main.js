document.addEventListener("DOMContentLoaded", function() {
    const heading = document.querySelector("#my-heading h2");
    
    if (heading) { 
      const text = "Hi ! \n I'm Peter";
      let i = 0;
      
      setInterval(function() {
        if (i < text.length) {
          if (text.charAt(i) === "\n") {
            heading.innerHTML += "<br>";
          } else {
            heading.textContent += text.charAt(i);
          }
          i++;
        }
      }, 100);
    } else {
      console.error("Element with ID 'my-heading' not found.");
    }
  });
 
  
  
  
  window.addEventListener("load", function() {
    const boxes = document.querySelectorAll(".box-row");
    
    function checkScroll() {
      const windowHeight = window.innerHeight;
      boxes.forEach(box => {
        const boxTop = box.getBoundingClientRect().top;
        if (boxTop < windowHeight - 100) {
          box.style.opacity = "1";
        }
      });
    }
    
    checkScroll();
    
    window.addEventListener("scroll", checkScroll);
  });





  