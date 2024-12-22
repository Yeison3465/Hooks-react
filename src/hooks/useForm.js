import React, { useState } from 'react'

export const UseForm = (inicialform = {}) => {
    const [simple, setsimple] = useState(inicialform)


    const onInputChange = ({target}) =>{
        const {name, value} = target;
        setsimple({
            ...simple,
            [name]:value
        })
    }

    const onreset =  () =>{
        setsimple(inicialform)
    }
    return{
        simple,onInputChange,onreset
    }
}
