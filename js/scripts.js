const menu = document.getElementById("menu");
const toggle = document.getElementById("menuToggle");
const overlay = document.getElementById("menuOverlay");

if (menu && toggle && overlay) {
    const mobileMenuQuery = window.matchMedia("(max-width: 992px)");

    const setMenuState = (isOpen) => {
        const isMobileMenu = mobileMenuQuery.matches;

        menu.classList.toggle("active", isOpen);
        toggle.classList.toggle("active", isOpen);
        overlay.classList.toggle("active", isOpen);
        menu.inert = isMobileMenu && !isOpen;
        menu.setAttribute("aria-hidden", String(isMobileMenu && !isOpen));
        toggle.setAttribute("aria-expanded", String(isOpen));
        toggle.setAttribute("aria-label", isOpen ? "Fechar menu" : "Abrir menu");
        overlay.setAttribute("aria-hidden", String(!isOpen));
    };

    setMenuState(false);

    mobileMenuQuery.addEventListener("change", () => setMenuState(false));

    toggle.addEventListener("click", () => {
        setMenuState(!menu.classList.contains("active"));
    });

    overlay.addEventListener("click", () => setMenuState(false));

    document.querySelectorAll(".menu a").forEach((link) => {
        link.addEventListener("click", () => setMenuState(false));
    });

    document.addEventListener("keydown", (event) => {
        if (event.key === "Escape" && menu.classList.contains("active")) {
            setMenuState(false);
            toggle.focus();
        }
    });
}

const filterButtons = document.querySelectorAll("[data-filter]");
const collectionCards = document.querySelectorAll(".product-card[data-category]");
const collectionEmpty = document.getElementById("collectionEmpty");
const productCardsWithStatus = document.querySelectorAll(".product-card[data-status]");

if (productCardsWithStatus.length) {
    productCardsWithStatus.forEach((card) => {
        const isUnavailable = card.dataset.status === "sold-out";
        const status = card.querySelector(".product-card__status");
        const link = card.querySelector(".product-card__link");

        card.classList.toggle("is-unavailable", isUnavailable);

        if (status) {
            status.textContent = isUnavailable ? "Esgotado" : "Disponível";
        }

        if (link) {
            link.setAttribute("aria-disabled", String(isUnavailable));
            link.tabIndex = isUnavailable ? -1 : 0;
        }
    });
}

if (filterButtons.length && collectionCards.length) {
    const filterProducts = (category) => {
        let visibleProducts = 0;

        collectionCards.forEach((card) => {
            const isVisible = category === "todos" || card.dataset.category === category;

            card.classList.toggle("is-hidden", !isVisible);

            if (isVisible) {
                visibleProducts += 1;
            }
        });

        if (collectionEmpty) {
            collectionEmpty.hidden = visibleProducts > 0;
        }
    };

    filterButtons.forEach((button) => {
        button.addEventListener("click", () => {
            const category = button.dataset.filter;

            filterButtons.forEach((filterButton) => {
                const isActive = filterButton === button;

                filterButton.classList.toggle("active", isActive);
                filterButton.setAttribute("aria-pressed", String(isActive));
            });

            filterProducts(category);
        });
    });
}

