import React from 'react'
import { useCounter } from '../hooks/usecounter'

export const CounterWH = () => {
    const {counter,decrement,reset,increment} = useCounter()
    return (
        <>
            <h1 >counter: {counter}</h1>
            <button onClick={increment}>+1</button>
            <button onClick={decrement}>-1</button>
            <button onClick={reset}>reset</button>
        </>
    )
}

