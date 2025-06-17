// This function handles the hamburger menu toggle.
// Note: Your HTML uses 'togglemenu()' (lowercase 'm'), so the function name is kept consistent.
function togglemenu() {
    const menu = document.querySelector(".menu-links");
    const icon = document.querySelector(".hamburger-icon");
    menu.classList.toggle("open");
    icon.classList.toggle("open");
}

// The toggleReadMore function has been removed as it's no longer needed
// since the content will always be fully displayed.
/*
// Original toggleReadMore function (removed):
function toggleReadMore(contentId, button) {
    const content = document.getElementById(contentId);
    content.classList.toggle('collapsed');
    if (content.classList.contains('collapsed')) {
        button.textContent = 'Read More';
    } else {
        button.textContent = 'Show Less';
    }
}
*/
