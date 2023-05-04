import React from 'react'
import logo from './logo.svg'
import './App.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Root from './Root'
import Character from './character/Character'

function App() {
    const router = createBrowserRouter([
        { path: '/characters', element: <Character /> },
        { path: '/', element: <Root /> },
    ])
    return (
        <div className='App'>
            <header className='App-header'>
                <img src={logo} className='App-logo' alt='logo' />
                <p>
                    Edit <code>src/App.tsx</code> and save to reload.
                </p>
                <a className='App-link' href='https://reactjs.org' target='_blank' rel='noopener noreferrer'>
                    Learn React
                </a>
            </header>
            <RouterProvider router={router} />
        </div>
    )
}

export default App
