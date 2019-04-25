import React, { Component } from 'react';
import ProductsCard from '../../components/products-card/products-card';
import SearchBar from '../../shared/components/search-bar/search-bar';
import axios from 'axios';
import urls from '../../assets/url-config'
import CartBadge from '../../components/cart-badge/cart-badge'
import Loader from '../../shared/components/loader/loader'
// import debounce from 'lodash.debounce';


class Products extends Component {
    constructor (props) {
        super(props);
        this.requestProducts();
        /**
         * State assingments
         */
        this.state = {
            products: [],
            searchText: '',
            loading: false,
            cartList: []
        }
        /**
         * Functions binds
         */
        this.alterQuantity = this.alterQuantity.bind(this);
        this.handleInputchange = this.handleInputchange.bind(this);
        this.handleSearchchange = this.handleSearchchange.bind(this);
        this.searchProduct = this.searchProduct.bind(this);
        this.addToCart = this.addToCart.bind(this);
    }

    componentDidMount() {
        this.getCartList();
    }

    alterQuantity(diff, id) {
        this.setState((state) => {
            const prodList = state.products;
            const prod = state.products.find(el => el._id === id);
            let index;
            if (prod)
                index = state.products.indexOf(prod);
            prod.inputQtd = prod.inputQtd + diff;
            prodList.splice(index, 1, prod)
            return { products: prodList }
        })
    }


    getCartList() {
        const result = sessionStorage.getItem('cart-list');
        let cartlist = []
        if (result) {
            cartlist = JSON.parse(result);
            this.setState((state) => {
                return { cartList: cartlist }
            })
        }
    }

    /**
     * Input handlers
     */
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
            products: products,
            loading: false
        });
    }


    addToCart(id) {
        this.setState(state => {
            const prod = state.products.find(el => el._id === id);
            const cartProd = state.cartList.find(el => el._id === id);
            const cartList = state.cartList;
            if (!cartProd) {
                cartList.push(prod);
                sessionStorage.setItem('cart-list', JSON.stringify(cartList));
            } else {
                const cartUpdated = state.cartList;
                state.cartList.forEach(c => {
                    if (c._id === prod._id) {
                        c.inputQtd = prod.inputQtd;
                        // cartUpdated.push(c);
                        console.log(cartUpdated);
                        /**
                         * Update the cartList in state
                         */
                        return { cartList: cartList }
                    }
                });
            }
            return { cartList: cartList }
        })
    }


    /**
     * API CALLS
     */
    requestProducts() {
        this.setState(state => {
            return { loading: true }
        })
        axios.get(urls['produtos-get'])
            .then((resp) => {
                this.addInputQtdToArray(resp);
            })
    }

    searchProduct() {
        if (!this.state.searchText)
            return this.requestProducts();
        // debounce
        this.setState(state => {
            return { loading: true }
        })
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
        const loading = this.state.loading;
        console.log(loading)
        return (
            <div>
                {
                    loading ? (
                        <div className="m-4">
                            <Loader />
                        </div>
                    ) : (
                            <div className="col-md-12">
                                <div className="d-flex flex-row justify-content-around m-4">
                                    <SearchBar searchText={this.state.searchText} handleSearchchange={this.handleSearchchange}
                                        searchProduct={this.searchProduct} />
                                    <CartBadge cartList={this.state.cartList} />
                                </div>
                                <div className="d-flex flex-row flex-wrap justify-content-center">
                                    {
                                        this.state.products.map(prod =>
                                            <ProductsCard key={prod._id} name={prod.name} price={prod.price} id={prod._id}
                                                alterQuantity={this.alterQuantity} qtd={prod.inputQtd}
                                                handleInputchange={this.handleInputchange} addToCart={this.addToCart}></ProductsCard>
                                        )
                                    }
                                </div>
                            </div>
                        )
                }
            </div>
        );
    }
}



export default Products;