import React from 'react'
import { Link } from 'react-router-dom'

const CartBadge = props => {
    console.log(props.cartList)
    const cartArr = props.cartList;
    let qtdInCart = 0;
    for (let index = 0; index < cartArr.length; index++) {
        const element = cartArr[index];
        qtdInCart += element.inputQtd;
    }
    return (
        <div>
            <button type="button" className="btn btn-primary">
                <Link className="text-white" to="/cart">
                    Mini Cart <span className="badge badge-light">{qtdInCart}</span>
                    <span className="sr-only">Quantity of units added in cart</span>
                </Link>
            </button>
        </div>
    )
}

export default CartBadge;