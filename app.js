document.querySelectorAll('a[href^="."]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

function addHoverEffect(elementId) {
    const element = document.getElementById(elementId);

    element.addEventListener('mouseenter', function() {
        element.style.opacity = 1;
    });

    element.addEventListener('mouseleave', function() {
        element.style.opacity = 0;
    });
}

document.addEventListener('DOMContentLoaded', function() {
    // Call the function for the specific elements
    addHoverEffect('obrazovanje');
    addHoverEffect('profilP');
});


