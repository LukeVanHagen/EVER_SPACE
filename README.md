Apresentação da Aplicação

1. Introdução

Este documento tem como objetivo apresentar a aplicação desenvolvida, explicando sua estrutura, funcionamento e execução. A aplicação consiste em um sistema estruturado que se conecta a um banco de dados e realiza operações CRUD básicas. O projeto foi containerizado utilizando Docker e orquestrado com Docker Compose para manter os serviços isolados e funcionais.

2. Estrutura do Projeto

O projeto é composto por três principais componentes:

Backend (Node.js + Express): Serviço responsável pela API que se comunica com o banco de dados e fornece os dados ao frontend.

Banco de Dados (MySQL): SGBD utilizado para armazenar os registros da aplicação.

Frontend (HTML + CSS + JavaScript + Nginx): Interface gráfica responsável pela interação do usuário com a aplicação.

Estrutura de Pastas:

meu-projeto/
├── backend/        # Código do servidor Node.js
├── frontend/       # Arquivos HTML, CSS e JS
├── docker-compose.yml  # Arquivo de orquestração
├── Dockerfile      # Configuração do container do backend
└── README.md       # Documentação do projeto

3. Como Executar a Aplicação

Passo 1: Clonar o repositório

git clone <URL-DO-REPOSITORIO>
cd meu-projeto

Passo 2: Construir e iniciar os containers

docker-compose up --build

Este comando irá:

Criar e iniciar o container do banco de dados MySQL.

Criar e iniciar o backend em Node.js na porta 8080.

Criar e iniciar o frontend no servidor Nginx na porta 80.

Passo 3: Testar a aplicação

Acessar o frontend:
📌 http://localhost/

Verificar o backend:
📌 http://localhost:8080

Testar a API (exemplo de endpoint):
📌 http://localhost:8080/api/usuarios

Passo 4: Encerrar os containers

docker-compose down

Este comando para e remove todos os containers da aplicação.

4. Configuração dos Containers

Backend (Node.js + Express)

Serviço responsável por lidar com requisições HTTP e acessar o banco de dados.

Arquivo Dockerfile define a instalação das dependências e a exposição da porta 8080.

Banco de Dados (MySQL)

Configurado no docker-compose.yml para ser acessado pelo backend via o nome do serviço (db).

Utiliza um volume para persistência de dados.

Frontend (Nginx)

Serviço configurado no docker-compose.yml.

Mapeia a pasta /usr/share/nginx/html para servir os arquivos HTML, CSS e JS.

5. Conclusão

Este projeto apresenta uma solução modular e containerizada, permitindo que backend, frontend e banco de dados operem de forma integrada. O uso do Docker e do Docker Compose facilita a implantação e execução do sistema em qualquer ambiente. Para eventuais melhorias, é possível expandir a API com novas funcionalidades e aprimorar o frontend com um design mais interativo.

Qualquer dúvida ou sugestão, estou à disposição!

