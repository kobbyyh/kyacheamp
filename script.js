// When the down icon is clicked
// document.getElementById('reveal-button').addEventListener('click', function () {
//     // Reveal the rest of the page content
//     document.getElementById('main-content').style.display = 'block';
//     document.querySelector('.video-background').style.display = 'block'; // Hide the video section

//     // Enable scrolling
//     document.body.style.overflow = 'auto';

//     // Smooth scroll to the next section (About)
//     document.getElementById('hidden-content').scrollIntoView({ behavior: 'smooth' });

//     // Disable further clicks on the button and change its appearance
//     this.style.pointerEvents = 'none';
//     this.style.opacity = '0.5';
// });





// toggle dark mode

const themeIcon = document.getElementById('theme-icon');
const body = document.body;

themeIcon.addEventListener('click', () => {
    // Toggle the dark theme class on the body
    body.classList.toggle('dark-theme');

    // Update the icon based on the current theme
    if (body.classList.contains('dark-theme')) {
        themeIcon.classList.replace('bi-brightness-high-fill', 'bi-brightness-high');
    } else {
        themeIcon.classList.replace('bi-brightness-high', 'bi-brightness-high-fill');
    }
});



// tawk chatbot

// var Tawk_API = Tawk_API || {}, Tawk_LoadStart = new Date();
// (function () {
//     var s1 = document.createElement("script"), s0 = document.getElementsByTagName("script")[0];
//     s1.async = true;
//     s1.src = 'https://embed.tawk.to/62b42aa97b967b11799617ef/1g67sda0r';
//     s1.charset = 'UTF-8';
//     s1.setAttribute('crossorigin', '*');
//     s0.parentNode.insertBefore(s1, s0);
// })();
