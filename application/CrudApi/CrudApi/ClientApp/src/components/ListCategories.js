import React, { Component } from 'react';
import FA from 'react-fontawesome';

export class ListCategories extends Component {
    static displayName = ListCategories.name;

    constructor(props) {
        super(props);
        this.state = { categories: [], loading: true };
    }

    componentDidMount() {
        this.populateCategoriesData();
    }

    static handleRead(id) {

        if (id === 0) {
            return;
        }

    }

    static handleEdit(id) {

        if (id === 0) {
            alert('Categoria reservada pelo sistema, não pode ser editada.');
            return;
        }

        window.location.href = "/form-category/edit/" + id;

    }

    static handleDelete(id) {

        if (id === 0) {
            alert('Categoria reservada pelo sistema, não pode ser apagada.');
            return;
        }

        if (!window.confirm("Deseja realmente deletar a categoria : " + id)) {
            return;
        }
        else {
            fetch('api/categories/' + id, { method: 'delete' })
                .then(json => {
                    if (json.status === 401) {
                        alert('Essa categoria não pode ser apaga, pois tem um produto associado.');
                    } else {
                        window.location.href = "/list-categories";
                        alert('Categoria deletada!');
                    }
                })
        }

    }

    static renderCategoriesTable(categories) {

        const renderLink = (id, name) => {
            if (id > 0) {
                return <td className="text-left align-middle"><a href={"/form-category/read/" + id}>{name}</a></td>;
            } else {
                return <td className="text-left align-middle"><a>{name}</a></td>;
            }
        }

        return (
            <table className='table table-striped' aria-labelledby="tabelLabel">
                <thead>
                    <tr>
                        <th className="col-md-1 text-center">Código</th>
                        <th className="text-left">Nome</th>
                        <th className="col-md-2">Ação</th>
                    </tr>
                </thead>
                <tbody>
                    {categories.map(category =>
                        <tr key={"id_" + category.id}>
                            <td className="col-md-1 text-center align-middle">{category.id}</td>
                            {renderLink(category.id, category.name) }
                            <td>
                                <button className="btn btn-success mr-1" onClick={(id) => this.handleEdit(category.id)}><FA name="edit" /></button>
                                <button className="btn btn-danger" onClick={(id) => this.handleDelete(category.id)}><FA name="trash" /></button>
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
            : ListCategories.renderCategoriesTable(this.state.categories);

        return (
            <div>
                <h1 id="tabelLabel" >Lista de Categorias</h1>
                <p><a href="/form-category/add">Adicionar nova categoria.</a></p>
                {contents}
            </div>
        );
    }

    async populateCategoriesData() {
        const response = await fetch('api/categories');
        const data = await response.json();

        this.setState({ categories: data, loading: false });
    }
}
