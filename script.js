document.addEventListener("DOMContentLoaded", function () {
    console.log("DOM content loaded"); // Add this line for testing
    const menuButton = document.getElementById("menu-button");
    const menu = document.getElementById("menu");

    menuButton.addEventListener("click", function () {
        menu.classList.toggle("show-menu");
    });

    document.addEventListener("click", function (e) {
        if (!menu.contains(e.target) && e.target !== menuButton) {
            menu.classList.remove("show-menu");
        }
    });
});
