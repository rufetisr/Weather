import React from 'react'

const Header = () => {
    return (
        <header className='header'>
            <div className="top-left">
                <div className="hamburger-btn">
                    <button>=</button>
                </div>
                <nav>
                    <div className="logo">
                        WeathterApp
                    </div>
                </nav>
            </div>
            <div className="day">
                Today
            </div>
            <div className="theme">
                <button>Change</button>
            </div>
        </header>
    )
}

export default Header