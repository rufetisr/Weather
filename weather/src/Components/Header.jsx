import React from 'react'
import Menubar from './Menubar'


const dateBuilder = (d) => {
    // const [query, setQuery] = useState("");

    const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

    let day = days[d.getDay()];
    let month = months[d.getMonth()];
    let date = d.getDate();
    let year = d.getFullYear();
    return `${day},  ${date}th ${month} ${year}`;
    // return new Date().getMonth();
}


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
                <div className="day" style={{marginLeft: '5px'}}>
                    {dateBuilder(new Date())}
                </div>
                <div className="theme">
                    <button>Change</button>
                </div>
            </nav>
        </header>
    )
}

export default Header