import React, { Component } from 'react';
import FA from 'react-fontawesome';

export class ListProducts extends Component {
    static displayName = ListProducts.name;

    constructor(props) {
        super(props);
        this.state = { products: [], loading: true };
    }

    componentDidMount() {
        this.populateProductsData();
    }

    static handleEdit(id) {
        window.location.href = "/form-product/edit/" + id;
    }

    static handleDelete(id) {
        if (!window.confirm("Deseja realmente deletar o produto : " + id)) {
            return;
        }
        else {
            fetch('api/products/' + id, { method: 'delete' })
                .then(json => {
                    window.location.href = "/list-products";
                    alert('Produto deletado!');
                })
        }
    }

    static renderProductsTable(products) {

        console.log(products);

        return (
            <table className='table table-striped' aria-labelledby="tabelLabel">
                <thead>
                    <tr>
                        <th className="col-md-1 text-center">Código</th>
                        <th className="text-left">Produto</th>
                        <th className="text-left">Marca</th>
                        <th className="text-right">Preço</th>
                        <th className="col-md-2">Ação</th>
                    </tr>
                </thead>
                <tbody>
                    {products.map(product =>
                        <tr key={"id_" + product.id}>
                            <td className="col-md-1 text-center align-middle">{product.id}</td>
                            <td className="text-left align-middle"><a href={"/form-product/read/" + product.id }>{product.name}</a></td>
                            <td className="text-left align-middle">{product.brand}</td>
                            <td className="text-right align-middle">{product.value.toLocaleString('pt-br', { style: 'currency', currency: 'BRL' })}</td>
                            <td>
                                <button className="btn btn-success mr-1" onClick={(id) => this.handleEdit(product.id)}><FA name="edit" /></button>
                                <button className="btn btn-danger" onClick={(id) => this.handleDelete(product.id)}><FA name="trash" /></button>
                            </td>
                        </tr>
                    )}
                </tbody>
            </table>
        );
    }

    render() {
        let contents = this.state.loading
            ? <p><em>Carregando...</em></p>
            : ListProducts.renderProductsTable(this.state.products);

        return (
            <div>
                <h1 id="tabelLabel" >Lista de Produtos</h1>
                <p><a href="/form-product/add">Adicionar novo produto.</a></p>
                {contents}
            </div>
        );
    }

    async populateProductsData() {
        const response = await fetch('api/products');
        const data = await response.json();

        this.setState({ products: data, loading: false });
    }
}
