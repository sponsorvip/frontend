const menuButton = document.querySelector(".menu-toggle");
const navigation = document.querySelector("#menu-principale");

if (menuButton && navigation) {
    const setMenuOpen = (isOpen) => {
        menuButton.setAttribute("aria-expanded", String(isOpen));
        menuButton.setAttribute("aria-label", isOpen ? "Chiudi il menu" : "Apri il menu");
        navigation.classList.toggle("is-open", isOpen);
    };

    menuButton.addEventListener("click", () => {
        const isOpen = menuButton.getAttribute("aria-expanded") === "true";
        setMenuOpen(!isOpen);
    });

    navigation.addEventListener("click", (event) => {
        if (event.target.closest('a[href^="#"]')) {
            setMenuOpen(false);
        }
    });

    document.addEventListener("click", (event) => {
        const isOpen = menuButton.getAttribute("aria-expanded") === "true";
        if (isOpen && !navigation.contains(event.target) && !menuButton.contains(event.target)) {
            setMenuOpen(false);
        }
    });

    document.addEventListener("keydown", (event) => {
        if (event.key === "Escape" && menuButton.getAttribute("aria-expanded") === "true") {
            setMenuOpen(false);
            menuButton.focus();
        }
    });
}
