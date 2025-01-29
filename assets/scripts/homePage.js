
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
    // Select Elements  
    const slider = document.getElementById('toturialSlider');  
    const cardContainer = document.getElementById('toturialCardContainer');  
    const prevBtn = document.getElementById('prevBtn');  
    const nextBtn = document.getElementById('nextBtn');  
    
    // Ensure cards are selected after potential dynamic content  
    let cards = Array.from(cardContainer.children);  
    
    // Slider Configuration  
    let currentIndex = 0;  
    const gap = 16; // Tailwind mx-2 equivalent  

    // Responsive Slides Calculation  
    function getSlidesToShow() {  
        const width = window.innerWidth;  
        if (width >= 1024) return 4;  
        if (width >= 768) return 3;  
        if (width >= 640) return 2;  
        return 1;  
    }  

    // Recalculate cards (useful for dynamic content)  
    function updateCards() {  
        cards = Array.from(cardContainer.children);  
    }  

    // Update Card Widths Dynamically  
    function updateCardWidths() {  
        updateCards();  
        
        const containerWidth = slider.clientWidth;  
        const cardsToShow = getSlidesToShow();  
        
        // Calculate card width considering gap  
        const cardWidth = (containerWidth - (gap * (cardsToShow - 1))) / cardsToShow;  

        cards.forEach(card => {  
            card.style.width = `${cardWidth}px`;  
            card.style.flexShrink = '0';  
            card.style.marginRight = `${gap / 2}px`;  
            card.style.marginLeft = `${gap / 2}px`;  
        });  
    }  

    // Slide Animation  
    function slideCards() {  
        updateCards();  
        
        const cardsToShow = getSlidesToShow();  
        const cardWidth = cards[0].offsetWidth;  
        const totalSlideWidth = cardWidth + gap;  
        
        // Calculate translation  
        const translateX = currentIndex * totalSlideWidth;  
        
        cardContainer.style.transform = `translateX(-${translateX}px)`;  
    }  

    // Navigation Functions  
    function nextSlide() {  
        updateCards();  
        const cardsToShow = getSlidesToShow();  
        const maxIndex = Math.max(0, cards.length - cardsToShow);  
        
        currentIndex = Math.min(currentIndex + 1, maxIndex);  
        slideCards();  
    }  

    function prevSlide() {  
        currentIndex = Math.max(currentIndex - 1, 0);  
        slideCards();  
    }  

    // Initialization  
    function initializeSlider() {  
        // Styling  
        cardContainer.style.display = 'flex';  
        cardContainer.style.transition = 'transform 500ms ease-in-out';  
        cardContainer.style.width = '100%';  

        // Update initial widths  
        updateCardWidths();  

        // Attach Event Listeners  
        nextBtn.addEventListener('click', nextSlide);  
        prevBtn.addEventListener('click', prevSlide);  

        // Responsive Handling  
        window.addEventListener('resize', () => {  
            updateCardWidths();  
            slideCards();  
        });  
    }  

    // Touch Support (Optional)  
    function addTouchSupport() {  
        let startX = 0;  
        let endX = 0;  

        cardContainer.addEventListener('touchstart', (e) => {  
            startX = e.touches[0].clientX;  
        });  

        cardContainer.addEventListener('touchend', (e) => {  
            endX = e.changedTouches[0].clientX;  
            
            if (startX - endX > 50) {  
                // Swipe Left  
                nextSlide();  
            } else if (endX - startX > 50) {  
                // Swipe Right  
                prevSlide();  
            }  
        });  
    }  

    // Initialize Everything  
    function init() {  
        initializeSlider();  
        addTouchSupport();  
    }  

    // Kick off the slider  
    init();  

    // Expose controls if needed  
    return {  
        next: nextSlide,  
        previous: prevSlide,  
        updateCards: updateCards  
    };  
}  

// Initialize on DOM Load  
document.addEventListener('DOMContentLoaded', createTutorialSlider);