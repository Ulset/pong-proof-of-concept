import './App.css';
import {useEffect, useState} from "react";
import Celle from "./Celle";

function App() {
    const y_length = 8
    const x_length = 8

    //Where the ball is heading
    const [y_axis, setY_axis] = useState(4);
    const [x_axis, setX_axis] = useState(4);

    const [xDelta, setXDelta] = useState(0);
    const [yDelta, setYDelta] = useState(1);

    //Game loop
    useEffect(()=>{
        //Returns a new axis dependent on delta
        const returnNewAxis = (prevAx, setDeltaFunc, delta, axisType) => {
            console.log("---", axisType)
            console.log("Axis ", axisType, ": ", prevAx)
            console.log("Delta ", axisType, ": ", delta)
            if(prevAx > 7 || prevAx < 0){
                setDeltaFunc(prevDelta => prevDelta*-1)
                return prevAx-delta
            }else{
                return prevAx+delta
            }
        }

        const interval = setInterval(()=>{
            setX_axis(prevXAx => returnNewAxis(prevXAx, setXDelta, xDelta, "X"))
            setY_axis(prevYAx => returnNewAxis(prevYAx, setYDelta, yDelta, "Y"))
        }, 3000)
        return ()=> {clearInterval(interval)}
    }, [xDelta, yDelta])

    let gameBoard = []
    for (let y = 0; y < y_length; y++) {
        let row = []
        for (let x = 0; x < x_length; x++) {
            const active = y===y_axis && x === x_axis;
            row.push(<Celle active={active} key={`${x}-${y}`}/>)
        }
        gameBoard.push(<div className="row" key={y}>{row}</div>)
    }


    return (
        <div className="container">
            <div className="game_container">
                {gameBoard}
            </div>
        </div>
    );
}

export default App;
