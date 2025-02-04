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

  let apiProducts = [
    {
      id: 1,
      name: "تیگو 8",
      cod: "HTYD-8782",
      slug: "tygw-8",
      country: "USA",
      price: "1200000",
      price_integer: 1200000,
      description:
        "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای زیادی در شصت و سه درصد گذشته حال و آینده، شناخت فراوان جامعه و متخصصان را می طلبد، تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی، و فرهنگ پیشرو در زبان فارسی ایجاد کرد، در این صورت می توان امید داشت که تمام و دشواری موجود در ارائه راهکارها، و شرایط سخت تایپ به پایان رسد و زمان مورد نیاز شامل حروفچینی دستاوردهای اصلی، و جوابگوی سوالات پیوسته اهل دنیای موجود طراحی اساسا مورد استفاده قرار گیرد.",
      image: "/assets/images/fownix.webp",
      brand: "چری",
      show_on_main_page: true,
      is_active: true,
      category: 1,
      car: [1],
    },

    {
      id: 2,
      name: "تیگو 7",
      cod: "HTYD-8783",
      slug: "tygw-7",
      country: "USA",
      price: "1100000",
      price_integer: 1100000,
      description:
        "مدل تیگو 7 با طراحی مدرن و امکانات پیشرفته خود به عنوان یکی از پرفروش‌ترین خودروها شناخته می‌شود. این خودرو به روزترین فناوری‌ها را دارد و برای راحتی و لذت رانندگی طراحی شده است.",
      image: "/assets/images/fownix.webp",
      brand: "چری",
      show_on_main_page: true,
      is_active: true,
      category: 1,
      car: [2],
    },
    {
      id: 3,
      name: "تیگو 5",
      cod: "HTYD-8784",
      slug: "tygw-5",
      country: "USA",
      price: "950000",
      price_integer: 950000,
      description:
        "تیگو 5 یک شاسی‌بلند با فضای داخلی جادار و مصرف سوخت اقتصادی است. این خودرو برای خانواده‌ها و استفاده روزمره ایده‌آل است.",
      image: "/assets/images/fownix.webp",
      brand: "چری",
      show_on_main_page: true,
      is_active: true,
      category: 1,
      car: [3],
    },
    {
      id: 4,
      name: "تیگو 9",
      cod: "HTYD-8785",
      slug: "tygw-9",
      country: "USA",
      price: "1350000",
      price_integer: 1350000,
      description:
        "تیگو 9 با طراحی لوکس و امکانات بی‌نظیر، یکی از بهترین گزینه‌ها در بازار شاسی‌بلندها به شمار می‌رود. از فن‌آوری‌های پیشرفته برای امنیت و راحتی راننده و سرنشینان بهره می‌برد.",
      image: "/assets/images/fownix.webp",
      brand: "چری",
      show_on_main_page: true,
      is_active: true,
      category: 1,
      car: [4],
    },
    {
      id: 5,
      name: "تیگو 3",
      cod: "HTYD-8786",
      slug: "tygw-3",
      country: "USA",
      price: "850000",
      price_integer: 850000,
      description:
        "تیگو 3 به دلیل ابعاد جمع و جور و قابلیت‌های حرکتی خوب، برای شهرهای شلوغ بسیار مناسب است. این خودرو با طراحی مدرن و کاربرپسند جذابیت خاصی دارد.",
      image: "/assets/images/fownix.webp",
      brand: "چری",
      show_on_main_page: true,
      is_active: true,
      category: 1,
      car: [5],
    },
    {
      id: 6,
      name: "تیگو Pro",
      cod: "HTYD-8787",
      slug: "tygw-pro",
      country: "USA",
      price: "1450000",
      price_integer: 1450000,
      description:
        "تیگو Pro با موتور قدرتمند و سیستم‌های تکنولوژیک روز دنیا، از ایمنی و راحتی بالایی برخوردار است. این مدل برای کسانی که تجربه‌ای متفاوت از رانندگی می‌خواهند، بسیار مناسب است.",
      image: "/assets/images/fownix.webp",
      brand: "چری",
      show_on_main_page: true,
      is_active: true,
      category: 1,
      car: [6],
    },
  ];


  const searchModal = document.getElementById("searchModal");

  // Function to show the modal
  const showModal = () => {
    searchModal.classList.remove(
      "opacity-0",
      "pointer-events-none",
      "-translate-y-4"
    );
    searchModal.classList.add("opacity-100", "translate-y-0");
  };

  // Function to hide the modal
  const hideModal = () => {
    searchModal.classList.remove("opacity-100", "translate-y-0");
    searchModal.classList.add(
      "opacity-0",
      "pointer-events-none",
      "-translate-y-4"
    );
  };

  lgScreenSearchInput.addEventListener("keyup", (event) => {
    const searchInputValue = lgScreenSearchInput.value.toLowerCase().trim();
    searchModal.innerHTML = ""; // Clear previous results

    if (searchInputValue) {
      showModal();

      const searchResult = apiProducts.filter((product) =>
        product.name.toLowerCase().includes(searchInputValue)
      );

      if (searchResult.length > 0) {
        const searchToDom = searchResult.map(
          (product) => `
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
        `
        );
        searchModal.insertAdjacentHTML("beforeend", searchToDom.join(""));
      } else {
        searchModal.innerHTML =
          '<div class="text-center text-gray-500">نتیجه‌ای یافت نشد</div>';
      }
    } else {
      hideModal();
    }
  });

  // Hide modal when clicking outside
  document.addEventListener("click", (event) => {
    if (
      !searchModal.contains(event.target) &&
      event.target !== lgScreenSearchInput
    ) {
      hideModal();
    }
  });

  // Show modal on focus if there's input
  lgScreenSearchInput.addEventListener("focus", () => {
    if (lgScreenSearchInput.value.trim() !== "") {
      showModal();
    }
  });

  // Close modal with Escape key
  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") {
      hideModal();
    }
  });
});
