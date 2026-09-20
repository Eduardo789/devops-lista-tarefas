function normalizarTarefa(texto) {
  return texto.trim();
}

function tarefaValida(texto) {
  return normalizarTarefa(texto).length > 0;
}

function criarDadosTarefa(texto) {
  const tarefa = normalizarTarefa(texto);

  return {
    texto: tarefa,
    botao: "Concluir"
  };
}

if (typeof module !== "undefined") {
  module.exports = {
    normalizarTarefa,
    tarefaValida,
    criarDadosTarefa
  };
}