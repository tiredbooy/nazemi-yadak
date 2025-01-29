
// Hero Section Slider  

const heroSectionItems = [  
    {  
        banner: "../assets/images/cheryHero2.jpg",  
        title: "بهترین لوازم یدکی برای ماشین‌های چینی",  
        description: `ما ارائه‌دهنده بهترین و باکیفیت‌ترین لوازم یدکی برای انواع  
                      خودروهای چینی هستیم. کیفیت تضمینی، قیمت مناسب و ارسال سریع به  
                      سراسر کشور.`,  
        buttonText: "مشاهده محصولات"  
    },  
    {  
        banner: "../assets/images/cheryHero.jpg",  
        title: "آموزش تعویض لوازم یدکی خودروهای چینی",  
        description: `در بخش آموزشی سایت ما، یاد بگیرید چگونه به آسانی و با اطمینان قطعات یدکی   
                      خودروهای چینی خود را تعویض کنید. راهنمایی کامل برای مبتدیان و حرفه‌ای‌ها.`,  
        buttonText: "یاد بگیرید بیشتر"  
    },  
    {  
        banner: "../assets/images/carHero.jpg",  
        title: "پشتیبانی و مشاوره خرید لوازم یدکی",  
        description: `تیم پشتیبانی ما آماده است تا شما را در انتخاب بهترین قطعات یدکی   
                      متناسب با خودروتان راهنمایی کند. با ما تماس بگیرید و بهترین تجربه خرید را داشته باشید.`,  
        buttonText: "تماس با ما"  
    },  
];  

let heroCurrentIndex = 0;

function loadSlides() {  
    const slidesContainer = document.querySelector('.slides');  
    const fragment = document.createDocumentFragment();  

    heroSectionItems.forEach((item, index) => {  
        const slideDiv = document.createElement('div');  
        slideDiv.className = "slide w-full h-full absolute inset-0 transition-opacity duration-700 ease-in-out";  
        slideDiv.innerHTML = `<img class="w-full h-full object-cover" src="${item.banner}" alt="${item.title}" />`;  
        fragment.appendChild(slideDiv);  

        // Set opacity only for the current slide  
        slideDiv.style.opacity = index === heroCurrentIndex ? '1' : '0';  
    });  

    slidesContainer.appendChild(fragment);  
    updateContent();  
    updateDots();  
}

function updateContent() {  
    const titleElement = document.getElementById('heroSectionTitle');  
    const descriptionElement = document.getElementById('heroSectionDes');  
    const buttonElement = document.querySelector('.hero-button'); // Change this line  

    titleElement.textContent = heroSectionItems[heroCurrentIndex].title;  
    descriptionElement.textContent = heroSectionItems[heroCurrentIndex].description;  
    buttonElement.textContent = heroSectionItems[heroCurrentIndex].buttonText; // Update button text  
}  

function changeSlide(direction) {  
    const slides = document.querySelectorAll('.slide');  
    slides[heroCurrentIndex].style.opacity = '0'; // Fade out current slide  
    heroCurrentIndex = (heroCurrentIndex + direction + heroSectionItems.length) % heroSectionItems.length;  
    slides[heroCurrentIndex].style.opacity = '1'; // Fade in new slide  
    updateContent();  
    updateDots();  
}  

function updateDots() {  
    const dotsContainer = document.querySelector('.indicator-dots');  
    dotsContainer.innerHTML = '';  

    heroSectionItems.forEach((_, index) => {  
        const dot = document.createElement('div');  
        dot.className = `w-3 h-3 rounded-full cursor-pointer z-50 ${index === heroCurrentIndex ? 'bg-white opacity-100' : 'bg-white opacity-50'}`;  
        dot.onclick = () => {  
            const slides = document.querySelectorAll('.slide');  
            slides[heroCurrentIndex].style.opacity = '0';  
            heroCurrentIndex = index;  
            slides[heroCurrentIndex].style.opacity = '1';  
            updateContent();  
            updateDots();  
        };  
        dotsContainer.appendChild(dot);  
    });  
}  


// Event Listeners  
document.getElementById('prevSlide').onclick = () => changeSlide(-1);  
document.getElementById('nextSlide').onclick = () => changeSlide(1);  

// Initialize slider on page load  
window.onload = loadSlides;  


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