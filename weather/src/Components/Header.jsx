import React from 'react'
import Menubar from './Menubar'

const Header = () => {
    return (
        <header className='header'>
            <nav>
                <div className="top-left">
                    <Menubar />
                    <div className="logo">
                        WeathterApp
                    </div>
                </div>
                <div className="day">
                    Today
                </div>
                <div className="theme">
                    <button>Change</button>
                </div>
            </nav>
        </header>
    )
}

export default Header