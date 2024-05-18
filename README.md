# Curso Front

### Aprender conceitos iniciais de Angular

**Para rodar:**

No git bash: (rodar o front)
-> ng serve

No cmd: (rodar o "banco")
-> npm run serve

---

## Curso feito pelo canal **Hora de Codar**

<p> Link: https://youtube.com/playlist?list=PLnDvRpP8Bnex2GQEN0768_AxZg_RaIGmw&si=tht4z4gleiPM6Tb4 </p>

---

<p>

**Back-end** <br />
Para projeto -> Api Rest fullBack com banco em AdonesJs (frameWork de Node) <br />
Para aprender -> Mockar dados locais com o Json <br />

**Front-end** <br />

<h2>Angular</h2>
-> Com base em Js  <br />
-> Principal triade Vue, Angular e React <br />
-> Para criar SPAs <br />
&emsp; Front separado do back <br />
&emsp; Back usa Api que comunica com Json <br />
&emsp; No front tem uma SPA  <br />
&emsp; Que renderiza o código via JS em HtmL para navegador <br />
-> Arquitetura em Componentes <br />
-> Utilizados em aplicações de grande porte <br />
&emsp; Alta demanda de acesso <br />
&emsp; Auth e Selai já inclusos <br />
&emsp; Pouco mais complexa <br />
&emsp; Abriu portas para os Frameworks <br />
-> Compõe a stack Mean <br />
&emsp; MongoDb (Mongo p/ Banco não relacional) <br />
&emsp; Express (js p/ API)  <br />
&emsp; Angular (Front SPA) <br />
&emsp; Node (A linguagem que embarca tudo) <br />

<h4> Pode ter angular com Spring e outras versões</h4>
<h4> Angular 2+ é uma versão diferente do AngularJS (Classico)</h4>

<h2>Porque Angular</h2>
-> Estrutura de organização bem definida, promove simplicidade e reaproveitamento de código <br />
&emsp; Gera um guia de como fazer as coisas <br />
-> Sistema de tooling muito rico <br />
&emsp; Vai ter: <br />
&emsp; CLI (comandos no terminal para executar e config mais simples) <br />
&emsp; Módulo de HTTP (Já tem o HTTP) <br />
&emsp; Router e outros (Nada externo, tem tudo no Angular) <br />
-> Integração com TS <br />
-> Mantido pelo Google  <br />
&emsp; Como react tem facebook <br />
&emsp; Não é abandonado ou para do nada <br />

<h2>Pré requisitos</h2>
-> HTML e CSS básico/intermediário <br />
-> Conhecimento de JS <br />
&emsp; Base da Linguage <br />
&emsp; ES6+ (Struct, Array...) <br />
-> Contato prévio com Node e npm <br />

<h3>O que precisa:</h3>
-> Node.js pra instalar angular, outros pacotes <br />
-> Editor de código (VS) <br />

<h2>Primeiros passos:</h2>
-> Instalar o angular-cli <br />
&emsp; npm install -g @angular/cli <br />
&emsp; -g é de forma global para ser acessivel em qualquer lugar da maquina <br />
&emsp; Digitar NG para ver comandos (no CMD) <br />
-> Criar projetos mais facilmente: <br />
&emsp; ng new nomeProjeto  <br />
&emsp; Starta um projeto completo de angular e inicia <br />
-> Para testar projeto <br />
&emsp; ng serve <br />
&emsp; Serve a aplicação numa porta <br />
&emsp; E replica o código das pastas <br />
&emsp; Testa e valida quando um usuário acessar <br />
&emsp; Inicia o projeto <br />
-> Podemos alterar os arquivos dentro da pasta APP  <br />
&emsp; Reflete as mudanças no navegador <br />
&emsp; ng server Já tem um Hot-Reload e as mudanças já aparecem <br />

<h2>Versões atuais</h2>
Em versões recentes (17+) algumas coisas não são criadas: <br />
-> Para criar projeto (antigo): <br />
&emsp; ng new nomeProjeto --no-standalone <br />
-> Para rodar o ng server: <br />
&emsp; ng generate config browserslist <br />
-> Para outras config: <br />
&emsp; ng generate config karma <br />
-> Para enviromments de prod, dev...: <br />
&emsp; ng g environments <br />

<h3>Links</h3>
No arquivo inicial alguns links são dados: <br />
 <br />
-> Docs: https://angular.dev/ <br />
-> Tutoriais: https://angular.dev/tutorials <br />
-> Cli docs: https://angular.dev/tools/cli <br />
-> Language Service: https://angular.dev/tools/language-service <br />
-> DevTools: https://angular.dev/tools/devtools/ <br />

