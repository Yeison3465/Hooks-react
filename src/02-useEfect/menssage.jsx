import React, { useState } from 'react'
import { useEffect } from 'react'
export const Menssage = () => {

    const [coords,setCoords] = useState({x: 0, y: 0})
    useEffect(() =>{
        const onMouseMove =  ({x,y}) => {
            setCoords({x,y})
        }

        window.addEventListener('mousemove', onMouseMove);


        return()=>{
            console.log('mensage no activo')
            window.addEventListener('mousemove', onMouseMove);
        }

    },[])
    return (
        <>
            <h3>Usuario ya existe</h3>
        </>
    )
}


