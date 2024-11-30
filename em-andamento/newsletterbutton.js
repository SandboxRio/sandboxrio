// Seleciona o botão
const botao = document.getElementById("submitemail");

// Adiciona um evento de clique
botao.addEventListener("click", () => {
  // Adiciona a classe 'clicked' ao botão
  botao.classList.add("clicked");

  // Opcional: desativa o botão para impedir outros cliques
  botao.disabled = true;
});