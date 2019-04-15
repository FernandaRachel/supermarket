
import React, { Component } from 'react';
import ProductsCard from '../../components/products-card/products-card';


// export default (props) =>
class Products extends Component {
    constructor (props) {
        super(props);
        this.state = {
            products: [
                { id: 1, name: 'Farinha', preco: '2' },
                { id: 2, name: 'Ovo', preco: '12' },
            ]
        }
    }


    renderProductList() {
        for (let i = 0; i < this.state.products.length < i; i++) {
            return this.state.products[i]
        }
    }

    render() {
        return (
            this.state.products.map(prod =>
                <ProductsCard key={prod.id} name={prod.name} preco={prod.preco}></ProductsCard>
            )
        );
    }
}



export default Products;