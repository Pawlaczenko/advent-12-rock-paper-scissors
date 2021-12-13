import React from 'react'
import { Link } from 'react-router-dom';
import styles from './_navigationLink.module.scss';

const NavigationLink = ({ hand }) => {

    const path = `/game/${hand}`;
    const imagePath = `./images/${hand}.png`

    return (
        <li className={styles.listItem}>
            <Link to={path}>
                <button className={styles.button}>
                    <img className={styles.image} src={imagePath} alt={hand} />
                    {hand}
                </button>
            </Link>
        </li>
    )
}

export default NavigationLink
