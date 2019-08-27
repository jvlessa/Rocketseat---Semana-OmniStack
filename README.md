# Rocketseat---Semana-OmniStack

## Empresas que utilizam as tecnologias desse repositório:
Instagram, Uber, Netflix, AirBnB, Facebook;

## Stacks:
Node, React, React Native;

## Grande sacada:
Focar em uma Stack e estudar ela até o fim;

## Por que essas tecnologias fazem sentido juntas?
- Hoje é possível dominar front, back, aplicações nativas via JavaScript;

### Mobile:
Tecnologias Híbridas não são tão boas, e o desenvolvimento nativo é muito robusto;
Reactive Native desenvolve apps nativos usando JavaScript, trazendo produtividade, sem abrir mão da performance;

### Node:
Utilizar JavaScript no backend;

### Stack escolhida:
- Qualidade muito boa;
- Componetização e reuso;

### Aplicação que irá ser desenvolvida:
- Tindev (rede social que irá encontrar desenvolvedores com características parecidas);

# Configurando ambiente de desenvolvimento (BACKEND):

- Instalar gerenciador de pacotes [Chocolatey para Windows](https://chocolatey.org/install);
`@"%SystemRoot%\System32\WindowsPowerShell\v1.0\powershell.exe" -NoProfile -InputFormat None -ExecutionPolicy Bypass -Command "iex ((New-Object System.Net.WebClient).DownloadString('https://chocolatey.org/install.ps1'))" && SET "PATH=%PATH%;%ALLUSERSPROFILE%\chocolatey\bin"`

- <b>Instalar NodeJS</b> (para backend - Node também é utilizado pelo React para gerenciamento de dependências, rodar alguns script dentro da nossa máquina sem precisar de um browser):
- Versão para instalar o [Node LTS - Long Term Support / Recomendada](https://nodejs.org/dist/v10.16.2/node-v10.16.2-x64.msi)
- Instalar Node via Chocolatey: 
`cinst nodejs.install --version 10.16.1`
`refreshenv`
`node -v`
`npm -v`

- Instalar o Yarn (NPM melhorado, criado pelo Facebook - Gerenciador de pacotes bem mais rápido que o NPM);
`choco install yarn`
`yarn -v`

- Instalar Editor de Texto [VS Code](https://code.visualstudio.com/download);

## Desenvolvendo Backend
- Node não é uma linguagem, o Node é uma plataforma que foi construída em cima da linguagem JavaScript;
- Foi lançado via Google Chrome. Quando o Google Chrome foi lançado um motor v8 (engine) - que é capaz de ler código JavaScript e converter em um resultado;
- Node pegou o v8, tirou de dentro do Chrome, fez funcionar fora StandAlone e fez um script para rodar fora do browser;

### Construindo API Rest
- Criando package.json
`mkdir backend`
`yarn init -y` - Cria o package.json

- package.json é responsável por todas as dependências do projeto;

- Adicionando Express (Microframework para ajudar a manipularmos rotas e respostas para o servidor) dentro do package.json
`yarn add express`

- Surgiram alguns arquivos após a instalação do Express;
"yarn.lock" - cache (não deletar);

- Para rodar o servidor:
`node src/server.js`

- Acessar URL:
http://localhost:3333/?name=Joao

- Salvamento e atualização automática:
`yarn add nodemon -D`

- Adicionado a tag "dev" dentro de scripts do package.json;

- Para rodar agora, basta digitar:
`yarn dev`;

### Instalando Banco
- Vamos usar banco não-relacional;
- Vamos usar MongoDB;
- Temos limitações em questão de relacionamentos (se tivermos relacionamentos muito complexos, melhor utilizarmos SQL);
- Aconselhável a usar o banco relacional;

- Vamos usar o banco pois é um projeto bem pequeno;
- MongoDB disponibiliza uma interface / banco gratuito na internet "MongoDB Atlas": https://www.mongodb.com/download-center

- Criar conta e banco (qualquer dúvida, visualizar vídeo da segunda aula);
- Copiar URL de acesso ao banco (com usuario e senha criados);
- Meu cluster:
https://cloud.mongodb.com/v2/5d4b7bbd9ccf645782915694#clusters

- Dentro do Node, instalar o Mongoose (ODM - Ferramenta que vai facilitar o trabalho com o banco de dados, utilizando apenas JavaScript):
`yarn add mongoose`

### Visualizar Base de Dados (MongoDB)
- MongoDB Compass: https://www.mongodb.com/products/compass
- Baixar e conectar com cluester (ver vídeo aula 2);

### Adicionar CORS
`yarn add cors`

# Configurando ambiente de desenvolvimento (FRONTEND - WEB):
- Primeiro, é necessário entrar dentro do diretório do backend e rodar o projeto: `yarn dev`;
- Agora, para criarmos o projeto frontend: `yarn create react-app frontend` OU `npx create react-app frontend`;
- Acesse a pasta "frontend" e digite: `yarn start`;
- Todo o código ficará dentro da pasta "src";
- A coisa mais importante do "index.html" é a div "root";

## Como o React embutiu o código dentro da div "root"?
- Dentro do arquivo "src/index.js" é possível observar que o React referenciou a div "root";
- App.js é um componente;
- React recomendo utilizar atributo "className" ao invés de "class" nos componentes do DOM;

## Biblioteca para rotas do React
- `yarn add react-router-dom`;

- Adicionando Axios dentro do projeto do frontend: `yarn add axios`;

- Acessar frontend: "http://localhost:3000/"

# Criando Aplicativo

- Primeira coisa que precisamos fazer, é subir o backend;

- `yarn dev` no diretório do Backend;

- Criando projeto ReactNative: `npx react-native init tindev`;

- Instalar um Emulador do Android: 
- Instalar um Emulador no IOS (apenas MAC):

## Instalando máquina virtual do Mac:
https://canaltech.com.br/macos/instale-o-os-x-mountain-lion-no-seu-computador-com-windows-usando-o-virtualbox/


