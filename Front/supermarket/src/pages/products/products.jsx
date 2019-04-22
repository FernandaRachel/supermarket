
import React, { Component } from 'react';
import ProductsCard from '../../components/products-card/products-card';
import SearchBar from '../../components/shared/search-bar/search-bar';
import axios from 'axios';
import urls from '../../assets/url-config'

// export default (props) =>
// const style = {

// }
class Products extends Component {
    constructor (props) {
        super(props);
        this.requestProducts();
        this.state = {
            products: []
        }
        this.alterQuantity = this.alterQuantity.bind(this);
        this.handleInputchange = this.handleInputchange.bind(this);
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
        console.log(e.target.value)
        console.log(id)
    }

    requestProducts() {
        axios.get(urls['produtos-get'])
            .then((resp) => {
                const products = resp.data.map(el => {
                    el.inputQtd = 0
                    return el;
                });
                console.log(products)
                this.setState({
                    products: products
                });
            })
    }

    renderProductList() {
        for (let i = 0; i < this.state.products.length < i; i++) {
            return this.state.products[i]
        }
    }

    render() {
        return (
            <div className="col-md-12">
                <div className="col-md-12">
                    <SearchBar/>
                </div>
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