import React, { Component } from 'react';
import { Form } from 'react-bootstrap';

export class Category {
    constructor() {
        this.id = 0;
        this.name = "";
        this.description = "";
    }
}

export default class FormCategory extends Component {
    static displayName = FormCategory.name;

    constructor(props) {
        super(props);
        this.state = { title: "", category: new Category(), readonly: false, loading: true };

        this.renderCategoryForm = this.renderCategoryForm.bind(this);
        this.populateCategoryData = this.populateCategoryData.bind(this);
        this.handleSave = this.handleSave.bind(this);
        this.handleCancel = this.handleCancel.bind(this);
    }

    componentDidMount() {
        this.populateCategoryData();
    }

    async handleSave(event) {
        event.preventDefault();

        const data = new FormData(event.target);

        if (this.state.category.id) {
            const response = await fetch('api/categories/' + this.state.category.id, { method: 'PUT', body: data });
        }
        else {
            const response = await fetch('api/categories/', { method: 'POST', body: data });
        }

        this.props.history.push('/list-categories');

    }

    handleCancel(event) {
        event.preventDefault();
        this.props.history.push('/list-categories');
    }

    renderCategoryForm(category) {

        const renderButtons = () => {
            if (!this.state.readonly) {
                return <div className="form-group row justify-content-end">
                            <button className="btn btn-danger mr-2" onClick={this.handleCancel}>Cancelar</button>
                            <button type="submit" className="btn btn-success mr-4" value={category.id}>Salvar</button>
                        </div>;
            } 
        }

        const renderControlId = () => {
            if (category.id != 0) {
                return <div className="col-md-2">
                            <Form.Label htmlFor="inputId">Código</Form.Label>
                            <Form.Control name="id" id="inputId" defaultValue={category.id} readOnly={true} />
                        </div>;
            }
        }

        return (

            <Form onSubmit={this.handleSave}>

                <div className="form-group row">
                    <div className={category.id != 0 ? "col-md-10" : "col-md-12"}>
                        <Form.Label htmlFor="inputName">Nome</Form.Label>
                        <Form.Control className="form-control" type="text" id="inputName" name="name" defaultValue={category.name} readOnly={this.state.readonly} required />
                    </div>
                    {renderControlId()}
                </div>

                <div className="form-group row">
                    <div className="col-md-12">
                        <Form.Label htmlFor="inputDescription">Descrição</Form.Label>
                        <Form.Control as="textarea" rows={3} className="form-control" type="text" id="inputDescription" name="description" defaultValue={category.description} readOnly={this.state.readonly} />
                    </div>
                </div>

                {renderButtons()}

            </Form>

        );
    }

    render() {
        let contents = this.state.loading
            ? <p><em>Carregando...</em></p>
            : this.renderCategoryForm(this.state.category);

        return (
            <div>
                <h1 id="tabelLabel" >{this.state.title}</h1>
                <p><a href="/list-categories">Voltar para a lista.</a></p>
                {contents}
            </div>
        );
    }

    async populateCategoryData() {

        var id = this.props.match.params["id"];
        if (id > 0) {

            const response = await fetch('api/categories/' + id);
            const data = await response.json();

            var operation = this.props.match.params["operation"];
            var title = "Alteração de Categoria";
            var readonly = false;

            if (operation === "read") {
                title = "Consulta de Categoria";
                readonly = true;
            }

            this.setState({ title: title, category: data, readonly: readonly, loading: false });

        } else {

            this.setState({ title: "Nova Categoria", category: new Category(), readonly: false, loading: false });

        }

    }
}
