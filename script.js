// Dynamic greeting based on time of day
function getGreeting() {
    const hours = new Date().getHours();
    let greeting;

    if (hours >= 5 && hours < 12) {
        greeting = "Good morning";
    } else if (hours >= 12 && hours < 18) {
        greeting = "Good afternoon";
    } else {
        greeting = "Good evening";
    }

    return greeting;
}

// Insert the greeting message into the header
document.addEventListener("DOMContentLoaded", () => {
    const greetingElement = document.querySelector("header p");
    const greetingMessage = getGreeting();

    // Dynamically update the greeting text
    greetingElement.innerText = `${greetingMessage}, I'm Patryk Tecza, and these are my projects.`;
});

// Smooth scroll for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});
