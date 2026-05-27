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

const makeItem = (src, category, subcategory = "") => ({
    src,
    category,
    subcategory
});

const range = (prefix, start, end) => Array.from({ length: end - start + 1 }, (_, index) => `${prefix}_${start + index}`);
const makeItems = (base, category, subcategory, files) => files.map((file) => makeItem(`imagenes/${base}/${file}.webp`, category, subcategory));
const searchAliases = {
    black: "negro",
    blue: "azul",
    brown: "marron",
    full_pink: "rosa",
    green: "verde",
    pink: "rosa",
    purple: "morado",
    red: "rojo",
    warm: "calido",
    luxury: "lujo"
};

const galleryImages = [
    ...makeItems("francesa", "francesa", "", range("francesa", 1, 18)),
    ...makeItems("baby_boomer", "baby_boomer", "", ["baby_boomer", ...range("baby_boomer", 2, 4)]),
    ...makeItems("ojo_de_gato", "ojo_de_gato", "", range("ojo_de_gato", 2, 5)),
    ...makeItems("press_on", "press_on", "", ["press_on_", ...range("press_on", 1, 14)]),
    ...makeItems("efecto_blooming", "efecto_blooming", "", ["blooming", "blooming_1"]),
    ...makeItems("esmaltado_colour/full_color", "esmaltado_colour", "full_color", "color_black color_blue color_brown color_full_pink color_green color_love color_pink color_purple color_purple_2 color_red color_red_2 color_sky color_warm colo_luxury".split(" ")),
    ...makeItems("esmaltado_colour/ilustracion", "esmaltado_colour", "ilustracion", ["ilustration", ...range("ilustration", 2, 8)]),
    ...makeItems("esmaltado_colour/puntos", "esmaltado_colour", "puntos", "puntos puntos_black puntos_blue puntos_green".split(" ")),
    ...makeItems("esmaltado_colour/purpurina", "esmaltado_colour", "purpurina", ["purpurina", "purpurina_2"]),
    ...makeItems("esmaltado_colour/gemas", "esmaltado_colour", "gemas", ["gemas", "gemas_2"]),
    ...makeItems("esmaltado_colour/animal_print", "esmaltado_colour", "animal_print", ["animal_print", "animal_print_2"])
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

const colorOptions = [
    ["Rosa lechoso", "Delicado, limpio y favorecedor para manicuras naturales.", "#f4dfd9"],
    ["Nude almendra", "Un beige rosado elegante para diario o eventos discretos.", "#d4b2a4"],
    ["Rosa frambuesa", "Vivo, femenino y con presencia sin llegar al rojo clasico.", "#bb2f4f"],
    ["Rojo cereza", "Intenso y brillante, perfecto para un acabado sofisticado.", "#7c1f22"],
    ["Lila bruma", "Pastel frio para manicuras suaves con un punto diferente.", "#b9aecf"],
    ["Azul lavanda", "Sereno, moderno y muy bonito con detalles plateados.", "#7f8ebd"],
    ["Turquesa joya", "Color protagonista para looks frescos o de verano.", "#1aa5a0"],
    ["Nacar irisado", "Reflejos perlados para baby boomer, francesa o detalles.", "", "chrome"],
    ["Ojo de gato vino", "Profundo, magnetico y con destello cambiante.", "", "cat-eye"],
    ["Confetti candy", "Puntos y microdetalles para disenos divertidos.", "", "confetti"],
    ["Carey suave", "Patron calido tipo animal print, elegante y actual.", "", "animal"],
    ["Champagne glitter", "Brillo fino para acentos, fiestas o manicuras luminosas.", "", "glitter"],
    ["Algodon rosa", "Pastel dulce para manicuras suaves y delicadas.", "#f7cbd5"],
    ["Malva empolvado", "Rosa apagado con un punto vintage muy elegante.", "#df9aa8"],
    ["Fucsia hibisco", "Energia, color y mucho protagonismo en la mano.", "#ec4f7d"],
    ["Marron cacao", "Profundo y calido, ideal para looks oto&ntilde;ales.", "#6f2320"],
    ["Negro lacado", "Minimalista, potente y perfecto con brillo espejo.", "#2f2f33"],
    ["Gris perla", "Neutro frio, limpio y facil de combinar.", "#c9c8c4"],
    ["Verde salvia", "Suave, natural y muy bonito en manicuras cortas.", "#88bfa6"],
    ["Verde esmeralda", "Joya intensa para dise&ntilde;os elegantes o festivos.", "#1f5f58"],
    ["Blooming acuarela", "Efecto difuminado para flores y fondos fluidos.", "", "blooming"],
    ["Francesa glaseada", "Base nude con punta blanca suave y brillo limpio.", "", "french"]
];

const colorGrid = document.querySelector("#color-grid");
colorGrid.innerHTML = colorOptions.map(([name, text, swatch, pattern]) => `
    <article class="color-card">
        <span class="swatch${pattern ? ` pattern ${pattern}` : ""}"${swatch ? ` style="--swatch: ${swatch};"` : ""}></span>
        <h3>${name}</h3>
        <p>${text}</p>
    </article>
`).join("");

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

function renderGallery(items) {
    galleryGrid.innerHTML = items.map((item) => {
        const index = galleryImages.indexOf(item);
        const label = item.subcategory ? subcategoryLabels[item.subcategory] : categoryLabels[item.category];

        return `
            <figure class="gallery-item" data-category="${item.category}" data-subcategory="${item.subcategory}" data-label="${label.toLowerCase()}" data-index="${index}">
                <button type="button" aria-label="Abrir ${label}">
                    <img src="${item.src}" alt="${label} de Xufeta Nails Art" loading="lazy">
                </button>
                <figcaption>
                    <h3>${label}</h3>
                </figcaption>
            </figure>
        `;
    }).join("");
}

galleryGrid.addEventListener("click", (event) => {
    const item = event.target.closest(".gallery-item");
    if (!item || !galleryGrid.contains(item)) {
        return;
    }

    const index = Number(item.dataset.index);
    const filteredIndex = filteredImages.findIndex((image) => galleryImages.indexOf(image) === index);
    openLightbox(filteredIndex >= 0 ? filteredIndex : 0);
});

function applyFilters() {
    const searchTerm = searchInput.value.trim().toLowerCase();

    matchingImages = galleryImages.filter((item) => {
        const categoryMatch = activeFilter === "all" || item.category === activeFilter;
        const subcategoryMatch = activeSubfilter === "all" || item.subcategory === activeSubfilter;
        const aliases = Object.entries(searchAliases)
            .filter(([key]) => item.src.includes(key))
            .map(([, value]) => value)
            .join(" ");
        const text = `${categoryLabels[item.category]} ${subcategoryLabels[item.subcategory] || ""} ${aliases} ${item.src}`.toLowerCase();
        const searchMatch = !searchTerm || text.includes(searchTerm);

        return categoryMatch && subcategoryMatch && searchMatch;
    });

    filteredImages = galleryExpanded ? matchingImages : matchingImages.slice(0, initialGalleryLimit);
    renderGallery(filteredImages);

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
    const formStatus = contactForm.querySelector(".form-status");
    const submitButton = contactForm.querySelector("button[type='submit']");

    contactForm.addEventListener("submit", async (event) => {
        event.preventDefault();

        if (!contactForm.checkValidity()) {
            contactForm.reportValidity();
            return;
        }

        formStatus.textContent = "Enviando consulta...";
        formStatus.classList.remove("is-error");
        submitButton.disabled = true;

        try {
            const response = await fetch(contactForm.action, {
                method: "POST",
                body: new FormData(contactForm),
                headers: {
                    Accept: "application/json"
                }
            });

            if (!response.ok) {
                throw new Error("No se pudo enviar el formulario.");
            }

            contactForm.reset();
            formStatus.textContent = "Consulta enviada. Te responderemos muy pronto.";
        } catch (error) {
            formStatus.textContent = "No se pudo enviar ahora. Prueba de nuevo en unos minutos.";
            formStatus.classList.add("is-error");
        } finally {
            submitButton.disabled = false;
        }
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
    lightboxImage.alt = `${label} de Xufeta Nails Art`;
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
    const viewport = root.querySelector(".carousel-viewport");
    const originalSlides = Array.from(root.querySelectorAll(".category-slide"));
    let slides = originalSlides;
    let activeSlide = 0;

    if (originalSlides.length > 1) {
        originalSlides.forEach((slide, index) => {
            slide.dataset.carouselIndex = index;
        });

        const firstClone = originalSlides[0].cloneNode(true);
        const lastClone = originalSlides[originalSlides.length - 1].cloneNode(true);
        firstClone.dataset.carouselIndex = "0";
        lastClone.dataset.carouselIndex = String(originalSlides.length - 1);
        track.prepend(lastClone);
        track.append(firstClone);
        slides = Array.from(track.querySelectorAll(".category-slide"));
    }

    function updateCarousel() {
        const slidesPerView = getSlidesPerView();
        const isMobilePeek = window.matchMedia("(max-width: 720px)").matches;
        const maxSlide = isMobilePeek ? Math.max(originalSlides.length - 1, 0) : Math.max(originalSlides.length - slidesPerView, 0);
        activeSlide = Math.min(activeSlide, maxSlide);

        if (!slides.length) {
            return;
        }

        const slideWidth = slides[0].getBoundingClientRect().width;
        const gap = Number.parseFloat(getComputedStyle(track).gap) || 0;
        const cloneOffset = originalSlides.length > 1 ? 1 : 0;
        const activeTrackSlide = activeSlide + cloneOffset;
        const centeredOffset = isMobilePeek ? (viewport.clientWidth - slideWidth) / 2 : 0;
        const offset = activeTrackSlide * (slideWidth + gap) - centeredOffset;
        track.style.transform = `translateX(-${offset}px)`;

        slides.forEach((slide, index) => {
            const slideIndex = Number.parseInt(slide.dataset.carouselIndex || index, 10);
            slide.classList.toggle("is-active", slideIndex === activeSlide);
        });
    }

    function moveCarousel() {
        const slidesPerView = getSlidesPerView();
        const isMobilePeek = window.matchMedia("(max-width: 720px)").matches;
        const maxSlide = isMobilePeek ? Math.max(originalSlides.length - 1, 0) : Math.max(originalSlides.length - slidesPerView, 0);
        activeSlide = activeSlide >= maxSlide ? 0 : activeSlide + 1;
        updateCarousel();
    }

    window.addEventListener("resize", updateCarousel);
    updateCarousel();
    window.setInterval(moveCarousel, 4200);
}

applyFilters();
applyColorLimit();
carouselRoots.forEach(setupCarousel);
