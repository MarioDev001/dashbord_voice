

# Dashbord Energy

Esse projeto é um Dashbord que extrai os dados de 6 faturas em pdf utilizando o pdfparse, salva os dados em um banco Postgresql com o Prisma e diponibiliza os dados em uma api desenvolvida em Node. 
O frontend foi densenvildo em Next.js - Tailwind e chart.js.

![Exemplo de Imagem](https://mariodev.tech/files/dashbord2.png)

![Exemplo de Imagem](https://mariodev.tech/files/dashbord1.png)

![Exemplo de Imagem](https://mariodev.tech/files/dashbordv1.gif)

## Funcionalidades

- Backend
    - Pdfparse
    - Express
    - Prisma
    - Typescript
- Frontend
    - Next.js
    - Tailwind
    - Chart.js
    - Typescript
- Docker
    - Postgresql

## Documentação

#### Para iniciar o projeto e executar os scripts das pastas backend e frontend, utilize o seguinte comando:
    - npm i

#### Depois de instalar as dependências carregue os scripts dos arquivos backend e frontend com o seguinte código
    - npm run start:both

Certifique-se de que o Docker esteja instalado e em execução antes de iniciar o projeto, pois ele é necessário para subir o banco de dados.

## Obsevação
Caso não deseje utilizar o Docker para configurar o banco de dados, você pode realizar a configuração manualmente. Acesse o arquivo .env na pasta backend e siga as instruções para configurar o seu banco de dados.

### Após iniciar o projeto, as seguintes rotas estarão disponíveis: 
    - localhost:3000 - frontend
    - localhost:3333 - Backend
    - localhost:5555 - Prisma Studio
    - localhost:5432 - Postgresql

#### Verifique se essas rotas estão disponíveis antes de iniciar o projeto.

