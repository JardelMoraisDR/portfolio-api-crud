import React, { Component } from 'react';

export class Home extends Component {
  static displayName = Home.name;

  render () {
    return (
      <div>
        <h1>API Demonstrativa</h1>
        <p>O objetivo dessa aplicação é construir uma WEB API em .NET 5, que realizará um CRUD de produtos e categorias onde as categorias são relacionáveis com os produtos. A categoria não poderá ser deletada se tiver relacionada com um produto.</p>
        <p>Requisitos para o Banco de Dados:</p>
        <ul>
          <li>Criação das entidades de Produto e Categoria</li>
          <li>A entidade de produto deve conter os campos: Id, name, description, value, brand, category_id</li>
          <li>A entidade de categoria deve conter os campos: Id, name, description</li>
        </ul>
        <p>Requisitos para o Back-End:</p>
        <ul>
          <li>Criação da WEB API com CRUD para:</li>
          <li>API de Produtos</li>
          <li>API de Categorias</li>
        </ul>
      </div>
    );
  }
}
