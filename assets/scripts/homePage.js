// Hero Section Slider
let heroCurrentIndex = 0;

function changeSlide(direction) {
  const slides = document.querySelectorAll(".slide");

  slides[heroCurrentIndex].style.opacity = "0";
  heroCurrentIndex =
    (heroCurrentIndex + direction + slides.length) % slides.length;
  slides[heroCurrentIndex].style.opacity = "1";
}

// Event Listeners
document.getElementById("prevSlide").onclick = () => changeSlide(-1);
document.getElementById("nextSlide").onclick = () => changeSlide(1);

document.addEventListener("DOMContentLoaded", () => {

  var swiper1 = new Swiper(".mySwiper1", {
    loop: true,
    spaceBetween: 5,
    slidesPerView: 1.5,

    // Responsive breakpoints
    breakpoints: {
      640: { slidesPerView: 2.5, spaceBetween: 40 },
      1024: { slidesPerView: 4.5, spaceBetween: 50 },
    },

    navigation: { 
      nextEl: ".swiper-button-prev-custom",
      prevEl: ".swiper-button-next-custom",
      disabledClass: "opacity-50 pointer-events-none",
    },

    pagination: {
      el: ".product-swiper-pagination",
      clickable: true,
      dynamicBullets: true,
      renderBullet: function (index, className) {
        return (
          '<span class="' +
          className +
          ' w-2 h-2 bg-gray-300 rounded-full mx-1 cursor-pointer"></span>'
        );
      },
    },

    autoplay: {
      delay: 3000,
      disableOnInteraction: false,
    },
  });

  var swiper2 = new Swiper("#tutorialSection .mySwiper2", {
    loop: true,
    // loopAdditionalSlides: 4,
    spaceBetween: 16,
    slidesPerView: 1.5,
    // centeredSlides: true,

    breakpoints: {
      640: {
        slidesPerView: 2.5,
        spaceBetween: 20,
        centeredSlides: false,
      },
      1024: {
        slidesPerView: 4,
        spaceBetween: 24,
      },
    },

    navigation: {
      nextEl: "#prevBtn",
      prevEl: "#nextBtn",
      disabledClass: "opacity-50 pointer-events-none",
    },

    pagination: {
      el: ".swiper-pagination",
      clickable: true,
      dynamicBullets: true,
      renderBullet: function (index, className) {
        return (
          '<span class="' +
          className +
          ' w-2 h-2 bg-gray-300 rounded-full mx-1 cursor-pointer"></span>'
        );
      },
    },

    autoplay: {
      delay: 3000,
      disableOnInteraction: false,
    },
  });

});
