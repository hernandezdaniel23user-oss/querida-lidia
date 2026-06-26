const prevBtn = document.querySelector("#prev-btn");
const nextBtn = document.querySelector("#next-btn");

// Capturamos las 5 hojas físicas
const papers = [
    document.querySelector("#p1"),
    document.querySelector("#p2"),
    document.querySelector("#p3"),
    document.querySelector("#p4"),
    document.querySelector("#p5")
];

let currentLocation = 1;
let numOfPapers = 5;
let maxLocation = numOfPapers + 1;

// Eventos de los botones de navegación
prevBtn.addEventListener("click", goPrevPage);
nextBtn.addEventListener("click", goNextPage);

function goNextPage() {
    if (currentLocation < maxLocation) {
        const currentPaper = papers[currentLocation - 1];
        currentPaper.classList.add("flipped");
        currentPaper.style.zIndex = currentLocation;
        currentLocation++;
    }
}

function goPrevPage() {
    if (currentLocation > 1) {
        currentLocation--;
        const currentPaper = papers[currentLocation - 1];
        currentPaper.classList.remove("flipped");
        currentPaper.style.zIndex = numOfPapers - currentLocation + 1;
    }
}

// --- GENERADOR AUTOMÁTICO DE CORAZONES FLOTANTES ---
function createHeart() {
    const heart = document.createElement('div');
    heart.classList.add('heart-fall');
    
    const heartTypes = ['❤️', '💖', '💝', '💌', '💕'];
    heart.innerText = heartTypes[Math.floor(Math.random() * heartTypes.length)];
    
    heart.style.left = Math.random() * 100 + "vw";
    heart.style.fontSize = Math.random() * 15 + 15 + "px";
    
    const duration = Math.random() * 4 + 4;
    heart.style.animationDuration = duration + "s";
    
    document.body.appendChild(heart);
    
    setTimeout(() => {
        heart.remove();
    }, duration * 1000);
}

setInterval(createHeart, 400);
