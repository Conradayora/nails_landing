const categoryLabels = {
    francesa: "Francesa",
    baby_boomer: "Baby boomer",
    ojo_de_gato: "Ojo de gato",
    press_on: "Press on",
    efecto_blooming: "Efecto blooming",
    esmaltado_colour: "Esmaltado colour"
};

const subcategoryLabels = {
    full_color: "Full color",
    ilustracion: "Ilustracion",
    puntos: "Puntos",
    purpurina: "Purpurina",
    gemas: "Gemas",
    animal_print: "Animal print"
};

const fileTitleLabels = {
    color_black: "Full color negro",
    color_blue: "Full color azul",
    color_brown: "Full color marron",
    color_full_pink: "Full color rosa intenso",
    color_green: "Full color verde",
    color_love: "Full color love",
    color_pink: "Full color rosa",
    color_purple: "Full color morado",
    color_purple_2: "Full color morado 2",
    color_red: "Full color rojo",
    color_red_2: "Full color rojo 2",
    color_sky: "Full color sky",
    color_warm: "Full color calido",
    colo_luxury: "Full color luxury",
    puntos: "Puntos",
    puntos_black: "Puntos negro",
    puntos_blue: "Puntos azul",
    puntos_green: "Puntos verde",
    purpurina: "Purpurina",
    gemas: "Gemas",
    animal_print: "Animal print",
    blooming: "Blooming",
    baby_boomer: "Baby boomer",
    ilustration: "Ilustracion"
};

const makeItem = (src, category, subcategory = "") => ({
    src,
    category,
    subcategory,
    title: buildTitle(src, category, subcategory)
});

function buildTitle(src, category, subcategory) {
    const file = src.split("/").pop().replace(".webp", "");
    const number = file.match(/_(\d+)$/)?.[1];
    const base = subcategory ? subcategoryLabels[subcategory] : categoryLabels[category];
    const fileBase = file.replace(/_\d+$/, "");

    if (file === "press_on_") {
        return "Press on destacado";
    }

    if (fileTitleLabels[file]) {
        return fileTitleLabels[file];
    }

    if (fileTitleLabels[fileBase] && number) {
        return `${fileTitleLabels[fileBase]} ${number}`;
    }

    return number ? `${base} ${number}` : base;
}

