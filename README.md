# Challenge
## 📘 Pequena aplicação de cadastro de atividades.

### Pré-requisitos

Antes de começar, você vai precisar ter instalado em sua máquina as seguintes ferramentas:
[Git](https://git-scm.com), [Node.js](https://nodejs.org/en/) e o [Docker](https://docs.docker.com/engine/install/ubuntu/).


### 🎲 Rodando o back end

```bash
# Clone este repositório
$ git clone <https://github.com/savio04/Challenge_job.git>

# Acesse a pasta do back end no terminal
$ cd Challenge_job/backend

# Instale as dependências
$ npm install

# Execute um container com o banco MongoDB
$ sudo docker run --name mongodb -p 27017:27017 -d -t mongo
ou
$ docker run --name mongodb -p 27017:27017 -d -t mongo

# Execute a aplicação
$ npm run dev
```
### 🎲 Rodando o frontend

```bash
# Acesse a pasta do frontend no terminal
$ cd Challenge_job/frontend

# Instale as dependências
$ npm install

# Execute a aplicação
$ npm run dev

# A aplicação inciará na porta:3000 - acesse <http://localhost:3000>
```

### Testando a aplicação
#### Caso queira testar a aplicação sem clonar este repositório basta acessar este link: https://frontend-savio04.vercel.app/

### Requisitos cumpridos

- [X] Rodar na web
- [X] Utilizar Typescript
- [X] Possibilidade de criar registro de atividade com nome e descrição
- [X] Possibilidade de alterar o status da atividade
- [X] Listar atividades mostrando nome, data de criação, descrição e status
- [X] Ordenar as atividades por data de criação
- [X] Filtrar as atividades por status: ["CONCLUIDA", "PENDENTE", "CANCELADA"]
- [X] Subir no github, ou bitbucket e afins...

### Extras
- [ ] design
- [X] responsividade
- [X] deploy
- [ ] autenticação
- [X] API própria