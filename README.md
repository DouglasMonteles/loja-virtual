# Silva Delivery
[![NPM](https://img.shields.io/npm/l/react)](https://github.com/DouglasMonteles/sds2/blob/main/LICENSE) 

# Sobre o projeto

Confira versão web: https://silva-store.netlify.app/landing-page

Silva Delivery é uma aplicação web construida para dar suporte as vendas online de uma empresa fictícia, mas que atende as necessidades de venda do mundo real. 

A aplicação consiste na exibição de produtos por categoria, bem como na adição desse produto ao carrinho de compras, no cadastro de usuário e na realização de login utilizando Token JWT, no registro e entrega de pedido e no envio de email com os dados e a confirmação do pedido.

## Layout do projeto

https://www.figma.com/file/QQ3ayYYjGOLOpUT7ifAMWB/Loja-Virtual?node-id=0%3A1

## Modelo Conceitual
![Modelo Conceitual](https://github.com/DouglasMonteles/loja-virtual/blob/master/Arquivos%20do%20projeto/UML/Loja%20Virtual%20UML.png)

# Tecnologias utilizadas
## Back end
- Java
- Spring Boot
- JPA / Hibernate
- Maven
- MockMailService
- Spring Security
- Spring Data

## Front end
- HTML / CSS / JS / TypeScript
- Angular 9
- Material Design

## Implantação em produção
- Back end: Heroku
- Front end web: Netlify
- Banco de dados: PostgreSQL

# Como executar o projeto

## Back end
Pré-requisitos: Java 11

```bash
# clonar repositório
https://github.com/DouglasMonteles/loja-virtual.git

# entrar na pasta do projeto back end
cd backend

# executar o projeto
./mvnw spring-boot:run
```

## Front end web
Pré-requisitos: npm / yarn / Angular-CLI 9 ou superior

```bash
# clonar repositório
https://github.com/DouglasMonteles/loja-virtual.git

# entrar na pasta do projeto front end web
cd web

# instalar dependências
npm install

# executar o projeto
ng serve
```

# Autor

Douglas da Silva Monteles

https://www.linkedin.com/in/douglas-monteles
