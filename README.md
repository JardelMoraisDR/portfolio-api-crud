
# Portfólio - Projeto CrudApi

Projeto demonstrativo com o objetivo de criar uma WEB API utilizando o .NET 5.



## O desafio

O teste do backend baseia-se em fazer uma WEB API em .NET 2.2 | 3.1 | 5, que
realizará um CRUD de produtos e categorias onde as categorias são relacionáveis com
os produtos. 

A categoria não poderá ser deletada se tiver relacionada com um produto.



## Sobre o projeto

Para este projeto utilizei o ASP.Net Core 5.0 junto com o React.js.


## Banco de dados

Este projeto foi desenvolvido para utilizar uma conexão com um banco de dados PostgreSQL, para configurar o banco de dados, utilize o script que esta na pasta database. 

Este script (CruApi.sql) poderá ser utilizado para criar o banco de dados com todas as tabelas do projeto e com alguns registros fictícios.

As configurações utilizadas para o desenvolvimento desse projeto foram:

- Versão 11.11 do PostgreSQL

- Utilizado o gerenciador pgAdmin 4

Caso não consiga utilizar o script para criar o banco de dados, abra a solução da aplicação e tente utilizar a opção de "Migration" no Visual Studio Community 2019:

No Visual Studio, acesse a opção:

```bash
   Tools > NuGet Package Manager > Package Manager Console
```

Em seguida, adicione uma nova migração:

```bash
   Add-Migration NomeDaMigration -Context Context
```
Após adicionar, rode o comando abaixo para criar o banco:

```bash
   Update-database -Context Context
```

### Configurando a string de conexão com o banco

Após criar o seu banco de dados local, é necessário configurar a string de conexão com o seu banco para que a aplicação funcione.

Acesse o arquivo "appsettings.json" que está na pasta raiz do projeto:

```bash
   C:\portfolio-api-crud\CrudApi\CrudApi\appsettings.json
```

Mude a string de acordo com a sua configuração local, caso esteja em um ambiente que a porta do PostgreSQL está para 5432, basta apenas mudar o parâmetro "Password" indicado na imagem:

![Logo](https://i.ibb.co/XSkZzMt/Screenshot-3.png)

_Observação: os parâmetros User Id e Password são respectivamente o usuário e senha do seu PostgreSql._ 

## Rodando os projeto

Para rodar o projeto, abra o cmd e navegue até a pasta do projeto CrudApi.
Exemplo:

```bash
   cd C:\portfolio-api-crud\CrudApi\CrudApi
```

Dentro da pasta, rode o seguinte comando:

```bash
  dotnet run
```

Após rodar o comando, acesse o link abaixo em seu navegador:

```bash
  http://localhost:5001
```

Caso apareça a mensagem "Sua conexão não é privada", clique em "Avançado" e depois em "Continue até localhost (não seguro)":

![Logo](https://i.ibb.co/tsLRTRP/captura2340.png)

Após isso será apresentado a aplicação:

![Logo](https://i.ibb.co/d5Q659w/video.gif)

![Logo](https://i.ibb.co/HTd8dfj/video3.gif)