const galleryImages = [
    makeItem("imagenes/francesa/francesa_1.webp", "francesa"),
    makeItem("imagenes/francesa/francesa_2.webp", "francesa"),
    makeItem("imagenes/francesa/francesa_3.webp", "francesa"),
    makeItem("imagenes/francesa/francesa_4.webp", "francesa"),
    makeItem("imagenes/francesa/francesa_5.webp", "francesa"),
    makeItem("imagenes/francesa/francesa_6.webp", "francesa"),
    makeItem("imagenes/francesa/francesa_7.webp", "francesa"),
    makeItem("imagenes/francesa/francesa_8.webp", "francesa"),
    makeItem("imagenes/francesa/francesa_9.webp", "francesa"),
    makeItem("imagenes/francesa/francesa_10.webp", "francesa"),
    makeItem("imagenes/francesa/francesa_11.webp", "francesa"),
    makeItem("imagenes/francesa/francesa_12.webp", "francesa"),
    makeItem("imagenes/francesa/francesa_13.webp", "francesa"),
    makeItem("imagenes/francesa/francesa_14.webp", "francesa"),
    makeItem("imagenes/francesa/francesa_15.webp", "francesa"),
    makeItem("imagenes/francesa/francesa_16.webp", "francesa"),
    makeItem("imagenes/francesa/francesa_17.webp", "francesa"),
    makeItem("imagenes/francesa/francesa_18.webp", "francesa"),
    makeItem("imagenes/baby_boomer/baby_boomer.webp", "baby_boomer"),
    makeItem("imagenes/baby_boomer/baby_boomer_2.webp", "baby_boomer"),
    makeItem("imagenes/baby_boomer/baby_boomer_3.webp", "baby_boomer"),
    makeItem("imagenes/baby_boomer/baby_boomer_4.webp", "baby_boomer"),
    makeItem("imagenes/ojo_de_gato/ojo_de_gato_2.webp", "ojo_de_gato"),
    makeItem("imagenes/ojo_de_gato/ojo_de_gato_3.webp", "ojo_de_gato"),
    makeItem("imagenes/ojo_de_gato/ojo_de_gato_4.webp", "ojo_de_gato"),
    makeItem("imagenes/ojo_de_gato/ojo_de_gato_5.webp", "ojo_de_gato"),
    makeItem("imagenes/press_on/press_on_.webp", "press_on"),
    makeItem("imagenes/press_on/press_on_1.webp", "press_on"),
    makeItem("imagenes/press_on/press_on_2.webp", "press_on"),
    makeItem("imagenes/press_on/press_on_3.webp", "press_on"),
    makeItem("imagenes/press_on/press_on_4.webp", "press_on"),
    makeItem("imagenes/press_on/press_on_5.webp", "press_on"),
    makeItem("imagenes/press_on/press_on_6.webp", "press_on"),
    makeItem("imagenes/press_on/press_on_7.webp", "press_on"),
    makeItem("imagenes/press_on/press_on_8.webp", "press_on"),
    makeItem("imagenes/press_on/press_on_9.webp", "press_on"),
    makeItem("imagenes/press_on/press_on_10.webp", "press_on"),
    makeItem("imagenes/press_on/press_on_11.webp", "press_on"),
    makeItem("imagenes/press_on/press_on_12.webp", "press_on"),
    makeItem("imagenes/press_on/press_on_13.webp", "press_on"),
    makeItem("imagenes/press_on/press_on_14.webp", "press_on"),
    makeItem("imagenes/efecto_blooming/blooming.webp", "efecto_blooming"),
    makeItem("imagenes/efecto_blooming/blooming_1.webp", "efecto_blooming"),
    makeItem("imagenes/esmaltado_colour/full_color/color_black.webp", "esmaltado_colour", "full_color"),
    makeItem("imagenes/esmaltado_colour/full_color/color_blue.webp", "esmaltado_colour", "full_color"),
    makeItem("imagenes/esmaltado_colour/full_color/color_brown.webp", "esmaltado_colour", "full_color"),
    makeItem("imagenes/esmaltado_colour/full_color/color_full_pink.webp", "esmaltado_colour", "full_color"),
    makeItem("imagenes/esmaltado_colour/full_color/color_green.webp", "esmaltado_colour", "full_color"),
    makeItem("imagenes/esmaltado_colour/full_color/color_love.webp", "esmaltado_colour", "full_color"),
    makeItem("imagenes/esmaltado_colour/full_color/color_pink.webp", "esmaltado_colour", "full_color"),
    makeItem("imagenes/esmaltado_colour/full_color/color_purple.webp", "esmaltado_colour", "full_color"),
    makeItem("imagenes/esmaltado_colour/full_color/color_purple_2.webp", "esmaltado_colour", "full_color"),
    makeItem("imagenes/esmaltado_colour/full_color/color_red.webp", "esmaltado_colour", "full_color"),
    makeItem("imagenes/esmaltado_colour/full_color/color_red_2.webp", "esmaltado_colour", "full_color"),
    makeItem("imagenes/esmaltado_colour/full_color/color_sky.webp", "esmaltado_colour", "full_color"),
    makeItem("imagenes/esmaltado_colour/full_color/color_warm.webp", "esmaltado_colour", "full_color"),
    makeItem("imagenes/esmaltado_colour/full_color/colo_luxury.webp", "esmaltado_colour", "full_color"),
    makeItem("imagenes/esmaltado_colour/ilustracion/ilustration.webp", "esmaltado_colour", "ilustracion"),
    makeItem("imagenes/esmaltado_colour/ilustracion/ilustration_2.webp", "esmaltado_colour", "ilustracion"),
    makeItem("imagenes/esmaltado_colour/ilustracion/ilustration_3.webp", "esmaltado_colour", "ilustracion"),
    makeItem("imagenes/esmaltado_colour/ilustracion/ilustration_4.webp", "esmaltado_colour", "ilustracion"),
    makeItem("imagenes/esmaltado_colour/ilustracion/ilustration_5.webp", "esmaltado_colour", "ilustracion"),
    makeItem("imagenes/esmaltado_colour/ilustracion/ilustration_6.webp", "esmaltado_colour", "ilustracion"),
    makeItem("imagenes/esmaltado_colour/ilustracion/ilustration_7.webp", "esmaltado_colour", "ilustracion"),
    makeItem("imagenes/esmaltado_colour/ilustracion/ilustration_8.webp", "esmaltado_colour", "ilustracion"),
    makeItem("imagenes/esmaltado_colour/puntos/puntos.webp", "esmaltado_colour", "puntos"),
    makeItem("imagenes/esmaltado_colour/puntos/puntos_black.webp", "esmaltado_colour", "puntos"),
    makeItem("imagenes/esmaltado_colour/puntos/puntos_blue.webp", "esmaltado_colour", "puntos"),
    makeItem("imagenes/esmaltado_colour/puntos/puntos_green.webp", "esmaltado_colour", "puntos"),
    makeItem("imagenes/esmaltado_colour/purpurina/purpurina.webp", "esmaltado_colour", "purpurina"),
    makeItem("imagenes/esmaltado_colour/purpurina/purpurina_2.webp", "esmaltado_colour", "purpurina"),
    makeItem("imagenes/esmaltado_colour/gemas/gemas.webp", "esmaltado_colour", "gemas"),
    makeItem("imagenes/esmaltado_colour/gemas/gemas_2.webp", "esmaltado_colour", "gemas"),
    makeItem("imagenes/esmaltado_colour/animal_print/animal_print.webp", "esmaltado_colour", "animal_print"),
    makeItem("imagenes/esmaltado_colour/animal_print/animal_print_2.webp", "esmaltado_colour", "animal_print")
];

