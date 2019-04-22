import React from 'react'

const CartBadge = props => {
    const cartArr = props.cartList;
    let qtdInCart = 0; 
    for (let index = 0; index < cartArr.length; index++) {
        const element = cartArr[index];
        qtdInCart += element.inputQtd;
    }
    return (
        <div>
            <button type="button" className="btn btn-primary">
                Cart <span className="badge badge-light">{qtdInCart}</span>
                <span className="sr-only">Quantity of units added in cart</span>
            </button>
        </div>
    )
}

export default CartBadge;