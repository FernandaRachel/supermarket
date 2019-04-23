import React from 'react'

const CartTable = props => {
    const renderRows = (cartList) => {
        let cartTable = [];
        let total = 0;
        for (let index = 0; index < cartList.length; index++) {
            const element = cartList[index];
            total += element.price * element.inputQtd;
            cartTable.push(<tr>
                <td>{element.name}</td>
                <td>{element.price}</td>
                <td>{element.inputQtd}</td>
                <td>{element.price * element.inputQtd}</td>
            </tr>)
            // eslint-disable-next-line no-unused-expressions
            index === cartList.length -1 ? cartTable.push(<tr>
                <td colSpan="3">Total:</td>
                <td>{total}</td>
            </tr>) : '' 
        }

        return cartTable;
    }
    return (
        props.cartList ?
            (
                <div className="d-flex justify-content-center">
                    <table className="table col-md-10">
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
                </div>
            ) : 'Não há itens no carrinho'
    )
}

export default CartTable;