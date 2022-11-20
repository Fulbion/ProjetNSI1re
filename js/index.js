// Code pour le changement de thème clair/sombre
const themeButton = document.getElementById("theme-button");
const darkTheme = "dark-theme";
const iconTheme = "fa-sun";

const selectedTheme = localStorage.getItem("selected-theme");
const selectedIcon = localStorage.getItem("selected-icon");

const getCurrentTheme = () => document.body.classList.contains(darkTheme) ? "dark" : "light";
const getCurrentIcon = () => themeButton.classList.contains(darkTheme) ? "fa-moon" : "fa-sun";

if (selectedTheme) {
    document.body.classList[selectedTheme === "dark" ? "add" : "remove"](darkTheme);
    themeButton.classList[selectedIcon === "fa-moon" ? "add" : "remove"](iconTheme);
}

themeButton.addEventListener("click", () => {
    document.body.classList.toggle(darkTheme);
    themeButton.classList.toggle(iconTheme);

    localStorage.setItem("selected-theme", getCurrentTheme());
    localStorage.setItem("selected-icon", getCurrentIcon());
})

// Code pour les popups de l'historique de Windows, Linux, etc.
const modalViews = document.querySelectorAll(".about-modal"),
      modalBtns = document.querySelectorAll(".popup-button"),
      modalCloses = document.querySelectorAll(".about-modal-close");

let modal = function(modalClick)
{
    modalViews[modalClick].classList.add("active-modal")
}

modalBtns.forEach((modalBtn, i) =>
{
    modalBtn.addEventListener("click", () =>
    {
        modal(i)
    })
})

modalCloses.forEach((modalClose) =>
{
    modalClose.addEventListener("click", () =>
    {
        modalViews.forEach((modalView) =>
        {
            modalView.classList.remove("active-modal")
        })
    })
})