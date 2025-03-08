function atualizarContador() {
  const dataInicial = new Date(Date.UTC(2024, 11, 12, 0, 0, 0)); // Mês em JS começa do 0 (Janeiro = 0, Dezembro = 11)
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
  document.getElementById("minutos").textContent = String(minutos).padStart(
    2,
    "0"
  );
  document.getElementById("segundos").textContent = String(segundos).padStart(
    2,
    "0"
  );
}

// Garante que o script só inicie quando o DOM estiver carregado
document.addEventListener("DOMContentLoaded", function () {
  setInterval(atualizarContador, 1000);
  atualizarContador();
});

document.addEventListener("DOMContentLoaded", function () {
  function criarCoracao() {
    const coracao = document.createElement("div");
    coracao.classList.add("coracao");
    coracao.innerHTML = "💙"; // Agora é um coração azul 💙

    // Define posição aleatória na largura da tela
    coracao.style.left = `${Math.random() * 100}vw`; 
    coracao.style.top = "0px"; // Inicia no topo
    coracao.style.position = "fixed"; // Garante que ele fica fixo
    coracao.style.animationDuration = `${Math.random() * 3 + 2}s`; // Duração aleatória

    document.body.appendChild(coracao);

    // Remove após a animação
    setTimeout(() => {
      coracao.remove();
    }, 5000);
  }

  // Criar corações continuamente
  setInterval(criarCoracao, 300);
});

