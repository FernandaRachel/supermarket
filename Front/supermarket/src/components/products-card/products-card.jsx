import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
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

        return (
            <div className={classes.card}>
                <div className="card">
                    <div className="card-body">
                        <img src={farinha} className={classes.media} alt="farinha" />
                        <div>
                            <small>{this.props.name}</small>
                            <small>Preço: R$ {this.props.price}</small>
                        </div>
                        <div className="btn-group" role="group" aria-label="Basic example">
                            <button className="btn btn-outline-success">
                                <i className="fa fa-plus"></i>
                            </button>
                            <div className="form-group">
                            <input className="form-control" type="number"/>
                            </div>
                            {/* <button className="btn btn-dark">
                                <i className="text-white fa fa-cart-plus"></i>
                            </button> */}
                            <button className="btn btn-outline-danger">
                                <i className="fa fa-minus"></i>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

ProductsCard.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ProductsCard);