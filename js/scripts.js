const menu = document.getElementById("menu");
const toggle = document.getElementById("menuToggle");
const overlay = document.getElementById("menuOverlay");

if (menu && toggle && overlay) {
    const setMenuState = (isOpen) => {
        menu.classList.toggle("active", isOpen);
        toggle.classList.toggle("active", isOpen);
        overlay.classList.toggle("active", isOpen);
        toggle.setAttribute("aria-expanded", String(isOpen));
        toggle.setAttribute("aria-label", isOpen ? "Fechar menu" : "Abrir menu");
        overlay.setAttribute("aria-hidden", String(!isOpen));
    };

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
