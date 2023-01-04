# CursoPwaAngular

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 14.2.5.

# Comandos de configuração executados durante o projeto do curso

instalando recurso PWA `ng add @angular/pwa`

para rodar o projeto é necessário fazer um `build`, pois não funciona em modo `ng serve`

comando para executar o build `ng build --prod`

acessamos a pasta DIST que recebeu nosso build e executamos o comando `npx serve`, assim ele executa o nosso projeto em um server local.

# API utilizada
'https://www.carqueryapi.com/api/0.3/?callback=%3F&cmd=getMakes'

# Criando Servidor para cadastro dos dados - nodejs
acessa pasta "node-seguros" executa comando `ǹpm init -y` para configurar um novo arquivo packet.json limpo
instala bibliotecas `npm i express`, `npm i body-parser`, `npm i core`
ou tudo no mesmo comando `npm i express body-parser core`.

# Biblioteca para salvar o banco de dados no storage do navegador
comando `npm install dexie`

#   PARA EXECUTAR O SERVIDOR LOCAL 
digite `node index.js` dentro da pasta do servidor criado "node-seguros"
o servidor vai rodar e informar o caminho da API
Servidor rodando em http://localhost:9000




## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.


