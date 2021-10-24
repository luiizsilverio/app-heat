<table>
  <tr>
    <td><img src="https://github.com/luiizsilverio/app-heat/blob/main/assets/icon.png" /></td>
  </tr>
</table>

## Conteúdo
* [Sobre o Projeto](#sobre-o-projeto)
* [Tecnologias](#hammer_and_wrench-tecnologias)
* [Screenshots](#camera_flash-screenshots)
* [Iniciando o Projeto](#car-Iniciando-o-projeto)
* [Licença](#balance_scale-licença)
* [Contato](#email-contato)

## Sobre o projeto
Aplicação desenvolvida em React Native com Typescript e Expo, para enviar mensagens para a sala do NLW.
Mostra as últimas mensagens enviadas, utilizando socket.<br />
Para poder enviar mensagem, precisa estar logado com conta do Github.<br />
Para funcionar, é preciso que a aplicação [node-heat](https://github.com/luiizsilverio/node_heat), desenvolvida em Node, esteja rodando na porta 4000.<br />

## :hammer_and_wrench: Tecnologias
* <ins>React Native</ins>
* <ins>Typescript</ins>
* Recebimento de mensagens via <ins>Socket.io-client</ins>
* Envio de mensagem com <ins>Axios</ins>

## :camera_flash: Screenshots
![](https://github.com/luiizsilverio/app-heat/blob/main/assets/app-heat.gif)

## :car: Iniciando o projeto
* Antes de iniciar a aplicação, inicie a API [node-heat](https://github.com/luiizsilverio/node_heat)
* Baixe e instale o <ins>ExpoGo</ins> no dispositivo (celular ou emulador)
* Baixe o repositório com ``` git clone ``` e entre na pasta do projeto.
* Informe o IP do computador no arquivo ``` src/services/api.js ```, em ``` baseURL ```.
* Digite ``` yarn ``` no terminal, para inicializar o projeto.
* Digite ``` expo start ``` no terminal, para executar o projeto.

## :balance_scale: Licença
Este projeto está licenciado sob a [licença MIT](LICENSE).

## :email: Contato

E-mail: [**luiiz.silverio@gmail.com**](mailto:luiiz.silverio@gmail.com)
