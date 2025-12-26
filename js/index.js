  function createHeart() {
  const main = document.querySelector(".main-content");
  const heart = document.createElement("div");
  heart.className = "heart";
  heart.innerHTML = "💖";

  // posição horizontal aleatória dentro da main-content
  heart.style.left = Math.random() * 85  + "%";


  // tamanho aleatório
  heart.style.fontSize = (Math.random() * 24 + 16) + "px";

  // duração da animação
  const duration = Math.random() * 3 + 3;
  heart.style.animationDuration = duration + "s";

  main.appendChild(heart);

  // remover após a animação
  setTimeout(() => heart.remove(), duration * 1000);
}

// ativa os corações somente DEPOIS que a main-content aparecer
function startHearts() {
  setInterval(createHeart, 300);
}
  
  function showPage() {
  const clickme = document.querySelector('.clickme');
  const main = document.querySelector('.main-content');

  clickme.classList.add('hide');

  setTimeout(() => {
    clickme.style.display = "none";
    main.classList.add('show');

    // iniciar corações só depois que a main aparecer
    startHearts();

  }, 800);

document.querySelector("#music").play();
}


    function showSection(id) {
document.querySelector('#instruction').classList.remove('active');
      const sections = document.querySelectorAll('.section');
      sections.forEach(section => section.classList.remove('active'));
      document.getElementById(id).classList.add('active');
      window.scrollTo({ top: 500, behavior: 'smooth' });
    }

    const dataInicio = new Date('2024-01-17T15:20:00');

    function atualizaContador() {
      const agora = new Date();
      const diferenca = agora - dataInicio;
      const dias = Math.floor(diferenca / (1000 * 60 * 60 * 24));
      const horas = Math.floor((diferenca / (1000 * 60 * 60)) % 24);
      const minutos = Math.floor((diferenca / (1000 * 60)) % 60);

      document.getElementById('contador').textContent =
        `Juntos há ${dias} dias, ${horas} horas e ${minutos} minutos 💕`;
    }

    setInterval(atualizaContador, 1000);
    atualizaContador();









