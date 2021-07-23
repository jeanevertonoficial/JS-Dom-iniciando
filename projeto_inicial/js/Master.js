import { handleNovoItem } from "./CriarTarefa.js";
import { carregaTarefa } from "./CarregaTarefas.js";
const novaTarefa = document.querySelector("[data-form-button]");
// criando um evento de click
novaTarefa.addEventListener("click", handleNovoItem);

carregaTarefa();
