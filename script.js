document.addEventListener("DOMContentLoaded", function () {
    const menuButton = document.getElementById("menu-button");
    const menu = document.getElementById("menu");

    menuButton.addEventListener("click", function () {
        if (menu.style.display === "block") {
            menu.style.display = "none";
        } else {
            menu.style.display = "block";
        }
    });
});
