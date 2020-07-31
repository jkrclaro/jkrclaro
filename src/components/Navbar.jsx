  
import React from 'react';


class Navbar extends React.Component {

    render() {
        const pathname = new URL(window.location.href).pathname;
        return (
            <div style={{paddingBottom: 10}}>
                <li style={{display: 'inline'}}>
                    <a href='/' className={pathname === '/' ? 'active' : ''} style={{paddingRight: 15}}>About</a>
                    <a href='/notes' className={pathname === '/notes' || pathname.includes('/notes/') ? 'active' : ''}>Notes</a>
                </li>
            </div>
        )
    }
}

export default Navbar;