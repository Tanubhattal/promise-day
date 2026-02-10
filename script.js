const notes = [
  "I promise to always choose you 💖",
  "I promise to listen, even when I don’t understand",
  "I promise to fight for us, not against us",
  "I promise to make you laugh on sad days",
  "I promise to hold your hand forever",
  "I promise to respect your dreams",
  "I promise to stand by you",
  "I promise to be your safe place",
  "I promise to grow with you",
  "I promise to stay honest",
  "I promise to protect your heart",
  "I promise to annoy you lovingly 😄",
  "I promise to celebrate your wins",
  "I promise to support your lows",
  "I promise to never give up",
  "I promise to love you endlessly",
  "I promise — it will always be you ❤️"
];

function openNote(n) {
  document.getElementById("noteText").innerText = notes[n - 1];
  document.getElementById("noteBox").classList.remove("hidden");
  showerPetals();
}

function closeNote() {
  document.getElementById("noteBox").classList.add("hidden");
}

function showerPetals() {
  for (let i = 0; i < 20; i++) {
    let petal = document.createElement("div");
    petal.innerText = "🌹";
    petal.style.position = "fixed";
    petal.style.left = Math.random() * 100 + "vw";
    petal.style.top = "-10px";
    petal.style.fontSize = "20px";
    petal.style.animation = "fall 3s linear";
    document.body.appendChild(petal);

    setTimeout(() => petal.remove(), 3000);
  }
}



