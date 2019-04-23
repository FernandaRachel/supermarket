import React, { Component } from 'react';
import CartTable from '../../components/cart-table/cart-table'

class Cart extends Component {
    constructor (props) {
        super(props);
        const cartlist = JSON.parse(sessionStorage.getItem('cart-list'));
        this.state = {
            cartList: cartlist
        }
    }



    render() {
        console.log(this.state);
        return (
            <div className="col-md-12">
                <CartTable cartList={this.state.cartList} />
            </div>
        );
    }
}

export default Cart;