<h2>Estrutura do angular</h2>
-> node_modules: Dependencias do projeto <br />
-> src: P/ programar a aplicação <br />
-> src/app: pasta principal para componentes, services... <br />
-> Componentes divididos em partes: <br />
&emsp; TS (lógica da prog - Controller p/ model) <br />
&emsp; HTML (Template/View - a tela mesmo) <br />
&emsp; CSS (Estilos do HTML - Para o componente) <br />
&emsp; Testes (Testa o componente) <br />

<h2>1- Criando componentes (first)</h2>
-> Da para usar o CLI como auxilio <br />
&emsp; Não obrigatório, mas ajuda muito <br />
&emsp; ng generate components/nomeComp <br />
-> Se der só o comando fica jogado <br />
&emsp; Ideal separar em pastar <br />
-> Todos os arquivos necessários serão criados no projeto <br />
-> Para importar um componente em outro: <br />
&emsp; Utilizar o selector dele no outro compo <br />

<h2>1- Interpolação de dados (first)</h2>
Tecnica de pegar uma variavel do componente e apresentar na tela (template, html...) <br />
O usuário pode verificar e o dado é dinamico <br />
-> Ensina a trabalhar melhor com componentes <br />
-> as variaveis são criadas no arquivo .ts, na classe <br />
-> São propriedade da classe <br />
-> Teremos acesso aos dado no arquivo .html (template) <br />
-> A impressão é feita com padrão: <br />
&emsp; {{dado}} <br />
&emsp; No react seria {dado} <br />

<h3>CSS</h3>
Os estilos podem ser feitos de duas formas: <br />
-> Global: <br />
&emsp; Utiliza o arquivo src/style.css <br />
&emsp; Fonte da aplicação <br />
&emsp; Padrões de form <br />
&emsp; Tirar margem de todos elementos <br />
&emsp; Não cria duplicação de código <br />
-> Scoped: <br />
&emsp; O estilo de cada componente <br />

<h2>2- Compartilhar dado entre componentes (share)</h2>
No react é o prox <br />
-> É possicel compartilhar dados entre o comp pai e filho <br />
-> Na chamada do comp disponibiliza o nome do dado <br />
&emsp; Com padrão [dado] <br />
-> No código .ts do filho utilizamos o decorator: <br />
&emsp; @Input <br />
&emsp; Ele entrega o dado para o template <br />

<h2>3- Diretivas (directives)</h2>
-> Pode realizar varias funções no sistema: <br />
&emsp; Aplicar estilos a um elemento <br />
-> Começam sempre com ng <br />
&emsp; Exemplo: ngAlgumaCoisa <br />

<h2>4- Rederização condicional (conditional)</h2>
-> Exibir um dado por meio do if <br />
-> Utilizando a diretiva [ngIf] <br />
-> As propriedades podem ser dinamixas, mas podemos usar comparações <br />
-> Dá para imprimir dado com base na validação falsa <br />
&emsp; else <br />

<h2>5- Eventos (events)</h2>
É um gatilho para processar algo <br />
Antes do back fazer algo, um evento, click, arraste é feito no front <br />
-> Pode-se ativar eventos em componentes <br />
&emsp; Para disparar algum método <br />
-> Um evento classico e muito usado é o Click <br />
-> A sintaxe padrão: <br />
&emsp; (click)="algumaFunção()" <br />
-> Os métodos ficam e são criados na classe <br />
-> Usado também para acessar a API <br />
-> Geralente entram em contato com o Banco de dados <br />
&emsp; Para enviar informação <br />
&emsp; Ou receber do back <br />

<h4>não é para processar dados nos templates, eles é só para dados já refinado, o IF não fica lá</h4>

<h2>6- Emitir eventos (emitter e events)</h2>
-> É possivel comunicar eventos de um filho para o pai <br />
&emsp; @Output <br />
&emsp; Quando é um envento precisa do @EventEmitter <br />
&emsp; Faz a saída do envento do filho <br />
-> Na tag de invocação do componente no template do pai: <br />
&emsp; Escolhemos um método para executar <br />
&emsp; Assim que o evento é emitido <br />
-> Exemplo: <br />
&emsp; (emit)="onEmit()" <br />
-> Parecido com as Props <br />

<h2>7- Renderização de lista (list)</h2>
-> Loop em listas <br />
-> Precisa-se de uma propriedade com os itens da lista <br />
&emsp; Um array <br />
-> No template do comp utiliza-se <br />
&emsp; *ngFor="let x of lista" <br />
-> rederiza templates baseadps em dados <br />

