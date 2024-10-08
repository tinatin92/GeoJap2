document.addEventListener('DOMContentLoaded', () => {
    const interBubble = document.querySelector('.interactive');
    let curX = 0;
    let curY = 0;
    let tgX = 0;
    let tgY = 0;

    function move() {
        curX += (tgX - curX) / 20;
        curY += (tgY - curY) / 20;
        interBubble.style.transform = `translate(${Math.round(curX)}px, ${Math.round(curY)}px)`;
        requestAnimationFrame(() => {
            move();
        });
    }

    window.addEventListener('mousemove', (event) => {
        tgX = event.clientX;
        tgY = event.clientY;
    });

    move();
});

const projectSwiper = new Swiper('.project-slider', {
    
  speed: 1000,
  loop: true,
  effect: 'fade',
 
 /*  autoplay: {
      delay: 2500,
      disableOnInteraction: true,
  }, */
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
 /*  pagination: {
      el: ".swiper-pagination",
      clickable: true,
  }, */
});

const header = document.querySelector('header')
const burgerIcon = document.querySelector('.burger-icon')
const navigation = document.querySelector('.navigation')
const navLinks = document.querySelectorAll('.nav-link');


burgerIcon.addEventListener('click', () =>{

  navigation.classList.toggle('open'); // Add or remove 'open' class to show/hide the menu
 


  header.classList.toggle('white');

})


navLinks.forEach(link => {
  link.addEventListener('click', () => {
     
      navigation.classList.remove('open'); // Remove 'open' to ensure it's offscreen
      header.classList.remove('white');
  });
});

Fancybox.bind('[data-fancybox="gallery"]', {
  // Your custom options for a specific gallery
});

/* var targetSection = document.querySelector(targetSectionId);

if (targetSection) {
  window.scrollTo({
    top: targetSection.offsetTop - 200,
    behavior: 'smooth'
  });
}

 */