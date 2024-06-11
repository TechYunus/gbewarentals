// Smooth scrolling for navigation links
document.querySelectorAll('nav ul li a, footer ul li a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();

        const targetId = this.getAttribute('href').substring(1);
        const targetSection = document.getElementById(targetId);

        targetSection.scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Smooth scroll for hero button
document.querySelector('#hero button').addEventListener('click', function() {
    document.getElementById('rent-cars').scrollIntoView({
        behavior: 'smooth'
    });
});
