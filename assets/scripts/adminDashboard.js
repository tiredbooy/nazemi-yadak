// Mobile menu toggle  
const menuButton = document.querySelector('#menuButton');  
const sidebar = document.querySelector('aside');  

const addNewProduct = document.getElementById('addNewProduct');
const currentProductsInfo = document.getElementById('currentProductsInfo');
const productForm = document.getElementById('productForm');
const cancleUploadproductBtn = document.getElementById('cancelUploadproductBtn');
const saveNewProduct = document.getElementById('saveNewProduct');
const sections = document.querySelectorAll('section');
const productSuccessMessageDiv = document.querySelector('.productSuccessMessage');
const showProductManager = document.getElementById('showProductManager');

const tutorialForm = document.getElementById('tutorialForm');
const showToturial = document.getElementById('showTutorials');
const cancelUploadToturial = document.getElementById('cancelUploadToturial');
const uploadNewToturial = document.getElementById('uploadNewToturial');

const currentCategory = document.getElementById('currentCategory');
const categoryForm = document.getElementById('categoryForm');
const addNewCategory = document.getElementById('addNewCategory');
const showCategory = document.getElementById('showcCategory');
const cancelUploadCategoryBtn = document.getElementById('cancelUploadCategoryBtn');
const saveNewCategory = document.getElementById('saveNewCategory');

const currentCarInfo = document.getElementById('currentCarInfo');
const addCarForm = document.getElementById('addCarForm');
const addNewCar = document.getElementById('addNewCar');
const showCars = document.getElementById('showCars');
const cancelUploadCarBtn = document.getElementById('cancelUploadCarBtn')
const saveNewCarBtn = document.getElementById('saveNewCar')

const asideMenuItems = document.querySelectorAll('#asideMenu li');

asideMenuItems.forEach(item => {
    item.addEventListener('click', function (event) {
        event.preventDefault(); // Prevent the default anchor behavior

        // Remove the background from all items
        asideMenuItems.forEach(li => li.classList.remove('bg-gray-700'));

        // Add background to the clicked item
        this.classList.add('bg-gray-700');
    });
});

saveNewCarBtn.addEventListener('click',(e) => {
    e.preventDefault()
    displayCurrentCarInfo()
    displaySuccessMessage ('خودرو با موفقیت اضافه شد')
})

cancelUploadCarBtn.addEventListener('click',(e) => {
    e.preventDefault()
    displayCurrentCarInfo()
})


cancelUploadCategoryBtn.addEventListener('click',(e) => {
    e.preventDefault()
    displayCurrentCategory()
})

saveNewCategory.addEventListener('click',(e) => {
    e.preventDefault()
    displayCurrentCategory()
    displaySuccessMessage ('دسته‌بندی با موفقیت اضافه شد')
})

addNewCategory.addEventListener('click',(e) => {
    e.preventDefault()
    displayCategoryForm()
})

addNewCar.addEventListener('click',(e) => {
    e.preventDefault()
    displayCarForm()
})


showCars.addEventListener('click',(e) => {
    e.preventDefault()
    displayCurrentCarInfo()
})

showCategory.addEventListener('click',(e) => {
    e.preventDefault()
    displayCurrentCategory()
})


addNewProduct.addEventListener('click',(e) => {
    e.preventDefault()
    displayProductUpload()
})

cancleUploadproductBtn.addEventListener('click',(e) => {
    e.preventDefault()
    displayCurrentProducts()
})

saveNewProduct.addEventListener('click',(e) => {
    e.preventDefault()
    displayCurrentProducts()
    displaySuccessMessage ('محصول با موفقیت اضافه شد')
})


showProductManager.addEventListener('click',(e) => {
    e.preventDefault()
    displayCurrentProducts()
})

showToturial.addEventListener('click',(e) => {
    e.preventDefault()
    displayToturialUpload()
})

cancelUploadToturial.addEventListener('click',displayToturialUpload)

uploadNewToturial.addEventListener('click',(e) => {
    e.preventDefault()
    displayToturialUpload()

    productSuccessMessageDiv.querySelector('span').textContent = 'مقاله با موفقیت اضافه شد'
    productSuccessMessageDiv.classList.add('productSuccess')

    setTimeout(() => {
        productSuccessMessageDiv.classList.remove('productSuccess')
    },2000)
})

function displaySuccessMessage (message) {
    productSuccessMessageDiv.querySelector('span').textContent = message;
    productSuccessMessageDiv.classList.add('productSuccess')

    setTimeout(() => {
        productSuccessMessageDiv.classList.remove('productSuccess')
    },2000)
}

