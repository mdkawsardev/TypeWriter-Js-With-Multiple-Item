const titles = [
  "Web Developer & Freelancer",
  "Python Enthusiast & Ethical Hacker",
  "UI/UX Explorer with a Creative Edge"
];

const typingSpeed = 100;
const erasingSpeed = 50;
const delayBetween = 500;

let titleIndex = 0;
let charIndex = 0;
let isDeleting = false;

function typeLoop() {
  const target = document.getElementById("typewriter-text");
  const currentTitle = titles[titleIndex];

  if (!isDeleting && charIndex <= currentTitle.length) {
    target.textContent = currentTitle.substring(0, charIndex);
    charIndex++;
    setTimeout(typeLoop, typingSpeed);
  } else if (isDeleting && charIndex >= 0) {
    target.textContent = currentTitle.substring(0, charIndex);
    charIndex--;
    setTimeout(typeLoop, erasingSpeed);
  } else {
    isDeleting = !isDeleting;
    if (!isDeleting) {
      titleIndex = (titleIndex + 1) % titles.length;
    }
    setTimeout(typeLoop, delayBetween);
  }
}

window.onload = typeLoop;