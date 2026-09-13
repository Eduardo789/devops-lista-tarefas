# Lista de Tarefas - Projeto DevOps

Projeto simples desenvolvido para demonstrar práticas de DevOps com Git, GitHub Actions e Docker.

## Executar localmente

Abra o arquivo `index.html` no navegador.

## Executar com Docker

```bash
docker build -t lista-tarefas .
docker run -d --name lista-tarefas -p 8080:80 lista-tarefas
```

Depois acesse:

http://localhost:8080

Para verificar o container:

```bash
docker ps
```
