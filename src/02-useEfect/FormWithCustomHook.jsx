import React, { useEffect, useState } from 'react'
import { UseForm } from '../hooks/useForm';


export const FormWithCustom = () => {

    const {simple,onInputChange,onreset} = UseForm({
        email:'',
        username: '',
        password: '',
    })
    
    const {username,email,password} = simple
    

    return (
        <>
            <h1>Formulario custom hook</h1>
            <input type="text" placeholder='Username' name='username' onChange={onInputChange} value={username} />
            <input type="email" placeholder='yeison@google.com' name='email' onChange={onInputChange} value={email}/>
            <input type="password" name="password"  placeholder='contraseña' value={password} onChange={onInputChange} />

            <button onClick={onreset}>Borrar</button>
            
        </>
    )
}





