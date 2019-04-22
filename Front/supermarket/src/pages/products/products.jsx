import React, { Component } from 'react';
import ProductsCard from '../../components/products-card/products-card';
import SearchBar from '../../components/shared/search-bar/search-bar';
import axios from 'axios';
import urls from '../../assets/url-config'
// import debounce from 'lodash.debounce';


class Products extends Component {
    constructor (props) {
        super(props);
        this.requestProducts();
        this.state = {
            products: [],
            searchText: ''
        }
        this.alterQuantity = this.alterQuantity.bind(this);
        this.handleInputchange = this.handleInputchange.bind(this);
        this.handleSearchchange = this.handleSearchchange.bind(this);
        this.searchProduct = this.searchProduct.bind(this);
    }

    alterQuantity(diff, id) {
        this.setState((state) => {
            const prodList = this.state.products;
            const prod = this.state.products.find(el => el._id === id);
            let index;
            if (prod)
                index = this.state.products.indexOf(prod);
            prod.inputQtd = prod.inputQtd + diff;
            prodList.splice(index, 1, prod)
            return { products: prodList }
        })
    }

    handleInputchange(e, id) {
        const value = parseInt(e.target.value);
        this.alterQuantity(value, id);
    }

    handleSearchchange(e) {
        console.log(e.target.value)
        const newValue = e.target.value;
        this.setState(state => {
            return { searchText: newValue }
        })
    }

    addInputQtdToArray(resp) {
        const products = resp.data.map(el => {
            el.inputQtd = 0
            return el;
        });
        this.setState({
            products: products
        });
    }

    requestProducts() {
        axios.get(urls['produtos-get'])
            .then((resp) => {
                this.addInputQtdToArray(resp);
            })
    }

    searchProduct() {
        // debounce
        console.log('searchProduct')
        axios.get(`${urls['products-get-by-name']}${this.state.searchText}`)
            .then((resp) => {
                this.addInputQtdToArray(resp);
            });
    }

    renderProductList() {
        for (let i = 0; i < this.state.products.length < i; i++) {
            return this.state.products[i]
        }
    }

    render() {
        return (
            <div className="col-md-12">
                <SearchBar searchText={this.state.searchText} handleSearchchange={this.handleSearchchange}
                    searchProduct={this.searchProduct} />
                <div className="d-flex flex-row wrap justify-content-center">
                    {
                        this.state.products.map(prod =>
                            <ProductsCard key={prod._id} name={prod.name} price={prod.price} id={prod._id}
                                alterQuantity={this.alterQuantity} qtd={prod.inputQtd}
                                handleInputchange={this.handleInputchange}></ProductsCard>
                        )
                    }
                </div>
            </div>
        );
    }
}



export default Products;