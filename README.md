🛠 Tecnologias
Node.js
Typescript
Express
JSONWebToken

👩🏿‍💻 Projecto
Valoriza é uma plataforma para promover o reconhecimento entre companheiros de equipe.

🚀Como executar
Clone o repositório
Rode yarn para baixar as dependências
Rode yarn typeorm migration:run para criar as tabelas do banco de dados.
Rode o yarn dev para iniciar a aplicação.
Por fim, a aplicação estará disponível em http://localhost:3000

📕 Licença
Esse projeto está sob a licença MIT. Veja o arquivo LICENSE para mais detalhes
# nlw-06-valoriza

# Regras

- Cadastro de usuário

  [ x ] Não é permitido cadastrar mais de um usuário com o mesmo e-mail

  [ x ] Não é permitido cadastrar usuário sem e-mail

- Cadastro de TAG

  [ x ] Não é permitido cadastrar mais de uma tag com o mesmo nome

  [ x ] Não é permitido cadastrar tag sem nome

  [ x ] Não é permitido o cadastro por usuários que não sejam administradores

- Cadastro de elogios

  [ x ] Não é permitido um usuário cadastrar um elogio para si

  [ x ] Não é permitido cadastrar elogios para usuários inválidos

  [ x ] O usuário precisa estar autenticado na aplicação
