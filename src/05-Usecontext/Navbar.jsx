import React from 'react'
import { Navigate, Route, Routes, Link } from 'react-router-dom'
export const Navbar = () => {
    return (
        <>
            <ul>
                <li><Link to="/">home</Link></li>
                <li><Link to="/about">about</Link></li>
                <li><Link to="/Login">login</Link></li>
                <li><Link to="/homepage">homepage</Link></li>
            </ul>
        </>
    )
}
