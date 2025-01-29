
// // Hero Section Slider  

// const heroSectionItems = [  
//     {  
//         banner: "../assets/images/cheryHero2.jpg",  
//         title: "بهترین لوازم یدکی برای ماشین‌های چینی",  
//         description: `ما ارائه‌دهنده بهترین و باکیفیت‌ترین لوازم یدکی برای انواع  
//                       خودروهای چینی هستیم. کیفیت تضمینی، قیمت مناسب و ارسال سریع به  
//                       سراسر کشور.`,  
//         buttonText: "مشاهده محصولات"  
//     },  
//     {  
//         banner: "../assets/images/cheryHero.jpg",  
//         title: "آموزش تعویض لوازم یدکی خودروهای چینی",  
//         description: `در بخش آموزشی سایت ما، یاد بگیرید چگونه به آسانی و با اطمینان قطعات یدکی   
//                       خودروهای چینی خود را تعویض کنید. راهنمایی کامل برای مبتدیان و حرفه‌ای‌ها.`,  
//         buttonText: "یاد بگیرید بیشتر"  
//     },  
//     {  
//         banner: "../assets/images/carHero.jpg",  
//         title: "پشتیبانی و مشاوره خرید لوازم یدکی",  
//         description: `تیم پشتیبانی ما آماده است تا شما را در انتخاب بهترین قطعات یدکی   
//                       متناسب با خودروتان راهنمایی کند. با ما تماس بگیرید و بهترین تجربه خرید را داشته باشید.`,  
//         buttonText: "تماس با ما"  
//     },  
// ];  

// let heroCurrentIndex = 0;

// function loadSlides() {  
//     const slidesContainer = document.querySelector('.slides');  
//     const fragment = document.createDocumentFragment();  

//     heroSectionItems.forEach((item, index) => {  
//         const slideDiv = document.createElement('div');  
//         slideDiv.className = "slide w-full h-full absolute inset-0 transition-opacity duration-700 ease-in-out";  
//         slideDiv.innerHTML = `<img class="w-full h-full object-cover" src="${item.banner}" alt="${item.title}" />`;  
//         fragment.appendChild(slideDiv);  

//         // Set opacity only for the current slide  
//         slideDiv.style.opacity = index === heroCurrentIndex ? '1' : '0';  
//     });  

//     slidesContainer.appendChild(fragment);  
//     updateContent();  
//     updateDots();  
// }

// function updateContent() {  
//     const titleElement = document.getElementById('heroSectionTitle');  
//     const descriptionElement = document.getElementById('heroSectionDes');  
//     const buttonElement = document.querySelector('.hero-button'); // Change this line  

//     titleElement.textContent = heroSectionItems[heroCurrentIndex].title;  
//     descriptionElement.textContent = heroSectionItems[heroCurrentIndex].description;  
//     buttonElement.textContent = heroSectionItems[heroCurrentIndex].buttonText; // Update button text  
// }  

// function changeSlide(direction) {  
//     const slides = document.querySelectorAll('.slide');  
//     slides[heroCurrentIndex].style.opacity = '0'; // Fade out current slide  
//     heroCurrentIndex = (heroCurrentIndex + direction + heroSectionItems.length) % heroSectionItems.length;  
//     slides[heroCurrentIndex].style.opacity = '1'; // Fade in new slide  
//     updateContent();  
//     updateDots();  
// }  

// function updateDots() {  
//     const dotsContainer = document.querySelector('.indicator-dots');  
//     dotsContainer.innerHTML = '';  

//     heroSectionItems.forEach((_, index) => {  
//         const dot = document.createElement('div');  
//         dot.className = `w-3 h-3 rounded-full cursor-pointer z-50 ${index === heroCurrentIndex ? 'bg-white opacity-100' : 'bg-white opacity-50'}`;  
//         dot.onclick = () => {  
//             const slides = document.querySelectorAll('.slide');  
//             slides[heroCurrentIndex].style.opacity = '0';  
//             heroCurrentIndex = index;  
//             slides[heroCurrentIndex].style.opacity = '1';  
//             updateContent();  
//             updateDots();  
//         };  
//         dotsContainer.appendChild(dot);  
//     });  
// }  


