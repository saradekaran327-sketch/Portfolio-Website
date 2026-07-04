
    // Loader
    window.addEventListener("load", () => {

    const loader = document.getElementById("loader");

    loader.style.opacity = "0";

    setTimeout(() => {
        loader.style.display = "none";
    }, 600);

});

// Typing Animation

new Typed(".typing",{

strings:[
"Programmer 💻",
"Coder 👨‍💻",
"Full Stack Developer 🌐",
"Web Developer 🕸️",
],

typeSpeed:80,
backSpeed:50,
backDelay:1500,
loop:true

});

// AOS

AOS.init({

duration:1000,
once:true

});
