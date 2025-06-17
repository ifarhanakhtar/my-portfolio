function togglemenu() {
    const menu = document.querySelector(".menu-links");
    const icon = document.querySelector(".hamburger-icon");
    menu.classList.toggle("open");
    icon.classList.toggle("open");
}

function toggleReadMore(contentId, button) {
    const content = document.getElementById(contentId);
    content.classList.toggle("expanded");
    content.classList.toggle("collapsed");

    if (content.classList.contains("expanded")) {
        button.textContent = "Read Less";
    } else {
        button.textContent = "Read More";
    }
}
