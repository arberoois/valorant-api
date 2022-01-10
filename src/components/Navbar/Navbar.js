import React from 'react'
import { AgentsIcon, PistolIcon } from '../../assets/icons'
import styles from './Navbar.module.css'

export const Navbar = () => {

    return (
        <navbar className={styles.navbar}>
            <h1 className={styles.logo}>Valorant API</h1>
            <div className={styles.icons}>
                <PistolIcon size={42} />
                <AgentsIcon size={42} className={styles.active} />
            </div>
        </navbar>
    )
}