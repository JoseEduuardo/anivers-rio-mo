// Atualiza o contador de tempo
function atualizarContador() {
  const dataInicial = new Date(Date.UTC(2024, 11, 12, 0, 0, 0)); // Dezembro = 11 em JS
  const agora = new Date();

  let diferenca = agora - dataInicial;

  let anos = Math.floor(diferenca / (1000 * 60 * 60 * 24 * 365));
  let meses = Math.floor(
    (diferenca % (1000 * 60 * 60 * 24 * 365)) / (1000 * 60 * 60 * 24 * 30)
  );
  let dias = Math.floor(
    (diferenca % (1000 * 60 * 60 * 24 * 30)) / (1000 * 60 * 60 * 24)
  );
  let horas = Math.floor(
    (diferenca % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
  );
  let minutos = Math.floor((diferenca % (1000 * 60 * 60)) / (1000 * 60));
  let segundos = Math.floor((diferenca % (1000 * 60)) / 1000);

  document.getElementById("anos").textContent = String(anos).padStart(2, "0");
  document.getElementById("meses").textContent = String(meses).padStart(2, "0");
  document.getElementById("dias").textContent = String(dias).padStart(2, "0");
  document.getElementById("horas").textContent = String(horas).padStart(2, "0");
  document.getElementById("minutos").textContent = String(minutos).padStart(2, "0");
  document.getElementById("segundos").textContent = String(segundos).padStart(2, "0");
}

// Garante que o script só inicie quando o DOM estiver carregado
document.addEventListener("DOMContentLoaded", function () {
  atualizarContador();
  setInterval(atualizarContador, 1000);
});

// Criar corações animados
document.addEventListener("DOMContentLoaded", function () {
  function criarCoracao() {
    const coracao = document.createElement("div");
    coracao.classList.add("coracao");
    coracao.innerHTML = "💙"; // Coração azul

    // Define posição aleatória na largura da tela
    coracao.style.left = `${Math.random() * 100}vw`; 
    coracao.style.position = "fixed";
    coracao.style.top = "-10px"; // Começa um pouco acima
    coracao.style.fontSize = `${Math.random() * 20 + 20}px`; // Tamanhos variados
    coracao.style.opacity = Math.random() * 0.5 + 0.5; // Opacidade entre 0.5 e 1

    // Aplica animação com duração aleatória entre 3s e 5s
    const duracao = Math.random() * 3 + 2;
    coracao.style.animation = `descer ${duracao}s linear`;

    document.body.appendChild(coracao);

    // Remove o coração após a animação
    setTimeout(() => {
      coracao.remove();
    }, duracao * 1000);
  }

  // Criar corações continuamente
  setInterval(criarCoracao, 500);
});
