import React from 'react';
import farinha from '../../assets/images/farinha.jpg'
import styles from './products-card.module.css'


const ProductsCard = props => {
    return (
        <div className={styles.cardContainer}>
            <div className="card card-container">
                <div className="card-body">
                    <img src={farinha} className={styles.media} alt="farinha" />
                    <div>
                        <small>{props.name}</small>
                        <small>Preço: R$ {props.price}</small>
                    </div>
                    <div className="d-flex justify-content-center">
                        <button className="btn btn-outline-danger">
                            <i className="fa fa-minus" onClick={() => props.alterQuantity(-1, props.id)}></i>
                        </button>
                        <input type="text" className="form-control" readOnly value={props.qtd} />
                        <button className="btn btn-outline-success">
                            <i className="fa fa-plus" onClick={() => props.alterQuantity(+1, props.id)}></i>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ProductsCard;