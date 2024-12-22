import React, { useReducer, useRef } from 'react'

export const useref = () => {
    const ref = useRef()

    const onClick = () => {
        ref.current.select()
    }
    return (
        <>
            <h1>Focus Screem</h1>
            <input type="text" ref={ref}placeholder='Ingrese su nombre' />
            <button onClick={onClick}>focus</button>
        </>
    )
}