const originalGalleryOrder = new Map(galleryImages.map((item, index) => [item.src, index]));
const defaultGalleryPriority = new Map([
    "imagenes/francesa/francesa_1.webp",
    "imagenes/baby_boomer/baby_boomer.webp",
    "imagenes/ojo_de_gato/ojo_de_gato_5.webp",
    "imagenes/press_on/press_on_10.webp",
    "imagenes/efecto_blooming/blooming.webp",
    "imagenes/esmaltado_colour/full_color/color_red.webp",
    "imagenes/esmaltado_colour/ilustracion/ilustration_5.webp",
    "imagenes/esmaltado_colour/puntos/puntos_blue.webp",
    "imagenes/esmaltado_colour/gemas/gemas_2.webp"
].map((src, index) => [src, index]));

galleryImages.sort((a, b) => {
    const aPriority = defaultGalleryPriority.get(a.src) ?? 1000 + originalGalleryOrder.get(a.src);
    const bPriority = defaultGalleryPriority.get(b.src) ?? 1000 + originalGalleryOrder.get(b.src);

    return aPriority - bPriority;
});

const galleryGrid = document.querySelector("#gallery-grid");
const filterButtons = document.querySelectorAll(".filter-button");
const subfilterButtons = document.querySelectorAll(".subfilter-button");
const searchInput = document.querySelector("#gallery-search");
const visibleCount = document.querySelector("#visible-count");
const galleryToggle = document.querySelector("#gallery-toggle");
const galleryActions = document.querySelector(".gallery-actions");
const colorCards = document.querySelectorAll(".color-card");
const colorToggle = document.querySelector("#color-toggle");
const colorActions = document.querySelector(".color-actions");
const contactForm = document.querySelector(".contact-form");
const carouselRoots = document.querySelectorAll(".js-carousel");
const lightbox = document.querySelector(".lightbox");
const lightboxImage = document.querySelector(".lightbox img");
const lightboxCaption = document.querySelector(".lightbox figcaption");
const lightboxClose = document.querySelector(".lightbox-close");
const lightboxPrev = document.querySelector(".lightbox-prev");
const lightboxNext = document.querySelector(".lightbox-next");
const menuToggle = document.querySelector(".menu-toggle");
const navLinks = document.querySelector(".nav-links");
const topbar = document.querySelector(".topbar");

const initialGalleryLimit = 9;
const desktopInitialColorLimit = 12;
const mobileInitialColorLimit = 6;
let activeFilter = "all";
let activeSubfilter = "all";
let galleryExpanded = false;
let colorsExpanded = false;
let matchingImages = [...galleryImages];
let filteredImages = galleryImages.slice(0, initialGalleryLimit);
let activeImageIndex = 0;

