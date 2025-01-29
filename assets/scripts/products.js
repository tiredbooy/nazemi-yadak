const openFilterSetting = document.getElementById('openFilterSetting');  
const filterSetting = document.getElementById('filterSetting');  
const body = document.body;  

// Optional: Create backdrop element  
const filterBackdrop = document.createElement('div');  
filterBackdrop.classList.add('filter-backdrop');  
body.appendChild(filterBackdrop);  

openFilterSetting.addEventListener('click', displayFilterSetting);  


function displayFilterSetting() {  
  if (isMaxWidth975px()) {  
    if (filterSetting.classList.contains('hidden')) {  
      // Show filter  
      filterSetting.classList.remove('hidden');  
      filterSetting.classList.add('animate-slide-in');  

    } else {  
      // Hide filter  
      filterSetting.classList.add('animate-slide-out');  

      // Remove hidden class and animations after transition  
      setTimeout(() => {  
        filterSetting.classList.add('hidden');  
        filterSetting.classList.remove('animate-slide-in', 'animate-slide-out');  
      }, 300);  
    }  
  }  
}  

function isMaxWidth975px() {  
  return window.innerWidth <= 975;  
}  

// Optional: Handle resize to ensure proper display  
window.addEventListener('resize', () => {  
  if (!isMaxWidth975px()) {  
    filterSetting.classList.remove('hidden');  
    filterBackdrop.classList.remove('active');  
  } else {  
    filterSetting.classList.add('hidden');  
  }  
});  