// // Event Listeners  
// document.getElementById('prevSlide').onclick = () => changeSlide(-1);  
// document.getElementById('nextSlide').onclick = () => changeSlide(1);  

// // Initialize slider on page load  
// window.onload = loadSlides;  


// function createTutorialSlider() {
//     const slider = document.getElementById('tutorialSlider');
//     const cardContainer = document.getElementById('tutorialCardContainer');
//     const prevBtn = document.getElementById('prevBtn');
//     const nextBtn = document.getElementById('nextBtn');
    
//     let cards = Array.from(cardContainer.children);
//     let currentIndex = 0;
//     const gap = 16;
//     let autoSlide;

//     function getCardWidth() {
//         // Add safety checks
//         if (!slider.clientWidth) {
//             console.warn('Slider width is 0, using window width');
//             return (window.innerWidth / getSlidesToShow()) - gap;
//         }
//         return slider.clientWidth / getSlidesToShow() - gap;
//     }

//     function getSlidesToShow() {
//         const width = window.innerWidth;
//         if (width >= 1024) return 4;
//         if (width >= 768) return 3;
//         if (width >= 640) return 2;
//         return 1;
//     }
    

//     function updateCards() {
//         cards = Array.from(cardContainer.children);
//     }

//     function updateCardWidths() {
//         updateCards();
//         const cardWidth = getCardWidth();
//         // const containerWidth = (cardWidth + gap) * cards.length;
//         const validCardWidth = Math.max(100, cardWidth);
//         const containerWidth = (validCardWidth + gap) * cards.length;
//         cardContainer.style.width = `${containerWidth}px`;
//         cards.forEach(card => {
//             card.style.width = `${validCardWidth}px`;
//             card.style.flexShrink = '0';
//         });
//     }

//     function slideCards() {
//         const cardWidth = cards[0].offsetWidth + gap;
//         const slidesToShow = getSlidesToShow();
//         const maxVisibleIndex = cards.length - slidesToShow;
        
//         // Allow temporary overflow for white space
//         currentIndex = Math.max(-slidesToShow, Math.min(currentIndex, maxVisibleIndex + slidesToShow));
    
        
//         cardContainer.style.transition = 'transform 500ms ease-in-out';
//         cardContainer.style.transform = `translateX(-${currentIndex * cardWidth}px)`;
//     }

//     function nextSlide() {
//         if(currentIndex >= 0) {
//             currentIndex++;
//             slideCards();
//         } 
//     }

//     function prevSlide() {
//         // Fix the condition and uncomment slideCards()
//         if (currentIndex > 0) {     
//             currentIndex--;
//             slideCards(); // Uncomment this
//         }
//     }

//     function initializeSlider() {
//         cardContainer.style.display = 'flex';
//         cardContainer.style.transition = 'transform 500ms ease-in-out';
//         // cardContainer.style.width = '100%';
//         // updateCardWidths();

//         const resizeObserver = new ResizeObserver(() => {
//             updateCardWidths();
//             currentIndex = 0; // Force reset to start
//             slideCards();
//             resizeObserver.disconnect();
//         });
//         resizeObserver.observe(slider);
        
//         nextBtn.addEventListener('click', () => { stopAutoSlide(); nextSlide(); startAutoSlide(); });
//         prevBtn.addEventListener('click', () => { stopAutoSlide(); prevSlide(); startAutoSlide(); });
        
//         slider.addEventListener('mouseenter', stopAutoSlide);
//         slider.addEventListener('mouseleave', startAutoSlide);
        
//         window.addEventListener('resize', () => {
//             updateCardWidths();
//             slideCards();
//         });
//     }

//     console.log(cards.length - 1);

//     function startAutoSlide() {
//         stopAutoSlide();
//         autoSlide = setInterval(() => {
//             const slidesToShow = getSlidesToShow();
//             const maxVisibleIndex = cards.length - slidesToShow;
            
//             if (currentIndex >= maxVisibleIndex) {
//                 currentIndex -= slidesToShow; // Jump back by visible amount
//                 if (currentIndex < -slidesToShow) currentIndex = maxVisibleIndex;
//             } else {
//                 currentIndex += slidesToShow; // Jump forward by visible amount
//             }
            
