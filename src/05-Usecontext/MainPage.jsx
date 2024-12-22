import React from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
import { Homepage } from './Homepage'
import { Aboutpage } from './Aboutpages'
import { Loginpage } from './Logipage'
import { Navbar } from './Navbar'


export const MainPage = () => {
    return (
        <>
            <h1>Hola</h1>
            <Navbar/>
            <Routes>
                <Route path='about' element={<Aboutpage></Aboutpage>}/>
                <Route path='homepage' element={<Homepage/>}></Route>
                <Route path='/*' element={<Navigate to="/about"/>}></Route>
                <Route path='login' element={<Loginpage/>}></Route>
            </Routes>
        </>
    )
}
