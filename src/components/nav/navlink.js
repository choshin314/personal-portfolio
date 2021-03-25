import React from 'react'
import { navigate } from '@reach/router';
import { window } from 'browser-monads'

export default function NavLink({to, text}) {
    const section = window.document.getElementById(to.replace('#',''))
    
    const handleNav = (e) => {
        e.preventDefault();
        navigate(to);
        section.scrollIntoView(true);
    }
    
    return (
        <a onClick={handleNav} href={to}><li>{text}</li></a>
    )
}