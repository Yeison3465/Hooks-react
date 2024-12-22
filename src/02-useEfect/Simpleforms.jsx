import React, { useEffect, useState } from 'react'
import { Menssage } from './menssage';

export const Simpleforms = () => {
    const [simple, setsimple] = useState({
        username: 'Miles',
        email:'yeison@gmail.com',

    })

    const { username , email } = simple;

    const onInputChange = ({target}) =>{
        const {name, value} = target;
        setFormStade({
            ...simple,
            [name]:value
        })
    }
    useEffect(() => {
        console.log('UseEffect called')
    },[]);

    return (
        <>
            <h1>Formularios simple</h1>
            <input type="text" placeholder='Username' name='username' />
            <input type="email" placeholder='yeison@google.com' name='email' />
            <Menssage></Menssage>
        </>
    )
}





