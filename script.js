function openNote(el) {
  el.classList.toggle("open");
  showerPetals();
}

function showerPetals() {
  for (let i = 0; i < 20; i++) {
    const petal = document.createElement("div");
    petal.className = "petal";
    petal.innerText = "🌹";

    petal.style.left = Math.random() * 100 + "vw";
    petal.style.animationDuration = 2 + Math.random() * 3 + "s";
    petal.style.opacity = Math.random();

    document.body.appendChild(petal);

    setTimeout(() => {
      petal.remove();
    }, 5000);
  }
}
