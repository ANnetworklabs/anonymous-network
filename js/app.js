// ===============================
// BASIC ANIMATION ENGINE
// Anonymous Network UI Effects
// ===============================

// -------------------------------
// 1. PARTICLE BACKGROUND SYSTEM
// -------------------------------
const canvas = document.createElement("canvas");
const ctx = canvas.getContext("2d");
document.getElementById("particles").appendChild(canvas);

canvas.style.position = "fixed";
canvas.style.top = "0";
canvas.style.left = "0";
canvas.style.zIndex = "-1";

let particles = [];
let w, h;

function resize() {
    w = canvas.width = window.innerWidth;
    h = canvas.height = window.innerHeight;
}
window.addEventListener("resize", resize);
resize();

class Particle {
    constructor() {
        this.x = Math.random() * w;
        this.y = Math.random() * h;
        this.vx = (Math.random() - 0.5) * 0.6;
        this.vy = (Math.random() - 0.5) * 0.6;
        this.size = Math.random() * 2;
    }

    update() {
        this.x += this.vx;
        this.y += this.vy;

        if (this.x < 0 || this.x > w) this.vx *= -1;
        if (this.y < 0 || this.y > h) this.vy *= -1;
    }

    draw() {
        ctx.fillStyle = "rgba(255,255,255,0.6)";
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fill();
    }
}

function initParticles(count = 80) {
    particles = [];
    for (let i = 0; i < count; i++) {
        particles.push(new Particle());
    }
}
initParticles();

function animate() {
    ctx.clearRect(0, 0, w, h);

    for (let p of particles) {
        p.update();
        p.draw();
    }

    requestAnimationFrame(animate);
}
animate();


// -------------------------------
// 2. BUTTON CLICK EFFECT
// -------------------------------
document.querySelectorAll("button").forEach(btn => {
    btn.addEventListener("click", () => {
        btn.style.transform = "scale(0.95)";
        setTimeout(() => {
            btn.style.transform = "scale(1)";
        }, 120);
    });
});


// -------------------------------
// 3. SCROLL FADE-IN ANIMATION
// -------------------------------
const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = 1;
            entry.target.style.transform = "translateY(0)";
        }
    });
}, {
    threshold: 0.1
});

document.querySelectorAll(".card, .timeline-item").forEach(el => {
    el.style.opacity = 0;
    el.style.transform = "translateY(30px)";
    el.style.transition = "0.6s ease";
    observer.observe(el);
});
// ===============================
// TERMINAL TYPING EFFECT
// ===============================

// ===============================
// TERMINAL BOOT + TYPING EFFECT
// ===============================

const text = "ANONYMOUS NETWORK";
let i = 0;

function typeEffect() {
    const el = document.getElementById("typing");
    if (!el) return;

    if (i < text.length) {
        el.innerHTML += text.charAt(i);
        i++;
        setTimeout(typeEffect, 120);
    }
}

// delay so boot sequence appears first
setTimeout(typeEffect, 2500);
// ===============================
// INTERACTIVE TERMINAL SYSTEM
// ===============================

const input = document.getElementById("terminal-input");
const output = document.getElementById("terminal-output");

function print(text) {
    output.innerHTML += text + "\n";
    output.scrollTop = output.scrollHeight;
}

print("AN TERMINAL v1.0");
print("Type 'help' for commands.\n");

input.addEventListener("keydown", function (e) {
    if (e.key === "Enter") {
        const cmd = input.value.trim().toLowerCase();
        print("> " + cmd);

        handleCommand(cmd);

        input.value = "";
    }
});

function handleCommand(cmd) {

    switch (cmd) {

        case "help":
            print("Available commands:");
            print("- help");
            print("- status");
            print("- clear");
            print("- scan");
            print("- about\n");
            break;

        case "status":
            print("SYSTEM STATUS:");
            print("Website: ONLINE");
            print("AN Client: BUILDING");
            print("Network: SIMULATED NODE ACTIVE\n");
            break;

        case "clear":
            output.innerHTML = "";
            print("Terminal cleared.\n");
            break;

        case "scan":
            print("Scanning network...");
            setTimeout(() => {
                print("Nodes found: 3");
                print("Encryption: ACTIVE");
                print("Threat level: LOW\n");
            }, 1000);
            break;

        case "about":
            print("Anonymous Network Terminal");
            print("Experimental UI simulation system");
            print("Version 1.0\n");
            break;

        default:
            if (cmd !== "") {
                print("Command not found: " + cmd + "\n");
            }
    }
}
const boxes = document.querySelectorAll(".core-box");

setInterval(() => {
    boxes.forEach(box => {
        const rand = Math.random();

        if (rand > 0.7) {
            box.style.borderColor = "#00ff9d";
        } else if (rand > 0.4) {
            box.style.borderColor = "#ffd166";
        } else {
            box.style.borderColor = "#222";
        }
    });
}, 1500);