function showSection(id) {
      const sections = document.querySelectorAll('.section');
      sections.forEach(section => section.classList.remove('active'));
      document.getElementById(id).classList.add('active');
    }

    const dataInicio = new Date('2024-01-17T15:20:00');

    function atualizaContador() {
      const agora = new Date();
      const diferenca = agora - dataInicio;
      const dias = Math.floor(diferenca / (1000 * 60 * 60 * 24));
      const horas = Math.floor((diferenca / (1000 * 60 * 60)) % 24);
      const minutos = Math.floor((diferenca / (1000 * 60)) % 60);

      document.getElementById('contador').textContent =
        `Estamos juntos há ${dias} dias, ${horas} horas e ${minutos} minutos 💕`;
    }

    setInterval(atualizaContador, 1000);
    atualizaContador();

    // Efeito de corações
    function soltaCoracoes() {
      const numCoracoes = 20;

      for (let i = 0; i < numCoracoes; i++) {
        const heart = document.createElement('div');
        heart.classList.add('heart');
        heart.style.left = Math.random() * 100 + 'vw';
        heart.style.top = Math.random() * 100 + 'vh';
        document.body.appendChild(heart);

        setTimeout(() => {
          heart.remove();
        }, 4000);
      }
    }

    document.querySelectorAll('.botoes-amor button').forEach(botao => {
      botao.addEventListener('click', soltaCoracoes);
    });