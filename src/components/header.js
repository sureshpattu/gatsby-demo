import * as React from 'react'
import {Link} from 'gatsby'
import {StaticImage} from "gatsby-plugin-image";

export default function Header(props) {
    return (
        <nav className="justify-content-center navbar navbar-expand-lg navbar-light bg-light">
            <div className="container-fluid">
                <Link className="navbar-brand" to="/">
                    <StaticImage src="../images/logo.png" alt="Unavu Kaadu Logo" placeholder="Unavu Kaadu Logo"
                                 height={95}/>
                </Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                        data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                        aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"/>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <Link className="nav-link active" aria-current="page" to="/">Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/about">About</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/contact">Contact</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}