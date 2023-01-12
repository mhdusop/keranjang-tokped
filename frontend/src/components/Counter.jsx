import { useState } from "react";

export default function Counter() {

    let [num, setNum]= useState(1);

    let increment = () => {
        setNum(function (prevCount) {
            return prevCount += 1;
        });
    }

    let decrement = () => {
        setNum(function (prevCount) {
            if (prevCount > 1) {
                return (prevCount -= 1); 
            } else {
                return (prevCount = 1);
            }
        });
    }

    return(
        <>
            <button className="btn btn-secondary" onClick={decrement}>-</button> {num} <button className="btn btn-secondary" onClick={increment}>+</button>
        </>
    )
}