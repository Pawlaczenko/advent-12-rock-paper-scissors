import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router'
import { Link } from 'react-router-dom';

import styles from './_game.module.scss';
import rock from '../../assets/images/rock.png';
import paper from '../../assets/images/paper.png';
import scissors from '../../assets/images/scissors.png';

const Game = () => {
    const { play } = useParams();
    const hands = ["rock", "paper", "scissors"];
    const choosePicture = (hand) => {
        if (hand === "rock") return rock;
        if (hand === "paper") return paper;
        if (hand === "scissors") return scissors;
    }

    const evaluateGame = () => {
        if (play === computerHand) return "draw";

        let compI = hands.findIndex(e => e === computerHand) + 1;
        let playI = hands.findIndex(e => e === play) + 1;

        console.log(playI);
        console.log(compI);

        let result = ((compI + playI + 1) % 2 > 0) ? 0 : ((compI + playI + 1) / 2) - 1;
        return (play === hands[result]) ? "you" : "computer";
    }

    const [computerHand, updateComputerHand] = useState();
    const [winner, updateWinner] = useState();

    useEffect(() => {
        const computerIndex = Math.floor(Math.random() * 3);
        updateComputerHand(hands[computerIndex]);
        let result = evaluateGame();
        updateWinner(result);
    }, []);

    useEffect(() => {
        let result = evaluateGame();
        updateWinner(result);
    }, [computerHand]);

    const youPath = choosePicture(play);
    const compPath = choosePicture(computerHand);

    return (
        <div className={`${styles.wrapper} ${styles[winner]}`}>
            <div className={styles.youPick}>
                <h1 className={styles.you}>you win</h1>
                <img className={styles.image} src={youPath} alt={play} />
            </div>
            <div className={styles.computerPick}>
                <h1 className={styles.computer}>computer wins</h1>
                <img className={styles.image} src={compPath} alt={computerHand} />
            </div>
            <button className={styles.playAgain}>
                <Link to="/">
                    play again?
                </Link>
            </button>
        </div>
    )
}

export default Game
