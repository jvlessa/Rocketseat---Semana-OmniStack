# Rocketseat---Semana-OmniStack

## Empresas que utilizam as tecnologias desse repositório:
Instagram, Uber, Netflix, AirBnB, Facebook;

## Stacks:
Node, React, React Native;

## Grande sacada:
Focar em uma Stack e estudar ela até o fim;

## Por que essas tecnologias fazem sentido juntas?

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

### Configurando ambiente de desenvolvimento:

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

