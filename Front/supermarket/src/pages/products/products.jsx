
import React, { Component } from 'react';
import ProductsCard from '../../components/products-card/products-card';
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
    }

    requestProducts() {
        axios.get(urls['produtos-get'])
            .then((resp) => {
                this.setState({
                    products: resp.data
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
            <div className="d-flex flex-row wrap justify-content-center">
                {
                    this.state.products.map(prod =>
                        <ProductsCard key={prod._id} name={prod.name} price={prod.price}></ProductsCard>
                    )
                }
            </div>
        );
    }
}



export default Products;