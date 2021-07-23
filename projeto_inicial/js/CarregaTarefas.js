import { ordenaDatas, removedataRepeitas } from "../service/data.js";
import { criaData } from "./CriarData.js";

export const carregaTarefa = () => {
  const lista = document.querySelector("[data-list]");

  const tarefasCadastradas = JSON.parse(localStorage.getItem("tarefas")) || [];

  lista.innerHTML = " ";
  const dataUnicas = removedataRepeitas(tarefasCadastradas)
  ordenaDatas(dataUnicas)

  dataUnicas.forEach((dia) => {
     lista.appendChild(criaData(dia));
  });
};
