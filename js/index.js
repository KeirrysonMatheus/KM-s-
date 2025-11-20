  function showPage() {
  const clickme = document.querySelector('.clickme');
  const main = document.querySelector('.main-content');

  // Começa a animação de desaparecer
  clickme.classList.add('hide');

  // Espera a animação terminar para mostrar o conteúdo
  setTimeout(() => {
    clickme.style.display = "none";
    main.classList.add('show');
  }, 800); // tempo igual ao do transition
}

    function showSection(id) {
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









