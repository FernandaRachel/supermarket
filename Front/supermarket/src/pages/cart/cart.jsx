import React, { Component } from 'react';
import CartTable from '../../components/cart-table/cart-table'

class Cart extends Component {
    constructor (props) {
        super(props);
        this.state = {}
    }
    render() {
        return (
            <CartTable cartList={this.props.cartList}/>
        );
    }
}

export default Cart;