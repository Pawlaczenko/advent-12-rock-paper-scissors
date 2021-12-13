import React from 'react'
import { useParams } from 'react-router'

const Game = () => {
    const { play } = useParams();

    return (
        <div>
            {play}
        </div>
    )
}

export default Game