<h2>8- Importancia das interfaces (interfaces e list)</h2>
-> Os dados de uma tabela são anexados a uma interface <br />
&emsp; Os usuários <br />
&emsp; Tem interface com: email, nome, numero, role... <br />
&emsp; Faz com que os dados aceitos para aquele comp <br />
&emsp; Seja só o da interface <br />
-> Toda entidade precisa de uma interface <br />
&emsp; Torna o código mais simples <br />
&emsp; Padroniza e facilita a manutenção <br />
-> Vamos implementar uma interface na lista  <br />
-> Fazer um evento para usar o recurso <br />
-> Geralmente não são muitas  <br />
&emsp; Então ficam em src/app <br />

<h2>9- Pipes (pipes)</h2>
-> São recursos para trabalhar com string nos templates <br />
-> Pode realizar várias funções <br />
&emsp; Deixar o texto em caixa  <br />
&emsp; Datas... <br />
-> Sintaxe: <br />
&emsp; "{{dado | algumPipeOperator}}" <br />
-> Poupa as regras de CSS e manipulação de string com JS <br />

<h2>10- To way data binding (biding)</h2>
-> Recurso para trabakho com formulários <br />
-> Alterar props e template com o preenchimento de inputs <br />
&emsp; Não precisa de eventos ou extras <br />
&emsp; Da pra puxar o dado e usar no template <br />
-> Precida inportar o FormsModule no comp principal <br />
-> Declarar o ngModel no input <br />
&emsp; Preencher o atributo name, todos com mesmo valor <br />

<h2>11- Services (services e list)</h2>
-> Uma parte da arquitetura do angular <br />
-> Onde ficam as requisições API do projeto <br />
-> Cria-se com comando: <br />
&emsp; ng generate service nomeService <br />
-> É importado no componente e usado no contrutor <br />
-> É possivel usar os métodos dele <br />
-> Vai ser feita a ação de excluir animais da [] na interface <br />

<h2>12- Angular router (routing e app_template)</h2>
-> app-routing.modules.ts em src/app <br />
-> Um novo arquivo para declarar as rotas <br />
&emsp; Quando cria tem a opção de colocar por defaul <br />
-> Precisa importar <br />
&emsp; RouterModules <br />
&emsp; Routes <br />
-> Tem um arquivo só pra defini-los <br />
-> Depois de definir importar no app.modules <br />
-> No template principal cria-se as rotas <br />
-> Substituimos os componentes <br />
&emsp; Como o switch do react <br />
&emsp; Não tem tudo declarado na Home <br />
&emsp; Troca aquele componente por pagina <br />
&emsp; 'router-outlet'  <br />

<h2>13- Requisições HTTP (list-db e service)</h2>
-> Precisa de dois pacotes: <br />
&emsp; HttpClient - Config Requisições <br />
&emsp; HttpHeaders - Config Cabeçalho <br />
-> Da pra usar uma API local  <br />
&emsp; Simulando requests <br />
&emsp; Com o json-server <br />
-> Precisa usar em app.modules <br />
&emsp; HttpClientModule <br />
&emsp; Além de config no service <br />
&emsp; Precisa dizer pro angular que o proj tá apto <br />
&emsp; Para receber requisições HTTP <br />

<h4>O npm i json-serve</h4>
-> Se for uma aplicação real  <br />
&emsp; Especificar que é para ambiente dev <br />
&emsp; Não sei como fazer  <br />
-> Precisa de um arquivo db.json <br />
&emsp; Para ser o banco de dados <br />
-> Para rodar o banco mokado do json <br />
&emsp; No package.json <br />
&emsp; "server": "json-server --watch db.json" <br />
-> Precisa tá rodando "a api" e o front <br />
&emsp; ng server <br />
&emsp; npm run server - roda o banco "api" <br />

<h2>14- Rotas dinamicas (detail)</h2>
&emsp;-> Carregando dado individual <br />
-> Para resgatar um dado do banco <br />
&emsp; Precisa criar uma rota dinamica <br />
-> Baseado no id do item <br />
&emsp; Temos a seleção do dado no banco <br />
&emsp; Vem pela URL <br />
-> Para resgatar parametros da URL <br />
&emsp; Usa o módulo do angular <br />
&emsp; ActivedRouter <br />
-> A lógica para requisição HTTP <br />
&emsp; Fica só no service <br />

<h2>15- Removendo registro (list-db)</h2>
-> Remover dados usando o HTP <br />
-> Precisa de novo método <br />
&emsp; Sempre no Service <br />
-> Ajustar o metodo da classe do componente <br />
<br />
** Com poucas mudanças fazemos contato com a API <br />
</p>

<!-- ------------------Anotações do proprio projeto------------------ -->

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 17.3.7.

### Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

### Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

### Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

### Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

### Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

### Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.
