document.addEventListener("DOMContentLoaded", () => {
  const menuElement = document.getElementById("openMenu");
  const menuModal = document.getElementById("menuModal");
  const openSearchBarBtn = document.getElementById("openSearchBarBtn");
  const lgScreenSearchInput = document.getElementById("lgScreenSearchInput");

  // Toggle Modal
  function toggleMenuModal() {
    if (menuModal.classList.contains("activeModal")) {
      menuModal.classList.add("closeModal");
      menuModal.addEventListener(
        "animationend",
        () => {
          menuModal.classList.remove("activeModal", "closeModal");
          menuModal.style.pointerEvents = "none"; // Disable interaction
          menuModal.style.visibility = "hidden"; // Hide after close
        },
        { once: true }
      );
    } else {
      menuModal.classList.add("activeModal");
      menuModal.classList.remove("closeModal");
      menuModal.style.pointerEvents = "auto"; // Enable interaction
      menuModal.style.visibility = "visible"; // Show modal
    }
  }

  // Event Listeners
  menuElement.addEventListener("click", (e) => {
    e.stopPropagation();
    toggleMenuModal();
  });

  openSearchBarBtn.addEventListener("click", (e) => {
    e.stopPropagation();
    toggleMenuModal();
  });

  // Close Modal on Outside Click
  document.body.addEventListener("click", (e) => {
    if (
      menuModal.classList.contains("activeModal") &&
      !menuModal.contains(e.target) &&
      !menuElement.contains(e.target) &&
      !openSearchBarBtn.contains(e.target)
    ) {
      menuModal.classList.add("closeModal");
      menuModal.addEventListener(
        "animationend",
        () => {
          menuModal.classList.remove("activeModal", "closeModal");
          menuModal.style.pointerEvents = "none";
          menuModal.style.visibility = "hidden";
        },
        { once: true }
      );
    }
  });

  // Prevent Modal Close on Itself
  menuModal.addEventListener("click", (e) => {
    e.stopPropagation();
  });

  async function fetchData(input) {
    try {
      let response = await fetch(
        `http://127.0.0.1:8000/products/api/search/?q=${input}`
      );
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      let data = await response.json();
      return data;
    } catch (error) {
      console.error("Fetch error:", error);
      return [];
    }
  }

  function createSearchResultCard(product) {
    return `
      <div class="flex items-center justify-between gap-3 cursor-pointer hover:bg-gray-200/50 duration-150">
        <div class="flex flex-row items-center gap-3">
          <img src="${product.image}" alt="${product.name}" class="w-16 h-16 rounded-md object-cover" />
          <div class="flex flex-col">
            <span class="text-steelGray font-semibold cursor-pointer hover:text-black duration-150">
              ${product.name}
            </span>
            <span class="text-gray-600 text-sm">
              ${product.brand}
            </span>
          </div>
        </div>
        <span class="text-bgRed font-bold">
          ${product.price} تومان
        </span> 
      </div>
    `;
  }

  const searchModal = document.getElementById("searchModal");

  const showModal = () => {
    searchModal.classList.remove(
      "opacity-0",
      "pointer-events-none",
      "-translate-y-4"
    );
    searchModal.classList.add("opacity-100", "translate-y-0");
  };

  const hideModal = () => {
    searchModal.classList.remove("opacity-100", "translate-y-0");
    searchModal.classList.add(
      "opacity-0",
      "pointer-events-none",
      "-translate-y-4"
    );
  };

  lgScreenSearchInput.addEventListener("keyup", async (event) => {
    const searchInputValue = lgScreenSearchInput.value.toLowerCase().trim();
    searchModal.innerHTML = "";

    if (searchInputValue) {
      showModal();

      const products = await fetchData(searchInputValue);

      if (products.length > 0) {
        const searchResultsHTML = products.map(createSearchResultCard).join("");
        searchModal.insertAdjacentHTML("beforeend", searchResultsHTML);
      } else {
        searchModal.innerHTML =
          '<div class="text-center text-gray-500">نتیجهای یافت نشد</div>';
      }
    } else {
      hideModal();
    }
  });

  document.addEventListener("click", (event) => {
    if (
      !searchModal.contains(event.target) &&
      event.target !== lgScreenSearchInput
    ) {
      hideModal();
    }
  });

  lgScreenSearchInput.addEventListener("focus", () => {
    if (lgScreenSearchInput.value.trim() !== "") {
      showModal();
    }
  });

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") {
      hideModal();
    }
  });
});
