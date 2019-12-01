import React, { Component } from 'react'
import styles from './ProductCard.module.scss';

class ProductCard extends Component {
    constructor(props) {
        super(props);

        this.state = {
            productImage: props.productImage,
            productName: props.productName,
            productPrice: props.productPrice,
            productDescription: props.productDescription,
        }

    }
    render() {
        return (
            <div className={styles.card}>
                <img src={this.props.productImage} className={styles.productImage} alt='Computer'></img>
                <div className={styles.productInfo}>
                <h1 className={styles.productName}>{this.props.productName}</h1>
                <p className={styles.productPrice}>${this.props.productPrice}</p>
                <p className={styles.productDescription}>{this.props.productDescription}</p>
                </div>
            </div>
        )
    }
}

export default ProductCard;