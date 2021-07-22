const novaTarefa = document.querySelector("[data-form-button]");



// criando um evento de click
novaTarefa.addEventListener("click", () => { // ao clicar 
  const input = document.querySelector("[data-form-input]"); // coleta a informação do input
  const valor = input.value // pega a informação e retorna oque foi passado
  console.log(valor); // mostra o que foi passado
});
