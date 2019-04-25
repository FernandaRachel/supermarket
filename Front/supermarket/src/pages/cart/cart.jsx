import React, { Component } from 'react';
import CartTable from '../../components/cart-table/cart-table'

class Cart extends Component {
    constructor (props) {
        super(props);
        const result = sessionStorage.getItem('cart-list');
        let cartlist = []
        if (result)
            cartlist = JSON.parse(result);

        this.state = {
            cartList: cartlist
        }

        this.removeFromTable = this.removeFromTable.bind(this);
    }

    removeFromTable(id) {
        this.setState(state => {
            const listUpdated = [];
            state.cartList.forEach(c => {
                if (c._id !== id)
                    listUpdated.push(c)
            })
            listUpdated && sessionStorage.setItem('cart-list', listUpdated)
            return { cartList: listUpdated }
        })
    }

    render() {
        console.log(this.state);
        return (
            <div className="col-md-12">
                <CartTable cartList={this.state.cartList} removeFromTable={this.removeFromTable} />
            </div>
        );
    }
}

export default Cart;