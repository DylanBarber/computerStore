import React, { Component } from 'react'
import styles from './Products.module.scss';
import ProductCard from './ProductCard';

class Products extends Component {
    render() {
        return (
            <div className={styles.container}>
                <ProductCard productImage={'/img/products/1.jpg'} productName={'Computer'} productPrice={'500.00'} productDescription={'This is a computer'}/>
            </div>
        )
    }
}


export default Products;