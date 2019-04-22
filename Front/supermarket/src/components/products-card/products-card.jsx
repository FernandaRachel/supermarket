import React, { Component } from 'react';
import PropTypes from 'prop-types';
import farinha from '../../assets/images/farinha.jpg'

const styles = {
    card: {
        display: 'flex',
        width: '10rem',
    },
    media: {
        height: '8rem',
        width: '8rem'
    },
};

class ProductsCard extends Component {
    //   constructor (props) {
    //     super(props);
    // }

    render() {
        const { classes } = this.props;
        console.log(this.props);
        return (
            <div className={styles.card}>
                <div className="card">
                    <div className="card-body">
                        <img src={farinha} className={styles.media} alt="farinha" />
                        <div>
                            <small>{this.props.name}</small>
                            <small>Preço: R$ {this.props.price}</small>
                        </div>
                        <div className="d-flex justify-content-center">
                            <button className="btn btn-outline-danger">
                                <i className="fa fa-minus" onClick={() => this.props.alterQuantity(-1, this.props.id)}></i>
                            </button>
                            <input type="number" className="form-control" readOnly value={this.props.qtd} />
                            <button className="btn btn-outline-success">
                                <i className="fa fa-plus" onClick={() => this.props.alterQuantity(+1, this.props.id)}></i>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

// ProductsCard.propTypes = {
//     classes: PropTypes.object.isRequired,
// };

export default ProductsCard;