Requisitos
Node.js instalado no sistema.
Banco de dados MySQL configurado (com tabelas e estrutura adequadas para carros).
Instalação
1-Clone este repositório em sua máquina local:https://github.com/Turma-Nassau/Nelson-Gomes11-Cadastro-de-Carros

2-Navegue até o diretório do projeto:cd cadastro-carros

3-Instale as dependências do projeto:npm install

4-Configure o banco de dados MySQL no arquivo server.js, fornecendo as informações de host, usuário, senha e nome do banco de dados.

Utilização

1-Inicie o servidor da API:npm  run json-server

2-Após abra outro terminal e inicie o React: npm start

3-A API estará disponível em http://localhost:3001

Endpoints
A API fornece os seguintes endpoints para interagir com os registros de carros:

GET /carros: Retorna todos os carros cadastrados.
POST /carros: Cria um novo carro com base nos dados fornecidos.
PUT /carros/:id: Atualiza os dados de um carro específico pelo ID.
