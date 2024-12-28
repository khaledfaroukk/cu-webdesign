document.querySelectorAll('.dropdown').forEach(dropdown => {
  dropdown.addEventListener('mouseover', () => {
      const submenu = dropdown.querySelector('.dropdown-menu');
      if (submenu) submenu.style.display = 'block';
  });
  dropdown.addEventListener('mouseout', () => {
      const submenu = dropdown.querySelector('.dropdown-menu');
      if (submenu) submenu.style.display = 'none';
  });
});


window.addEventListener("scroll", function () {
  const scrollToTopBtn = document.getElementById("scrollToTopBtn");
  if (window.scrollY > 200) { 
      scrollToTopBtn.classList.add("show");
  } else {
      scrollToTopBtn.classList.remove("show");
  }
});


function scrollToTop() {
  window.scrollTo({
      top: 0,
      behavior: "smooth"
  });
}


const testimonials = document.querySelectorAll('.testimonial');
const prevButton = document.querySelector('.prev');
const nextButton = document.querySelector('.next');

let currentIndex = 0;

function showTestimonials(index) {
  testimonials.forEach((testimonial, i) => {
    testimonial.style.display = (i >= index && i < index + 2) ? 'block' : 'none';
  });
}

prevButton.addEventListener('click', () => {
  currentIndex = (currentIndex > 0) ? currentIndex - 1 : testimonials.length - 2;
  showTestimonials(currentIndex);
});

nextButton.addEventListener('click', () => {
  currentIndex = (currentIndex < testimonials.length - 2) ? currentIndex + 1 : 0;
  showTestimonials(currentIndex);
});

showTestimonials(currentIndex);


        
        
$(document).ready(function() {

  $('.counter').each(function () {
$(this).prop('Counter',0).animate({
  Counter: $(this).text()
}, {
  duration: 4000,
  easing: 'swing',
  step: function (now) {
      $(this).text(Math.ceil(now));
  }
});
});

});  







