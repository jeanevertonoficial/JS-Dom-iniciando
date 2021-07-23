import { carregaTarefa } from "./CarregaTarefas.js";
import BotaoConclui from "./ConcluiTarefa.js";
import BotaoDeleta from "./DeletaTarefa.js";

export const handleNovoItem = (evento) => {
  evento.preventDefault();

  const tarefas = JSON.parse(localStorage.getItem("tarefas")) || [];
  const input = document.querySelector("[data-form-input]"); // coleta a informação do input
  const valor = input.value; // pega a informação e retorna oque foi passado

  const calendario = document.querySelector("[data-form-date]");
  const data = moment(calendario.value);
  const horario = data.format("HH:mm")
  const dataFormatada = data.format("DD/MM/YYYY");
  const concluida = false

  const dados = {
    valor,
    dataFormatada,
    horario,
    concluida
  };

  const tarefasAtualizadas = [...tarefas, dados];

  localStorage.setItem("tarefas", JSON.stringify(tarefasAtualizadas));

  input.value = " "; // limpo o input

  carregaTarefa();
};

export const Tarefa = ({ valor,horario, dataFormatada, concluida }, id) => {
  const tarefa = document.createElement("li");
  const conteudo = `<p class="content">${horario} * ${valor}</p>`; // pegando oque foi passado no input

  if (concluida) {
  tarefa.classList.add("done");
  } 

   tarefa.classList.add("task");

  tarefa.innerHTML = conteudo;

  tarefa.appendChild(BotaoConclui(carregaTarefa, id)); // criando o botao dentro da li
  tarefa.appendChild(BotaoDeleta(carregaTarefa, id));

  return tarefa;
};
