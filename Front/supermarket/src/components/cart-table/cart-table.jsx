import React from 'react'

const CartTable = props => {
    const renderRows = (cartList) => {
        let cartTable = '';
        for (let index = 0; index < cartList.length; index++) {
            const element = cartList[index];
            cartTable += `<tr>
            <td>${element.name}</td>
            <td>${element.price}</td>
            <td>${element.inputQtd}</td>
            <td>${element.price * element.inputQtd}</td>
        </tr>`
        }

        return cartTable;
    }
    return (
        <table class="table">
            <thead>
                <tr>
                    <th scope="col">Name</th>
                    <th scope="col">Unit Price</th>
                    <th scope="col">Quantity</th>
                    <th scope="col">Total Price</th>
                </tr>
            </thead>
            <tbody>
                {
                    renderRows(props.cartList)
                }
            </tbody>
        </table>
    )
}

export default CartTable;