//             slideCards();
//         }, 3000);
//     }

//     function stopAutoSlide() {
//         clearInterval(autoSlide);
//     }

//     function addTouchAndDragSupport() {
//         let isDragging = false;
//         let startPosX = 0;
//         let currentTranslate = 0;
//         let animationID;
    
//         cardContainer.addEventListener('mousedown', dragStart);
//         cardContainer.addEventListener('mouseup', dragEnd);
//         cardContainer.addEventListener('mouseleave', dragEnd);
//         cardContainer.addEventListener('mousemove', drag);
    
//         function dragStart(e) {
//             isDragging = true;
//             startPosX = e.clientX;
//             currentTranslate = -currentIndex * (cards[0].offsetWidth + gap);
//             cardContainer.style.transition = 'none';
//             cancelAnimationFrame(animationID);
//         }
    
//         function drag(e) {
//             if (!isDragging) return;
//             const currentX = e.clientX;
//             const deltaX = currentX - startPosX;
//             const newTranslate = currentTranslate + deltaX;
            
//             cardContainer.style.transform = `translateX(${newTranslate}px)`;
//         }
    
//         function dragEnd() {
//             if (!isDragging) return;
//             isDragging = false;
            
//             const cardWidth = cards[0].offsetWidth + gap;
//             const deltaTranslate = parseFloat(cardContainer.style.transform.split('(')[1]) || 0;
//             const targetIndex = Math.round(-deltaTranslate / cardWidth);
            
//             currentIndex = Math.max(
//                 -getSlidesToShow(), 
//                 Math.min(targetIndex, cards.length - 1)
//             );
            
//             cardContainer.style.transition = 'transform 500ms ease-in-out';
//             slideCards();
//         }
//     }

//     function enableKeyboardNavigation() {
//         document.addEventListener('keydown', (e) => {
//             if (e.key === 'ArrowRight') { stopAutoSlide(); nextSlide(); startAutoSlide(); }
//             if (e.key === 'ArrowLeft') { stopAutoSlide(); prevSlide(); startAutoSlide(); }
//         });
//     }

//     function addARIA() {
//         slider.setAttribute('aria-live', 'polite');
//         cards.forEach((card, index) => {
//             card.setAttribute('aria-hidden', index !== currentIndex);
//         });
//     }

//     function init() {
//         initializeSlider();
//         addTouchAndDragSupport();
//         enableKeyboardNavigation();
//         addARIA();
//         startAutoSlide();
//     }

//     init();
//     return { next: nextSlide, previous: prevSlide, updateCards };
// }

// document.addEventListener('DOMContentLoaded', createTutorialSlider);


document.addEventListener("DOMContentLoaded", () => {
    const container = document.getElementById("tutorialCardContainer");
    const prevBtn = document.getElementById("prevBtn");
    const nextBtn = document.getElementById("nextBtn");
    const progressIndicator = document.getElementById("progressIndicator");
    let currentIndex = 0;
    let autoSlide;

    function updateProgress() {
        const totalWidth = container.scrollWidth - container.clientWidth;
        const scrollPosition = container.scrollLeft;
        const progress = (scrollPosition / totalWidth) * 100;
        progressIndicator.style.width = `${progress}%`;
    }

    function slide(direction) {
        const cardWidth = container.children[0].offsetWidth + 24; // card width + gap
        container.scrollBy({ left: direction * cardWidth, behavior: "smooth" });
    }

    function autoSlideFunc() {
        autoSlide = setInterval(() => {
            if (container.scrollLeft < container.scrollWidth - container.clientWidth) {
                slide(1);
            } else {
                container.scrollTo({ left: 0, behavior: "smooth" });
            }
        }, 3000);
    }

    nextBtn.addEventListener("click", () => {
        slide(1);
        clearInterval(autoSlide);
        autoSlideFunc();
    });
    prevBtn.addEventListener("click", () => {
        slide(-1);
        clearInterval(autoSlide);
        autoSlideFunc();
    });

    container.addEventListener("scroll", updateProgress);

    autoSlideFunc();
});