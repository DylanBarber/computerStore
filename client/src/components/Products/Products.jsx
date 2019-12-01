import React, { Component } from 'react'
import styles from './Products.module.scss';
import ProductCard from './ProductCard';

class Products extends Component {

    state = {
        productData: []
    }

    makeFetch = async () => {
        const response = await fetch('http://localhost:25565/api/products');
        return await response.json();
    }

    componentDidMount = async () => {
        const productData = await this.makeFetch();
        this.setState({productData})
    }

    render() {

        const products = this.state.productData.map((product, index) => {
            return <ProductCard key={index} productImage={product.productImage} productName={product.productName} productPrice={product.productPrice} productDescription={product.productDescription}/>
        })

        return (
            <div className={styles.container}>
                {products}
            </div>
        )
    }
}


export default Products;