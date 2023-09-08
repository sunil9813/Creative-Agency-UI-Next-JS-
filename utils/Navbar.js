import React from 'react'
import {FaCoins} from 'react-icons/fa'
import styles from './Styles.module.css'
import Link from 'next/link'

const Navbar = () => {
    return (
        <Link href='/'>
            <div className={styles.navbar}>
                <FaCoins className={styles.icon} />
                <h1> Coin <span className={styles.purple}>Search</span></h1>
            </div>
        </Link>
    )
}

export default Navbar