import BotaoConclui from "./ConcluiTarefa.js";
import BotaoDeleta from "./DeletaTarefa.js";

const handleNovoItem = (evento) => {
  evento.preventDefault();

  const lista = document.querySelector("[data-list]");
  const input = document.querySelector("[data-form-input]"); // coleta a informação do input
  const valor = input.value; // pega a informação e retorna oque foi passado

  const calendario = document.querySelector("[data-form-date]");
  const data = moment(calendario.value);

  const dataFormatada = data.format("DD/MM/YYYY");

  const dados = {
    valor,
    dataFormatada,
  };

 const criaTarefa = criarTarefa(dados)

  lista.appendChild(criaTarefa);
  input.value = " "; // limpo o input
};

const criarTarefa = ({ valor, dataFormatada }) => {
  const tarefa = document.createElement("li");
  tarefa.classList.add("task");
  const conteudo = `<p class="content">${dataFormatada} * ${valor}</p>`; // pegando oque foi passado no input

  tarefa.innerHTML = conteudo;

  tarefa.appendChild(BotaoConclui()); // criando o botao dentro da li
  tarefa.appendChild(BotaoDeleta());

  return tarefa;
};

const novaTarefa = document.querySelector("[data-form-button]");
// criando um evento de click
novaTarefa.addEventListener("click", handleNovoItem);
