const criarTarefa = (evento) => {
  evento.preventDefault();

  const lista = document.querySelector("[data-list]");
  const input = document.querySelector("[data-form-input]"); // coleta a informação do input
  const valor = input.value; // pega a informação e retorna oque foi passado

  const tarefa = document.createElement("li");
  tarefa.classList.add("task");
  const conteudo = `<p class="content">${valor}</p>`; // pegando oque foi passado no input

  tarefa.innerHTML = conteudo;

  tarefa.appendChild(BotaoConclui()); // criando o botao dentro da li
  lista.appendChild(tarefa);
  input.value = " "; // limpo o input
};

const novaTarefa = document.querySelector("[data-form-button]");

// criando um evento de click
novaTarefa.addEventListener("click", criarTarefa);
// criando um botao
const BotaoConclui = () => {
  const botaoConclui = document.createElement("button");

  botaoConclui.addEventListener("click", () => {
    console.log("fui clicado");
  });

  return botaoConclui;
};
