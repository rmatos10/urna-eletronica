# <img src="https://raw.githubusercontent.com/rmatos10/urna-eletronica/refs/heads/main/src/app/favicon.ico" width="18" height="18" alt="Urna eletrônica"> Urna eletrônica edição 2024 candidatos de Lages/SC
Projeto de aplicação web desenvolvido para treinamento de React + Next.js e Styled Components

## Conteúdo
* [Sobre a aplicação](#sobre-a-aplicação)
* [Tecnologias](#hammer_and_wrench-tecnologias)
* [Iniciando a Aplicação](#car-iniciando-a-aplicação)
* [Pré-visualização](#camera_flash-pré-visualização)
* [Contato](#email-contato)

## Sobre a aplicação

A Urna Eletrônica 2024 é um projeto de aplicação web desenvolvido para simular um sistema de votação dos candidatos de Lages/SC,
focado no treinamento de __React__, __Next.js__ e __Styled Components__ com __ThemeProvider__. O sistema permite iniciar a votação simulando uma urna,<br />
com dígitos para vereador e prefeito, a exibição de candidatos em etapas, fotos e informações detalhadas com legenda, além da possibilidade <br />
de votar nulo ou em branco. No sistema, também foi adicionado recursos de som ao pressionar uma opção além da confirmação na etapa final.
Existem componentes criados para reutilização, como o caso do botão, visando uma melhor manutenção no futuro e estilização do mesmo.
O projeto está com a lógica alocada , além de estruturado e organizado por models, pages, styles e assets, para melhor compreensão. 
A base de dados local inclui alguns candidatos da edição 2024 da cidade de Lages/SC, 
com intuito apenas de demonstrar aprendizado e recursos que essas ferramentas de programação permitem elaborar.<br />

__Atenção__: Esse projeto é de propósito educacional, e que não possa ser confundido com um sistema oficial de votação. Esclareço que o simulador não tem validade legal e que é apenas uma simulação.
O simulador não faz nenhuma coleta de dados pessoais. Imagens retiradas do [Portal de Dados Abertos do TSE](https://dadosabertos.tse.jus.br/dataset/candidatos-2024/resource/6be8401a-6c84-4ddc-ab98-5e981f0d20f4?inner_span=True)

## :hammer_and_wrench: Tecnologias
* Front-end
  * __React + Next.js__
  * __Styled Components__ para estilização.
  * __File loader__ para adicionar áudio de .mp3
<br />

## :car: Iniciando a aplicação
Baixe o repositório com git clone e entre na pasta do projeto.<br/>

```bash
$ git clone https://github.com/rmatos10/urna-eletronica
```
* Front-end
```bash
$ npm install
$ npm run dev
```

## :camera_flash: Pré-visualização

<img src="https://raw.githubusercontent.com/rmatos10/urna-eletronica/refs/heads/main/public/pre-visualizacao/tela-vereador.png?1" width="740px" alt="Urna eletrônica">
<img src="https://raw.githubusercontent.com/rmatos10/urna-eletronica/refs/heads/main/public/pre-visualizacao/tela-vereador-preenchido.png" width="740" alt="Urna eletrônica">
<img src="https://raw.githubusercontent.com/rmatos10/urna-eletronica/refs/heads/main/public/pre-visualizacao/tela-vereador-preenchido2.png" width="740" alt="Urna eletrônica">
<img src="https://raw.githubusercontent.com/rmatos10/urna-eletronica/refs/heads/main/public/pre-visualizacao/tela-voto-em-branco.png" width="740" alt="Urna eletrônica">
<img src="https://raw.githubusercontent.com/rmatos10/urna-eletronica/refs/heads/main/public/pre-visualizacao/tela-voto-nulo.png?1" width="740" alt="Urna eletrônica">
<img src="https://raw.githubusercontent.com/rmatos10/urna-eletronica/refs/heads/main/public/pre-visualizacao/tela-prefeito.png" width="740" alt="Urna eletrônica">
<img src="https://raw.githubusercontent.com/rmatos10/urna-eletronica/refs/heads/main/public/pre-visualizacao/tela-prefeito-preenchido.png" width="740" alt="Urna eletrônica">
<img src="https://raw.githubusercontent.com/rmatos10/urna-eletronica/refs/heads/main/public/pre-visualizacao/tela-prefeito-preenchido2.png" width="740" alt="Urna eletrônica">
<img src="https://raw.githubusercontent.com/rmatos10/urna-eletronica/refs/heads/main/public/pre-visualizacao/tela-fim.png" width="740" alt="Urna eletrônica">

## :email: Contato

E-mail: [**rafael.matosr@gmail.com**](mailto:rafael.matosr@gmail.com)