function displayCurrentProducts(){
    sections.forEach(sec => {
        sec.classList.add('hidden')
    })
    currentProductsInfo.classList.remove('hidden')
}

function displayCurrentCategory(){
    sections.forEach(sec => {
        sec.classList.add('hidden')
    })
    currentCategory.classList.remove('hidden')
}   

function displayCurrentCarInfo(){
    sections.forEach(sec => {
        sec.classList.add('hidden')
    })
    currentCarInfo.classList.remove('hidden')
}

function displayCategoryForm() {
    sections.forEach(sec => {
        sec.classList.add('hidden')
    })
    categoryForm.classList.remove('hidden') 
}

function displayCarForm() {
    sections.forEach(sec => {
        sec.classList.add('hidden')
    })
    addCarForm.classList.remove('hidden')
}

function displayProductUpload(){
    sections.forEach(sec => {
        sec.classList.add('hidden')
    })
    productForm.classList.remove('hidden')

}
function displayToturialUpload(){
    sections.forEach(sec => {
        sec.classList.add('hidden')
    })
    tutorialForm.classList.remove('hidden')
}

menuButton.addEventListener('click', () => {  
    const currentRight = parseInt(getComputedStyle(sidebar).right);  
    sidebar.style.right = currentRight < 0 ? '0' : '-100%';  
});  

function initializeImageUpload(uploadId, previewId) {
    const uploadInput = document.getElementById(uploadId);
    const previewContainer = document.getElementById(previewId);

    uploadInput.addEventListener('change', function(e) {
        const files = e.target.files;
        previewContainer.innerHTML = '';
        
        Array.from(files).forEach(file => {
            if(!file.type.match('image.*')) return;
            
            const reader = new FileReader();
            reader.onload = function(e) {
                const preview = document.createElement('div');
                preview.className = 'relative group';
                preview.innerHTML = `
                    <img src="${e.target.result}" 
                         class="w-full h-24 object-cover rounded-lg">
                    <button type="button" 
                            class="absolute top-1 left-1 bg-red-500/80 text-white p-1 rounded-full w-6 h-6 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                        <i class="fas fa-times text-xs"></i>
                    </button>
                `;
                previewContainer.appendChild(preview);
            }
            reader.readAsDataURL(file);
        });
    });

    // Handle image deletion
    previewContainer.addEventListener('click', (e) => {
        if(e.target.closest('button')) {
            const imageIndex = Array.from(previewContainer.children).indexOf(e.target.closest('.group'));
            previewContainer.removeChild(e.target.closest('.group'));
        }
    });
}

// Initialize both image uploaders
document.addEventListener('DOMContentLoaded', () => {
    initializeImageUpload('image-upload', 'image-previews'); // For products
    initializeImageUpload('tutorial-image-upload', 'tutorial-image-previews'); // For tutorials
});
let stepCounter = 1;

function addNewStep() {
    stepCounter++;
    const stepsContainer = document.getElementById('stepsContainer');
    const newStep = document.createElement('div');
    newStep.className = 'step-group bg-gray-700/30 p-4 rounded-xl';
    newStep.innerHTML = `
        <div class="flex justify-between items-center mb-4">
            <h3 class="text-gray-300 font-semibold">مرحله ${stepCounter}</h3>
            <button type="button" class="text-red-400 hover:text-red-300" onclick="removeStep(this)">
                <i class="fas fa-times"></i>
            </button>
        </div>
        <div class="space-y-4">
            <div class="relative">
                <label class="block text-gray-300 mb-2 pr-3">عنوان مرحله</label>
                <input type="text" 
                       class="w-full bg-gray-700 text-gray-100 rounded-lg px-4 py-3 focus:ring-2 focus:ring-[#C8102E] focus:outline-none transition-all"
                       placeholder="عنوان مرحله">
            </div>
            <div class="relative">
                <label class="block text-gray-300 mb-2 pr-3">محتوای مرحله</label>
                <textarea 
                    class="w-full bg-gray-700 text-gray-100 rounded-lg px-4 py-3 focus:ring-2 focus:ring-[#C8102E] focus:outline-none transition-all h-32"
                    placeholder="محتوای کامل مرحله"></textarea>
            </div>
        </div>
    `;
    stepsContainer.appendChild(newStep);
}

function removeStep(button) {
    if(document.querySelectorAll('.step-group').length > 1) {
        button.closest('.step-group').remove();
        updateStepNumbers();
    }
}

function updateStepNumbers() {
    const steps = document.querySelectorAll('.step-group');
    steps.forEach((step, index) => {
        step.querySelector('h3').textContent = `مرحله ${index + 1}`;
    });
    stepCounter = steps.length;
}