const productCatalog = {
    "natural-cozy": {
        name: "Natural Cozy",
        category: "Conjuntos",
        price: "R$ 89,90",
        description: "Um modelo delicado e confortável para valorizar a rotina com leveza, beleza e acabamento especial.",
        images: ["images/natural-cozy.png"],
    },
    "tifani-classico-marfim": {
        name: "Tifani Clássico Marfim",
        category: "Conjuntos",
        price: "R$ 89,90",
        description: "Um conjunto em tom marfim com visual clássico, delicado e elegante.",
        images: ["images/tifani-classico-marfim.png"],
    },
    "conjunto-raquel": {
        name: "Conjunto Raquel",
        category: "Conjuntos",
        price: "R$ 79,90",
        description: "Conjunto versátil com acabamento confortável e presença delicada.",
        images: ["images/conjunto-raquel.png"],
    },
    "conjunto-cris": {
        name: "Conjunto Cris",
        category: "Conjuntos",
        price: "R$ 79,90",
        description: "Modelo charmoso para quem busca conforto, beleza e um toque especial.",
        images: ["images/conjunto-cris.png"],
    },
    "tifani-classico-azul": {
        name: "Tifani Clássico Azul",
        category: "Conjuntos",
        price: "R$ 89,90",
        description: "Versão azul do Tifani Clássico, com elegância e acabamento marcante.",
        images: ["images/tifani-classico-azul.png"],
    },
    "conjunto-isabel": {
        name: "Conjunto Isabel",
        category: "Conjuntos",
        price: "R$ 69,90",
        description: "Conjunto leve e delicado para compor momentos com conforto e suavidade.",
        images: ["images/conjunto-isabel.png"],
    },
    "conjunto-duda": {
        name: "Conjunto Duda",
        category: "Conjuntos",
        price: "R$ 69,90",
        description: "Modelo com proposta jovem, confortável e fácil de usar no dia a dia.",
        images: ["images/conjunto-duda.png"],
    },
    "calcinhas-pompom": {
        name: "Calcinhas pompom",
        category: "Calcinhas",
        price: "R$ 29,90",
        description: "Calcinha com detalhe delicado e visual divertido para completar a coleção.",
        images: ["images/calcinhas-pompom.png"],
    },
    "fio-confort": {
        name: "Fio Confort",
        category: "Calcinhas",
        price: "R$ 24,90",
        description: "Fio confortável, discreto e pensado para acompanhar a rotina com leveza.",
        images: ["images/fio-confort.png"],
    },
};

const productMainImage = document.getElementById("productMainImage");
const productName = document.getElementById("product-name");
const productCategory = document.querySelector(".product-eyebrow");
const productPrice = document.querySelector(".product-price");
const productDescription = document.querySelector(".product-description");
const productAvailability = document.querySelector(".product-availability");
const productThumbnailsWrapper = document.querySelector(".product-gallery__thumbnails");
const sizeOptions = document.querySelectorAll("[data-size]");

if (productMainImage && productName && productCatalog) {
    const params = new URLSearchParams(window.location.search);
    const productSlug = params.get("produto") || "natural-cozy";
    const product = productCatalog[productSlug] || productCatalog["natural-cozy"];

    document.title = `${product.name} | T'SECRETS`;
    productMainImage.src = product.images[0];
    productMainImage.alt = product.name;
    productName.textContent = product.name;

    if (productCategory) {
        productCategory.textContent = product.category;
    }

    if (productPrice) {
        productPrice.textContent = product.price;
    }

    if (productDescription) {
        productDescription.textContent = product.description;
    }

    if (productAvailability) {
        productAvailability.textContent = "Disponível";
    }

    if (productThumbnailsWrapper) {
        productThumbnailsWrapper.innerHTML = product.images.map((image, index) => `
                        <button type="button" class="product-thumbnail${index === 0 ? " active" : ""}" data-product-image="${image}" data-product-alt="${product.name}" aria-label="Ver imagem ${index + 1}" aria-pressed="${index === 0 ? "true" : "false"}">
                            <img src="${image}" alt="">
                        </button>`).join("");
    }
}

const productThumbnails = document.querySelectorAll("[data-product-image]");

if (productMainImage && productThumbnails.length) {
    productThumbnails.forEach((thumbnail) => {
        thumbnail.addEventListener("click", () => {
            productMainImage.src = thumbnail.dataset.productImage;
            productMainImage.alt = thumbnail.dataset.productAlt;

            productThumbnails.forEach((item) => {
                const isActive = item === thumbnail;

                item.classList.toggle("active", isActive);
                item.setAttribute("aria-pressed", String(isActive));
            });
        });
    });
}

if (sizeOptions.length) {
    sizeOptions.forEach((sizeOption) => {
        sizeOption.addEventListener("click", () => {
            if (sizeOption.disabled) {
                return;
            }

            sizeOptions.forEach((item) => {
                const isActive = item === sizeOption;

                item.classList.toggle("active", isActive);
                item.setAttribute("aria-pressed", String(isActive));
            });
        });
    });
}
