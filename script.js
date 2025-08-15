setTimeout(() => {
    const mainDiv = document.getElementById('main');
    const intro = document.getElementById('intro');

    mainDiv.classList.add('fade-out');

    intro.classList.add('show');

    setTimeout(() => mainDiv.remove(), 600);
}, 1500);





const c = document.getElementById("bg"), ctx = c.getContext("2d");
let particles = [];

function resize() {
    c.width = innerWidth;
    c.height = innerHeight;
}
resize();
onresize = resize;

for (let i = 0; i < 100; i++) {
    particles.push({
        x: Math.random() * c.width,
        y: Math.random() * c.height,
        vx: (Math.random() - 0.5) * 1,
        vy: (Math.random() - 0.5) * 1,
        size: 5 + Math.random() * 10,
        alpha: 0.3 + Math.random() * 0.5
    });
}

function draw() {
    ctx.clearRect(0, 0, c.width, c.height);
    for (let p of particles) {
        p.x += p.vx;
        p.y += p.vy;
        if (p.x < -20) p.x = c.width + 20;
        if (p.x > c.width + 20) p.x = -20;
        if (p.y < -20) p.y = c.height + 20;
        if (p.y > c.height + 20) p.y = -20;

        ctx.globalAlpha = p.alpha;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fillStyle = "#5ec4ff";
        ctx.fill();
    }
    requestAnimationFrame(draw);
}
draw();




const texts = [
    "Full Stack Developer",
    "AI & ML engineer",
    "Low-level system designer"
];

let count = 0;
let index = 0;
let currentText = '';
let letter = '';
let isDeleting = false;

function type() {
    currentText = texts[count];

    if (isDeleting) {
        letter = currentText.slice(0, --index);
    } else {
        letter = currentText.slice(0, ++index);
    }

    document.getElementById('typing').textContent = letter;

    let speed = isDeleting ? 50 : 100;

    if (!isDeleting && letter.length === currentText.length) {
        speed = 1500; // pause before deleting
        isDeleting = true;
    } else if (isDeleting && letter.length === 0) {
        isDeleting = false;
        count = (count + 1) % texts.length;
        speed = 500; // pause before typing next
    }

    setTimeout(type, speed);
}

type();




const hamOpen = document.getElementById("ham_1");
const hamClose = document.getElementById("ham_2");
const navMenu = document.querySelector("nav ul");

hamOpen.addEventListener("click", () => {
    navMenu.style.left = "0";
    hamOpen.style.display = "none";
    hamClose.style.display = "block";
});

hamClose.addEventListener("click", () => {
    navMenu.style.left = "-100%";
    hamClose.style.display = "none";
    hamOpen.style.display = "block";
});







const track = document.getElementById('slider-track');
const slider = document.getElementById('certificate');

track.innerHTML += track.innerHTML;
const originalWidth = track.scrollWidth / 2;

let scrollSpeed = 0.5;
let scrollPosition = 0;
let isPaused = false;

function animate() {
    if (!isPaused) {
        scrollPosition -= scrollSpeed;
        if (Math.abs(scrollPosition) >= originalWidth) {
            scrollPosition = 0;
        }
        track.style.transform = `translateX(${scrollPosition}px)`;
    }
    requestAnimationFrame(animate);
}

slider.addEventListener('mouseenter', () => isPaused = true);
slider.addEventListener('mouseleave', () => isPaused = false);

// Lightbox functionality
const lightbox = document.getElementById('lightbox');
const lightboxImg = document.getElementById('lightbox-img');
const closeBtn = document.querySelector('.close-btn');

track.querySelectorAll('img').forEach(img => {
    img.addEventListener('click', () => {
        lightboxImg.src = img.src;
        lightbox.style.display = 'flex';
        document.querySelector('nav').style.display = 'none';
    });
});

closeBtn.addEventListener('click', () => {
    lightbox.style.display = 'none';
    document.querySelector('nav').style.display = 'block';
});

lightbox.addEventListener('click', (e) => {
    if (e.target !== lightboxImg) {
        lightbox.style.display = 'none';
        document.querySelector('nav').style.display = 'block';
    }
});

animate();
