const BotaoConclui = () => {
  const botaoConclui = document.createElement("button");

  botaoConclui.classList.add("check-button");
  botaoConclui.innerText = "concluir";
  botaoConclui.addEventListener("click", concluirTarefa);

  return botaoConclui;
};

// criando o efeito de risco ao clicar no botão
const concluirTarefa = (evento) => {
  const botaoConclui = evento.target;

  const tarefaCompleta = botaoConclui.parentElement;

  tarefaCompleta.classList.toggle("done"); // cria o efeito de risco
};

export default BotaoConclui;
