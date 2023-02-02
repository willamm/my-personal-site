import * as React from 'react'
import { Link } from 'gatsby'
import { container, heading, navLinks, navLinkItem, navLinkText } from './layout.module.css'

const Layout = ({pageTitle, children}) => {
    const resumeUrl = "https://docs.google.com/document/d/e/2PACX-1vRg9ZTIo6cTKuXx342YACpauM68GIN2EMEphhUc3xUKnzZw8VGZAuokDOfp61BAWRaSHLs9cKUYyENr/pub"
    return (
        <div className={container}>
            <nav>
                <ul className={navLinks}>
                    <li className={navLinkItem}><Link className={navLinkText} to="/">Home</Link></li>
                    <li className={navLinkItem}><Link className={navLinkText} to="/about">About</Link></li>
                    <li className={navLinkItem}><Link className={navLinkText} to={resumeUrl}>Resume</Link></li>
                </ul>
            </nav>
            <main>
                <h1 className={heading}>{pageTitle}</h1>
                {children}
            </main>
        </div>
    )
}

export default Layout;