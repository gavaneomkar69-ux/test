// Simple welcome message

console.log("Welcome to Omkar's Portfolio!");


// Smooth navigation

document.querySelectorAll(".nav-links a").forEach(function(link) {

    link.addEventListener("click", function() {

        console.log("Navigating to " + link.textContent);

    });

});