function renderGallery() {
    galleryGrid.innerHTML = galleryImages.map((item, index) => {
        const label = item.subcategory ? subcategoryLabels[item.subcategory] : categoryLabels[item.category];

        return `
            <figure class="gallery-item" data-category="${item.category}" data-subcategory="${item.subcategory}" data-title="${item.title.toLowerCase()}" data-label="${label.toLowerCase()}" data-index="${index}">
                <button type="button" aria-label="Abrir ${label}">
                    <img src="${item.src}" alt="${label} de Nufeta Nails Art" loading="lazy">
                </button>
                <figcaption>
                    <h3>${label}</h3>
                </figcaption>
            </figure>
        `;
    }).join("");

    galleryGrid.querySelectorAll(".gallery-item button").forEach((button) => {
        button.addEventListener("click", () => {
            const index = Number(button.closest(".gallery-item").dataset.index);
            const filteredIndex = filteredImages.findIndex((item) => galleryImages.indexOf(item) === index);
            openLightbox(filteredIndex >= 0 ? filteredIndex : 0);
        });
    });

    applyFilters();
}

function applyFilters() {
    const searchTerm = searchInput.value.trim().toLowerCase();
    const items = galleryGrid.querySelectorAll(".gallery-item");

    matchingImages = galleryImages.filter((item) => {
        const categoryMatch = activeFilter === "all" || item.category === activeFilter;
        const subcategoryMatch = activeSubfilter === "all" || item.subcategory === activeSubfilter;
        const text = `${item.title} ${categoryLabels[item.category]} ${subcategoryLabels[item.subcategory] || ""} ${item.src}`.toLowerCase();
        const searchMatch = !searchTerm || text.includes(searchTerm);

        return categoryMatch && subcategoryMatch && searchMatch;
    });

    filteredImages = galleryExpanded ? matchingImages : matchingImages.slice(0, initialGalleryLimit);

    items.forEach((item) => {
        const galleryItem = galleryImages[Number(item.dataset.index)];
        item.classList.toggle("is-hidden", !filteredImages.includes(galleryItem));
    });

    visibleCount.textContent = filteredImages.length;
    galleryActions.classList.toggle("is-hidden", matchingImages.length <= initialGalleryLimit);
    galleryToggle.textContent = galleryExpanded ? "Ver menos" : "Ver más";
}

function getInitialColorLimit() {
    return window.matchMedia("(max-width: 720px)").matches ? mobileInitialColorLimit : desktopInitialColorLimit;
}

function applyColorLimit() {
    const initialColorLimit = getInitialColorLimit();

    colorCards.forEach((card, index) => {
        const shouldHide = !colorsExpanded && index >= initialColorLimit;
        card.classList.toggle("is-hidden", shouldHide);
    });

    colorActions.classList.toggle("is-hidden", colorCards.length <= initialColorLimit);
    colorToggle.textContent = colorsExpanded ? "Ver menos" : "Ver más";
}

function setActiveButton(buttons, activeButton) {
    buttons.forEach((button) => button.classList.toggle("active", button === activeButton));
}

filterButtons.forEach((button) => {
    button.addEventListener("click", () => {
        activeFilter = button.dataset.filter;
        galleryExpanded = false;
        setActiveButton(filterButtons, button);

        if (activeFilter !== "esmaltado_colour") {
            activeSubfilter = "all";
            setActiveButton(subfilterButtons, subfilterButtons[0]);
        }

        applyFilters();
    });
});

subfilterButtons.forEach((button) => {
    button.addEventListener("click", () => {
        activeSubfilter = button.dataset.subfilter;
        activeFilter = "esmaltado_colour";
        galleryExpanded = false;

        setActiveButton(subfilterButtons, button);
        filterButtons.forEach((filterButton) => {
            filterButton.classList.toggle("active", filterButton.dataset.filter === "esmaltado_colour");
        });

        applyFilters();
    });
});

searchInput.addEventListener("input", () => {
    galleryExpanded = false;
    applyFilters();
});

galleryToggle.addEventListener("click", () => {
    galleryExpanded = !galleryExpanded;
    applyFilters();
});

colorToggle.addEventListener("click", () => {
    colorsExpanded = !colorsExpanded;
    applyColorLimit();
});

if (contactForm) {
    contactForm.addEventListener("submit", (event) => {
        event.preventDefault();

        const formData = new FormData(contactForm);
        const body = [
            `Nombre: ${formData.get("name") || ""}`,
            `Email: ${formData.get("email") || ""}`,
            `Tipo de uñas: ${formData.get("service") || ""}`,
            "",
            `Mensaje: ${formData.get("message") || ""}`
        ].join("\n");

        window.location.href = `mailto:bijutsu.nails.shop@gmail.com?subject=${encodeURIComponent("Consulta desde Xufeta Nails Art")}&body=${encodeURIComponent(body)}`;
    });
}

