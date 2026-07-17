const menu = document.getElementById("menu");

const toggle = document.getElementById("menuToggle");

const overlay = document.getElementById("menuOverlay");

toggle.addEventListener("click", () => {

    menu.classList.toggle("active");

    toggle.classList.toggle("active");

    overlay.classList.toggle("active");

});

overlay.addEventListener("click", () => {

    menu.classList.remove("active");

    toggle.classList.remove("active");

    overlay.classList.remove("active");

});

document.querySelectorAll(".menu a").forEach(link=>{

    link.addEventListener("click",()=>{

        menu.classList.remove("active");

        toggle.classList.remove("active");

        overlay.classList.remove("active");

    });

});