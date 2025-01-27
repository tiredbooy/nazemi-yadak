document.addEventListener('DOMContentLoaded', () => {  
    const menuElement = document.getElementById('openMenu');  
    const menuModal = document.getElementById('menuModal');  

    // Show the modal when clicking on any part of openMenu  
    menuElement.addEventListener('click', (e) => {  
        e.stopPropagation(); // Prevent the click from bubbling to the body  
        menuModal.classList.toggle('hidden');  
    });  

    function handleClickToCloseModal() {  
        document.body.addEventListener('click', (e) => {  
            // Check if modal is open and clicked outside of modal and openMenu  
            if (!menuModal.classList.contains('hidden') &&   
                !menuModal.contains(e.target) &&   
                !menuElement.contains(e.target)) {   
                menuModal.classList.add('hidden');  
            }  
        });  

        // Prevent closing the modal on clicks inside the modal  
        menuModal.addEventListener('click', (e) => {  
            e.stopPropagation(); // Prevent the click from bubbling to body  
        });  
    }  

    // Initialize click handling for closing the modal  
    handleClickToCloseModal();  
});  