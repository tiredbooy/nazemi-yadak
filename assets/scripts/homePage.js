
// Hero Section Slider  
let heroCurrentIndex = 0;

function changeSlide(direction) {
  const slides = document.querySelectorAll('.slide');
  const titles = [
    "بهترین لوازم یدکی برای ماشین‌های چینی",
    "آموزش تعویض لوازم یدکی خودروهای چینی",
    "پشتیبانی و مشاوره خرید لوازم یدکی"
  ];
  const descriptions = [
    "ما ارائه‌دهنده بهترین و باکیفیت‌ترین لوازم یدکی برای انواع خودروهای چینی هستیم. کیفیت تضمینی، قیمت مناسب و ارسال سریع به سراسر کشور.",
    "در بخش آموزشی سایت ما، یاد بگیرید چگونه به آسانی و با اطمینان قطعات یدکی خودروهای چینی خود را تعویض کنید.",
    "تیم پشتیبانی ما آماده است تا شما را در انتخاب بهترین قطعات یدکی متناسب با خودروتان راهنمایی کند."
  ];
  const buttons = ["مشاهده محصولات", "یاد بگیرید بیشتر", "تماس با ما"];

  slides[heroCurrentIndex].style.opacity = '0';
  heroCurrentIndex = (heroCurrentIndex + direction + slides.length) % slides.length;
  slides[heroCurrentIndex].style.opacity = '1';

  document.getElementById('heroSectionTitle').textContent = titles[heroCurrentIndex];
  document.getElementById('heroSectionDes').textContent = descriptions[heroCurrentIndex];
  document.querySelector('.hero-button').textContent = buttons[heroCurrentIndex];
}

// Event Listeners
document.getElementById('prevSlide').onclick = () => changeSlide(-1);
document.getElementById('nextSlide').onclick = () => changeSlide(1);


document.addEventListener("DOMContentLoaded", () => {
    const container = document.getElementById("tutorialCardContainer");
    const prevBtn = document.getElementById("prevBtn");
    const nextBtn = document.getElementById("nextBtn");
    const progressIndicator = document.getElementById("progressIndicator");
    let currentIndex = 0;
    let direction = -1; // Start moving left (rtl direction)
    let autoSlide;

    function updateProgress() {
        const totalWidth = container.scrollWidth - container.clientWidth;
        const scrollPosition = container.scrollLeft;
        const progress = (scrollPosition / totalWidth) * 100;
        progressIndicator.style.width = `${progress}%`;
    }

    function slide() {
        const cardWidth = container.children[0].offsetWidth + 24; // card width + gap
        container.scrollBy({ left: direction * cardWidth, behavior: "smooth" });
        currentIndex += direction;

        // Direction reversal logic
        if (currentIndex <= 0) {
            direction = 1; // Change direction to right
        } else if (currentIndex >= container.children.length - 1) {
            direction = -1; // Change direction to left
        }
    }

    function startAutoSlide() {
        clearInterval(autoSlide);
        autoSlide = setInterval(slide, 2000);
    }

    nextBtn.addEventListener("click", () => {
        direction = 1;
        slide();
        startAutoSlide();
    });

    prevBtn.addEventListener("click", () => {
        direction = -1;
        slide();
        startAutoSlide();
    });

    // Update progress bar during scroll
    container.addEventListener("scroll", updateProgress);
    container.addEventListener("mouseenter", () => clearInterval(autoSlide));
    container.addEventListener("mouseleave", startAutoSlide);

    startAutoSlide();
});