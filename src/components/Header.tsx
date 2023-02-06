import React from 'react'
import { Link } from 'react-router-dom'

export default function Header(): JSX.Element {
    return (
        <div className='Header'>
            <Link to="/">Home</Link>
            <Link to="/detail/1">Detail1</Link>
            <Link to="/detail/2">Detail2</Link>
            <Link to="/detail/3">Detail3</Link>
            <Link to="Error">Error</Link>
        </div>
    )
}