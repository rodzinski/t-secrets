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
