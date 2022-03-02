import React, { Component } from 'react';
import { Form, FormControl, InputGroup } from 'react-bootstrap';

export class Product {
    constructor() {
        this.id = 0;
        this.name = "";
        this.description = "";
        this.value = 0;
        this.brand = "";
        this.category_id = 0;
    }
}

export default class FormProduct extends Component {
    static displayName = FormProduct.name;

    constructor(props) {
        super(props);
        this.state = { title: "", product: new Product(), categories: null, readonly: false, loading: true };

        this.renderProductForm = this.renderProductForm.bind(this);
        this.populateProductData = this.populateProductData.bind(this);
        this.handleSave = this.handleSave.bind(this);
        this.handleCancel = this.handleCancel.bind(this);
    }

    componentDidMount() {
        this.populateProductData();
    }

    async handleSave(event) {
        event.preventDefault();

        const data = new FormData(event.target);

        if (this.state.product.id) {
            const response = await fetch('api/products/' + this.state.product.id, { method: 'PUT', body: data });
        }
        else {
            const response = await fetch('api/products/', { method: 'POST', body: data });           
        }

        this.props.history.push('/list-products');

    }

    handleCancel(event) {
        event.preventDefault();
        this.props.history.push('/list-products');
    }

    renderProductForm(product, categories) {

        const renderButtons = () => {
            if (!this.state.readonly) {
                return <div className="form-group row justify-content-end">
                            <button className="btn btn-danger mr-2" onClick={this.handleCancel}>Cancelar</button>
                            <button type="submit" className="btn btn-success mr-4" value={product.id}>Salvar</button>
                        </div>;
            } 
        }

        const renderControlId = () => {
            if (product.id != 0) {
                return <div className="col-md-2">
                            <Form.Label htmlFor="inputId">Código</Form.Label>
                            <Form.Control name="id" id="inputId" defaultValue={product.id} readOnly={true} />
                        </div>;
            }
        }

        //console.log(product);

        return (

            <Form onSubmit={this.handleSave}>

                <div className="form-group row">
                    <div className={product.id != 0 ? "col-md-10" : "col-md-12"}>
                        <Form.Label htmlFor="inputName">Produto</Form.Label>
                        <Form.Control className="form-control" type="text" id="inputName" name="name" defaultValue={product.name} readOnly={this.state.readonly} required />
                    </div>
                    {renderControlId()}
                </div>

                <div className="form-group row">
                    <div className="col-md-6">
                        <Form.Label htmlFor="inputCategory">Categorias</Form.Label>
                        <Form.Select name="category_id" id="inputCategory" className="form-control" value={product.category_Id} readOnly={this.state.readonly} >
                            {categories.map(category =>
                                <option key={"id_" + category.id} value={category.id}>{category.id} - {category.name}</option>
                            )}
                        </Form.Select>
                    </div>
                    <div className="col-md-6">
                        <Form.Label htmlFor="inputBrand">Marca</Form.Label>
                        <Form.Control className="form-control" type="text" id="inputBrand" name="brand" defaultValue={product.brand} readOnly={this.state.readonly} required />
                    </div>
                </div>

                <div className="form-group row">
                    <div className="col-md-6">
                        <Form.Label htmlFor="inputValue">Preço</Form.Label>
                        <InputGroup>
                            <InputGroup.Text id="addonValue">R$</InputGroup.Text>
                            <FormControl
                                name="value"
                                id="inputValue"
                                defaultValue={parseFloat(product.value).toLocaleString({ minimumFractionDigits: 2, maximumFractionDigits: 2 })}
                                aria-describedby="addonValue"
                                readOnly={this.state.readonly}
                            />
                        </ InputGroup>
                    </div>
                </div>

                <div className="form-group row">
                    <div className="col-md-12">
                        <Form.Label htmlFor="inputDescription">Descrição</Form.Label>
                        <Form.Control as="textarea" rows={3} className="form-control" type="text" id="inputDescription" name="description" defaultValue={product.description} readOnly={this.state.readonly} />
                    </div>
                </div>

                {renderButtons()}

            </Form>

        );
    }

    render() {
        let contents = this.state.loading
            ? <p><em>Carregando...</em></p>
            : this.renderProductForm(this.state.product, this.state.categories);

        return (
            <div>
                <h1 id="tabelLabel" >{this.state.title}</h1>
                <p><a href="/list-products">Voltar para a lista.</a></p>
                {contents}
            </div>
        );
    }

    async populateProductData() {

        const responseCategory = await fetch('api/categories');
        const dataCategory = await responseCategory.json();

        var id = this.props.match.params["id"];
        if (id > 0) {

            const response = await fetch('api/products/' + id);
            const data = await response.json();

            var operation = this.props.match.params["operation"];
            var title = "Alteração de Produto";
            var readonly = false;

            if (operation === "read") {
                title = "Consulta de Produto";
                readonly = true;
            }

            this.setState({ title: title, product: data, categories: dataCategory, readonly: readonly, loading: false });

        } else {

            this.setState({ title: "Novo Produto", product: new Product(), categories: dataCategory, readonly: false, loading: false });

        }

    }
}
