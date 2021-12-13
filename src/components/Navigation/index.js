import React from 'react'
import styles from './_navigation.module.scss';
import NavigationLink from './NavigationLink';

const Navigation = () => {
    const hands = ["rock", "paper", "scissors"];
    return (
        <ul className={styles.list}>
            {
                hands.map((el, index) => {
                    return <NavigationLink hand={el} key={index} />
                })
            }
        </ul>
    )
}

export default Navigation
