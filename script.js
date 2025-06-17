// Function to toggle the mobile navigation menu
function togglemenu() {
    const menu = document.querySelector(".menu-links");
    const icon = document.querySelector(".hamburger-icon");
    menu.classList.toggle("open");
    icon.classList.toggle("open");
    // Toggle aria-expanded attribute for accessibility
    const isExpanded = icon.getAttribute('aria-expanded') === 'true' || false;
    icon.setAttribute('aria-expanded', !isExpanded);
}

// Function to toggle the "Read More" content
function toggleReadMore(contentId, button) {
    const content = document.getElementById(contentId);
    if (!content) { // Basic error handling
        console.error('Content element not found for ID:', contentId);
        return;
    }

    // Toggle the classes directly
    content.classList.toggle("expanded");
    content.classList.toggle("collapsed");

    // Update button text based on the 'expanded' class
    if (content.classList.contains("expanded")) {
        button.textContent = "Read Less";
    } else {
        button.textContent = "Read More";
    }
}

// Optional: Add event listeners after DOM content is loaded
// document.addEventListener('DOMContentLoaded', () => {
//     // For hamburger menu
//     const hamburgerIcon = document.querySelector(".hamburger-icon");
//     if (hamburgerIcon) {
//         hamburgerIcon.addEventListener('click', togglemenu);
//     }

//     // For "Read More" buttons (if you had multiple)
//     // document.querySelectorAll('.read-more-btn').forEach(button => {
//     //     button.addEventListener('click', () => {
//     //         const contentId = button.dataset.targetContent; // Assuming a data-target-content attribute
//     //         toggleReadMore(contentId, button);
//     //     });
//     // });
// });
