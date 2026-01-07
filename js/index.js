/* =========================
   ESTADO INICIAL (PASSWORD)
========================= */

if (localStorage.getItem("passwordCorrect") === "true") {
  document.querySelector(".password").style.display = "none";
} else {
  localStorage.setItem("passwordCorrect", "false");
}

// everytime that i refresh the page the passwordCorrect key is set to false
// this makes the password prompt appear again even if the user has already entered the correct password
// To fix this, we need to check if the passwordCorrect key is already set to true before setting it to false on page load


/* =========================
   VARIÁVEIS GLOBAIS
========================= */

let musicID = 0;
const players = document.querySelectorAll(".spotify-player");
const dataInicio = new Date("2024-01-17T15:20:00");


/* =========================
   CORAÇÕES CAINDO
========================= */

function createHeart() {
  const main = document.querySelector(".main-content");
  const heart = document.createElement("div");

  heart.className = "heart";
  heart.innerHTML = "💖";

  heart.style.left = Math.random() * 85 + "%";
  heart.style.fontSize = Math.random() * 24 + 16 + "px";

  const duration = Math.random() * 3 + 3;
  heart.style.animationDuration = duration + "s";

  main.appendChild(heart);
  setTimeout(() => heart.remove(), duration * 1000);
}

function startHearts() {
  setInterval(createHeart, 600);
}


/* =========================
   MOSTRAR PÁGINA
========================= */

function showPage() {
  const clickme = document.querySelector(".clickme");
  const main = document.querySelector(".main-content");

  clickme.classList.add("hide");

  setTimeout(() => {
    clickme.style.display = "none";
    main.classList.add("show");

    // iniciar corações
    startHearts();

    // tocar automaticamente "I Wanna Be Yours"
    musicID = 0;
    playCurrentMusic();
  }, 800);
}


/* =========================
   SEÇÕES
========================= */

function showSection(id) {
  document.querySelectorAll(".section").forEach(section =>
    section.classList.remove("active")
  );

  document.getElementById(id).classList.add("active");
  window.scrollTo({ top: 500, behavior: "smooth" });
}


/* =========================
   CONTADOR
========================= */

function atualizaContador() {
  const agora = new Date();
  const diferenca = agora - dataInicio;

  const dias = Math.floor(diferenca / (1000 * 60 * 60 * 24));
  const horas = Math.floor((diferenca / (1000 * 60 * 60)) % 24);
  const minutos = Math.floor((diferenca / (1000 * 60)) % 60);

  document.getElementById("contador").textContent =
    `Juntos há ${dias} dias, ${horas} horas e ${minutos} minutos 💕`;
}

setInterval(atualizaContador, 1000);
atualizaContador();


/* =========================
   PLAYER DE MÚSICA
========================= */

/* Função central */
function playCurrentMusic() {
  players.forEach(player => {
    const audio = player.querySelector("audio");
    const btn = player.querySelector(".play-btn");
    const progress = player.querySelector(".progress");

    audio.pause();
    audio.currentTime = 0;
    btn.textContent = "▶";
    progress.style.width = "0%";
    player.classList.remove("active");
  });

  const current = players[musicID];
  const audio = current.querySelector("audio");
  const btn = current.querySelector(".play-btn");

  current.classList.add("active");
  audio.play();
  btn.textContent = "⏸";
}

/* Próxima / Anterior */
function nextMusic() {
  if (musicID < players.length - 1) {
    musicID++;
    playCurrentMusic();
  }
}

function previousMusic() {
  if (musicID > 0) {
    musicID--;
    playCurrentMusic();
  }
}


/* =========================
   EVENTOS DO PLAYER
========================= */

document.getElementById("next").addEventListener("click", nextMusic);
document.getElementById("previous").addEventListener("click", previousMusic);

document.querySelectorAll(".custom-audio-player").forEach((player, index) => {
  const audio = player.querySelector("audio");
  const playBtn = player.querySelector(".play-btn");
  const progressContainer = player.querySelector(".progress-container");
  const progress = player.querySelector(".progress");

  playBtn.addEventListener("click", () => {
    if (musicID !== index) {
      musicID = index;
      playCurrentMusic();
      return;
    }

    if (audio.paused) {
      audio.play();
      playBtn.textContent = "⏸";
    } else {
      audio.pause();
      playBtn.textContent = "▶";
    }
  });

  audio.addEventListener("timeupdate", () => {
    const percent = (audio.currentTime / audio.duration) * 100;
    progress.style.width = percent + "%";
  });

  progressContainer.addEventListener("click", e => {
    const width = progressContainer.clientWidth;
    const clickX = e.offsetX;
    audio.currentTime = (clickX / width) * audio.duration;
  });

  audio.addEventListener("ended", () => {
    playBtn.textContent = "▶";
    progress.style.width = "0%";
  });
});


/* =========================
   PASSWORD
========================= */

function checkPassword() {
  const input = document.getElementById("password-input");
  const password = input.value;
  const div = document.querySelector(".password");

  if (password === "kezieirryson") {
    div.style.display = "none";
    localStorage.setItem("passwordCorrect", "true");
  } else {
    document.getElementById("errorMessage").style.display = "block";
  }
}
