
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


function createTutorialSlider() {
    const slider = document.getElementById('tutorialSlider');
    const cardContainer = document.getElementById('tutorialCardContainer');
    const prevBtn = document.getElementById('prevBtn');
    const nextBtn = document.getElementById('nextBtn');

    let cards = Array.from(cardContainer.querySelectorAll('.tutorial-card'));
    let currentIndex = 0;
    const gap = 16; // Matches mx-2 (8px each side)

    function getSlidesToShow() {
        const width = window.innerWidth;
        if (width >= 1024) return 4;
        if (width >= 768) return 3;
        if (width >= 640) return 2;
        return 1;
    }

    function updateCardLayout() {
        cards = Array.from(cardContainer.querySelectorAll('.tutorial-card'));
        const containerWidth = slider.clientWidth;
        const cardsToShow = getSlidesToShow();

        const cardWidth = (containerWidth - (gap * (cardsToShow - 1))) / cardsToShow;

        cards.forEach(card => {
            card.style.width = `${cardWidth}px`;
            card.style.flexShrink = '0';
            card.style.marginRight = `${gap / 2}px`;
            card.style.marginLeft = `${gap / 2}px`;
        });
    }

    function slideCards() {
        const cardsToShow = getSlidesToShow();
        const cardWidth = cards[0]?.offsetWidth || 0; // Handle no cards
        const groupWidth = (cardWidth * cardsToShow) + (gap * (cardsToShow - 1));
        const translateX = currentIndex * groupWidth;

        cardContainer.style.transform = `translateX(-${translateX}px)`;
    }

    function nextSlide() {
        const cardsToShow = getSlidesToShow();
        const maxIndex = Math.max(0, Math.ceil(cards.length / cardsToShow) - 1);
        currentIndex = Math.min(currentIndex + 1, maxIndex);
        slideCards();
    }

    function prevSlide() {
        currentIndex = Math.max(currentIndex - 1, 0);
        slideCards();
    }

    function initializeSlider() {
        cardContainer.style.display = 'flex';
        cardContainer.style.transition = 'transform 500ms ease-in-out';
        cardContainer.style.width = '100%';

        updateCardLayout();

        nextBtn.addEventListener('click', nextSlide);
        prevBtn.addEventListener('click', prevSlide);

        window.addEventListener('resize', () => {
            const prevSlidesToShow = getSlidesToShow();
            updateCardLayout();
            // Reset currentIndex if it exceeds new maxIndex after resize
            const newSlidesToShow = getSlidesToShow();
            const newMaxIndex = Math.max(0, Math.ceil(cards.length / newSlidesToShow) - 1);
            if (currentIndex > newMaxIndex) currentIndex = newMaxIndex;
            slideCards();
        });
    }

    // Keep existing touch support and init code...

    initializeSlider();
    addTouchSupport(); // Ensure this function is defined as before
}

document.addEventListener('DOMContentLoaded', createTutorialSlider);