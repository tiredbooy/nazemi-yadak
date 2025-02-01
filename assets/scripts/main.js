document.addEventListener('DOMContentLoaded', () => {
    const menuElement = document.getElementById('openMenu');
    const menuModal = document.getElementById('menuModal');
    const openSearchBarBtn = document.getElementById('openSearchBarBtn');

    // Toggle Modal
    function toggleMenuModal() {
        if (menuModal.classList.contains('activeModal')) {
            menuModal.classList.add('closeModal');
            menuModal.addEventListener('animationend', () => {
                menuModal.classList.remove('activeModal', 'closeModal');
                menuModal.style.pointerEvents = 'none'; // Disable interaction
                menuModal.style.visibility = 'hidden';  // Hide after close
            }, { once: true });
        } else {
            menuModal.classList.add('activeModal');
            menuModal.classList.remove('closeModal');
            menuModal.style.pointerEvents = 'auto';   // Enable interaction
            menuModal.style.visibility = 'visible';   // Show modal
        }
    }

    // Event Listeners
    menuElement.addEventListener('click', (e) => {
        e.stopPropagation();
        toggleMenuModal();
    });

    openSearchBarBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        toggleMenuModal();
    });

    // Close Modal on Outside Click
    document.body.addEventListener('click', (e) => {
        if (menuModal.classList.contains('activeModal') &&
            !menuModal.contains(e.target) &&
            !menuElement.contains(e.target) &&
            !openSearchBarBtn.contains(e.target)) {
            
            menuModal.classList.add('closeModal');
            menuModal.addEventListener('animationend', () => {
                menuModal.classList.remove('activeModal', 'closeModal');
                menuModal.style.pointerEvents = 'none';
                menuModal.style.visibility = 'hidden';
            }, { once: true });
        }
    });

    // Prevent Modal Close on Itself
    menuModal.addEventListener('click', (e) => {
        e.stopPropagation();
    });
});
