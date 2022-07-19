const logo = document.querySelector(".showMenu");
const menuElements = document.querySelectorAll(".menuElement");
const mElements = [...menuElements];

logo.addEventListener("click", () => {
    mElements.forEach(element => {
        element.classList.toggle("hiddenMenu");
    })
})

