const {
  normalizarTarefa,
  tarefaValida,
  criarDadosTarefa
} = require("./taskUtils");

test("remove espaços do início e do fim da tarefa", () => {
  expect(normalizarTarefa("  Estudar Docker  ")).toBe("Estudar Docker");
});

test("aceita uma tarefa com texto", () => {
  expect(tarefaValida("Estudar testes")).toBe(true);
});

test("recusa uma tarefa vazia", () => {
  expect(tarefaValida("   ")).toBe(false);
});

test("cria os dados da tarefa corretamente", () => {
  expect(criarDadosTarefa(" Fazer atividade ")).toEqual({
    texto: "Fazer atividade",
    botao: "Concluir"
  });
});

test("mantém o texto da tarefa após a normalização", () => {
  const tarefa = criarDadosTarefa("  Testar aplicação  ");

  expect(tarefa.texto).toBe("Testar aplicação");
});