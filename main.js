const botaoSom = document.querySelector("#botaoSom");
const trilha = document.querySelector("#trilha");
const statusSom = document.querySelector("#statusSom");

botaoSom.addEventListener("click", async () => {
  if (trilha.paused) {
    try {
      await trilha.play();
      botaoSom.textContent = "❚❚";
      botaoSom.setAttribute("aria-label", "Pausar música");
      botaoSom.setAttribute("aria-pressed", "true");
      statusSom.textContent = "Pausar trilha";
    } catch {
      statusSom.textContent = "Não foi possível tocar o áudio";
    }
  } else {
    trilha.pause();
    botaoSom.textContent = "▶";
    botaoSom.setAttribute("aria-label", "Tocar música");
    botaoSom.setAttribute("aria-pressed", "false");
    statusSom.textContent = "Tocar trilha";
  }
});
