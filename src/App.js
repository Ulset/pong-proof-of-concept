import './App.css';
import {useEffect, useState} from "react";
import Celle from "./Celle";

function App() {
    const y_length = 8
    const x_length = 8

    const [y_axis, setY_axis] = useState(4);
    const [x_axis, setX_axis] = useState(4);

    useEffect(()=>{
        //Game loop
        const interval = setInterval(()=>{
            setX_axis(prevXAx => {
                if(prevXAx >= 7){
                    return 0
                }else {
                    return prevXAx+1
                }
            })
        }, 1000)
        return ()=>clearInterval(interval)
    }, [])

    let gamestate = []
    for (let y = 0; y < y_length; y++) {
        let row = []
        for (let x = 0; x < x_length; x++) {
            const active = y===y_axis && x === x_axis;
            row.push(<Celle active={active} key={`${x}-${y}`}/>)
        }
        gamestate.push(row)
    }

    const gameBoard = gamestate.map((el, index) => {
        return (
            <div className="row" key={index}>
                {el}
            </div>
        );
    })

    return (
        <div className="container">
            <div className="game_container">
                {gameBoard}
            </div>
        </div>
    );
}

export default App;
