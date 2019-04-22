import React from 'react';
import farinha from '../../assets/images/farinha.jpg'
import styles from './products-card.module.css'
import currencyFormatter from '../../utils/currency-formatter'

const ProductsCard = props => {
    return (
        <div className={styles.cardContainer}>
            <div className="card card-container">
                <div className="card-body">
                    <img src={farinha} className={styles.media} alt="farinha" />
                    <small>{props.name}</small>
                    <div>
                        <small>Preço: {currencyFormatter.format('br', props.price)}</small>
                    </div>
                    <div className="d-flex justify-content-center">
                        <button className="btn btn-outline-danger" disabled={!props.qtd}>
                            <i className="fa fa-minus" onClick={() => props.alterQuantity(-1, props.id)}></i>
                        </button>
                        <input type="text" className="form-control" readOnly value={props.qtd} />
                        <button className="btn btn-outline-success">
                            <i className="fa fa-plus" onClick={() => props.alterQuantity(+1, props.id)}></i>
                        </button>
                    </div>
                    <br/>
                    <div className="d-flex justify-content-center align-items-center">
                        <small>Total: {currencyFormatter.format('br', props.price * props.qtd)}</small>
                        <button className="btn btn-light" disabled={!props.qtd}>
                            <i className="fa fa-cart-plus text-black" onClick={() => props.addToCart(props.id)}></i>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ProductsCard;