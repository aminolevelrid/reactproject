import React, { useState } from 'react';
import Square from './square';

const Grid = () => {
    const [start, setStart] = useState(Array(9).fill(null));
    const [turn, setTurn] = useState(true);

    const checkWinner = () => {
        const winner = [
            [0, 1, 2],
            [3, 4, 5],
            [6, 7, 8],
            [0, 3, 6],
            [1, 4, 7],
            [2, 5, 8],
            [0, 4, 8],
            [6, 4, 2]
        ];
        for (let logic of winner) {
            const [a, b, c] = logic;
            if (start[a] !== null && start[a] === start[b] && start[a] === start[c]) {
                return start[a];
            }
        }
        return null;
    };

    const winner = checkWinner();

    const handleClicked = (index) => {
        if (start[index] !== null || winner) return; 

        const copy = [...start];
        copy[index] = turn ? 'X' : 'O';
        setStart(copy);
        setTurn(!turn);
    };
    function reset(){
        setStart(Array(9).fill(null));
    }

    return (
        <div>
            <h1 style={{marginLeft:'600px'}}>Tic Tac Toe Game</h1>
            <h2 style={{marginLeft:'650px'}}>player {turn?'x':'o'} move</h2>

        <div className='box-container'>
            {winner ? (
                <div>
                <h2>{winner} is the winner!</h2>
                <button onClick={reset}>play Again</button>
                </div>
            ) : (
                <>
                    <div className='row-container'>
                        <Square click={() => handleClicked(0)} value={start[0]} />
                        <Square click={() => handleClicked(1)} value={start[1]} />
                        <Square click={() => handleClicked(2)} value={start[2]} />
                    </div>
                    <div className='row-container'>
                        <Square click={() => handleClicked(3)} value={start[3]} />
                        <Square click={() => handleClicked(4)} value={start[4]} />
                        <Square click={() => handleClicked(5)} value={start[5]} />
                    </div>
                    <div className='row-container'>
                        <Square click={() => handleClicked(6)} value={start[6]} />
                        <Square click={() => handleClicked(7)} value={start[7]} />
                        <Square click={() => handleClicked(8)} value={start[8]} />
                    </div>
                </>
            )}
        </div>
        </div>
    );
};

export default Grid;
