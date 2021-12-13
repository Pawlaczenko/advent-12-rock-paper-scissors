import React from 'react'
import styles from './_choose.module.scss';

import Navigation from '../Navigation'

const Choose = () => {
    return (
        <div className={styles.wrapper}>
            <h1 className={styles.header}>pick one</h1>
            <Navigation />
        </div>
    )
}

export default Choose