function openLightbox(index) {
    if (!filteredImages.length) {
        return;
    }

    activeImageIndex = index;
    updateLightbox();
    lightbox.classList.add("is-open");
    lightbox.setAttribute("aria-hidden", "false");
    document.body.classList.add("lightbox-open");
}

function closeLightbox() {
    lightbox.classList.remove("is-open");
    lightbox.setAttribute("aria-hidden", "true");
    document.body.classList.remove("lightbox-open");
}

function updateLightbox() {
    const item = filteredImages[activeImageIndex];
    const label = item.subcategory ? subcategoryLabels[item.subcategory] : categoryLabels[item.category];

    lightboxImage.src = item.src;
    lightboxImage.alt = `${label} de Nufeta Nails Art`;
    lightboxCaption.textContent = label;
}

function moveLightbox(direction) {
    activeImageIndex = (activeImageIndex + direction + filteredImages.length) % filteredImages.length;
    updateLightbox();
}

lightboxClose.addEventListener("click", closeLightbox);
lightboxPrev.addEventListener("click", () => moveLightbox(-1));
lightboxNext.addEventListener("click", () => moveLightbox(1));

lightbox.addEventListener("click", (event) => {
    if (event.target === lightbox) {
        closeLightbox();
    }
});

document.addEventListener("keydown", (event) => {
    if (!lightbox.classList.contains("is-open")) {
        return;
    }

    if (event.key === "Escape") {
        closeLightbox();
    }

    if (event.key === "ArrowLeft") {
        moveLightbox(-1);
    }

    if (event.key === "ArrowRight") {
        moveLightbox(1);
    }
});

menuToggle.addEventListener("click", () => {
    const isOpen = navLinks.classList.toggle("is-open");
    topbar.classList.toggle("menu-open", isOpen);
    menuToggle.setAttribute("aria-expanded", String(isOpen));
});

navLinks.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
        navLinks.classList.remove("is-open");
        topbar.classList.remove("menu-open");
        menuToggle.setAttribute("aria-expanded", "false");
    });
});

function updateTopbarState() {
    topbar.classList.toggle("is-scrolled", window.scrollY > 24);
}

window.addEventListener("scroll", updateTopbarState, { passive: true });
updateTopbarState();
window.addEventListener("resize", applyColorLimit);

function getSlidesPerView() {
    if (window.matchMedia("(max-width: 720px)").matches) {
        return 1;
    }

    if (window.matchMedia("(max-width: 980px)").matches) {
        return 2;
    }

    return 3;
}

function setupCarousel(root) {
    const track = root.querySelector(".carousel-track");
    const slides = root.querySelectorAll(".category-slide");
    const prev = root.querySelector(".carousel-prev");
    const next = root.querySelector(".carousel-next");
    let activeSlide = 0;
    let timer;

    function updateCarousel() {
        const slidesPerView = getSlidesPerView();
        const maxSlide = Math.max(slides.length - slidesPerView, 0);
        activeSlide = Math.min(activeSlide, maxSlide);

        if (!slides.length) {
            return;
        }

        const slideWidth = slides[0].getBoundingClientRect().width;
        const gap = Number.parseFloat(getComputedStyle(track).gap) || 0;
        track.style.transform = `translateX(-${activeSlide * (slideWidth + gap)}px)`;

        slides.forEach((slide, index) => {
            slide.classList.toggle("is-active", index === activeSlide);
        });
    }

    function moveCarousel(direction) {
        const slidesPerView = getSlidesPerView();
        const maxSlide = Math.max(slides.length - slidesPerView, 0);
        activeSlide = activeSlide + direction;

        if (activeSlide > maxSlide) {
            activeSlide = 0;
        }

        if (activeSlide < 0) {
            activeSlide = maxSlide;
        }

        updateCarousel();
    }

    function restartCarousel() {
        window.clearInterval(timer);
        timer = window.setInterval(() => moveCarousel(1), 4200);
    }

    if (prev) {
        prev.addEventListener("click", () => {
            moveCarousel(-1);
            restartCarousel();
        });
    }

    if (next) {
        next.addEventListener("click", () => {
            moveCarousel(1);
            restartCarousel();
        });
    }

    window.addEventListener("resize", updateCarousel);
    updateCarousel();
    restartCarousel();
}

renderGallery();
applyColorLimit();
carouselRoots.forEach(setupCarousel);
