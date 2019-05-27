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
                    <br />
                    <div>
                        <div className="d-flex justify-content-center">
                            <div>
                                <button className="btn btn-outline-danger" onClick={() => props.alterQuantity(-1, props.id)} 
                                disabled={!props.qtd}>
                                    <i className="fa fa-minus"></i>
                                </button>
                            </div>
                            <div>
                                <input type="text" className="form-control" readOnly value={props.qtd} />
                            </div>
                            <div>
                                <button className="btn btn-outline-success" onClick={() => props.alterQuantity(+1, props.id)}>
                                    <i className="fa fa-plus" ></i>
                                </button>
                            </div>
                        </div>
                        {/* <br /> */}
                        <div className="d-flex  justify-content-center align-items-center">
                            <small>Total: {currencyFormatter.format('br', props.price * props.qtd)}</small>
                            <button className="btn btn-light"  onClick={() => props.addToCart(props.id)} disabled={!props.qtd}>
                                <i className="fa fa-cart-plus text-black"></i>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ProductsCard;