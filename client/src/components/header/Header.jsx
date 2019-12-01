import React, { Component } from 'react'
import styles from './Header.module.scss';
import { NavLink, Link } from 'react-router-dom';

class Header extends Component {
    render() {
        return (
            <div className={styles.header}>
                <Link to='/home' className={styles.headerTitle}>Ecommerce</Link>
                <div className={styles.navBar}>
                    <NavLink to='/home' className={styles.navItem} activeClassName={styles.navItemActiveClass}>Home</NavLink>
                    <NavLink to='/products' className={styles.navItem} activeClassName={styles.navItemActiveClass}>Products</NavLink>
                    <NavLink to='/contactus' className={styles.navItem} activeClassName={styles.navItemActiveClass}>Contact Us</NavLink>
                </div>
            </div>
        )
    }
}

export default Header;