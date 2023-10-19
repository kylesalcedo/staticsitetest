// JavaScript for dropdown menu
document.addEventListener("DOMContentLoaded", function () {
    const menuButton = document.getElementById("menu-button");
    const menu = document.getElementById("menu");

    menuButton.addEventListener("click", function () {
        menu.classList.toggle("show-menu");
    });

    // Close the menu when clicking outside of it
    document.addEventListener("click", function (e) {
        if (!menu.contains(e.target) && e.target !== menuButton) {
            menu.classList.remove("show-menu");
        }
    });
});
