document.querySelectorAll('.smooth-scroll').forEach(function (element) {
  
    element.addEventListener('click', function (e) {
      e.preventDefault();
    // Remove active class from all links
    document.querySelectorAll('.smooth-scroll').forEach(function (link) {
      link.classList.remove('active');
    });
  
    // Add active class to the clicked link
    this.classList.add('active');
      
      document.querySelector(this.getAttribute('href')).scrollIntoView({
        behavior: 'smooth'
      });
    });
  });


  function changeBackgroundColor() {
    var colors = ["#145da0", "#5d5860", "#1f0a1d", "#0e2500", "#250000"];
    var randomColor = colors[Math.floor(Math.random() * colors.length)];
    
    // Remove existing color classes
    document.body.classList.remove("color-blue", "color-gray", "color-black", "color-green", "color-red");
    
    // Add the corresponding color class
    if (randomColor === "#145da0") {
      document.body.classList.add("color-blue");
    } else if (randomColor === "#5d5860") {
      document.body.classList.add("color-gray");
    } else if (randomColor === "#1f0a1d") {
      document.body.classList.add("color-black");
    } else if (randomColor === "#0e2500") {
      document.body.classList.add("color-green");
    } else if (randomColor === "#250000") {
      document.body.classList.add("color-red");
    }
  }
  

  setInterval(changeBackgroundColor, 10000);


  document.addEventListener("DOMContentLoaded", function() {
    var navLinks = document.querySelectorAll(".nav li a");
  
    window.addEventListener("scroll", function() {
      var fromTop = window.scrollY;
  
      navLinks.forEach(function(link) {
        var section = document.querySelector(link.hash);
        var sectionTop = section.offsetTop - 50; // Adjusted for padding
  
        if (sectionTop <= fromTop && sectionTop + section.offsetHeight > fromTop) {
          link.classList.add("active");
        } else {
          link.classList.remove("active");
        }
      });
    });
  });
  
  