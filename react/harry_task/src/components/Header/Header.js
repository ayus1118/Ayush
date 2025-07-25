import ReactDOM from "react-dom/client";
import PropTypes from 'prop-types';
import { BrowserRouter, Route, Link } from 'react-router-dom';
import aboutUs from "../aboutUs/aboutUs";


export default function Header(props) {
    
    return (
        <>
            <header className="header">
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <nav className={`navbar navbar-expand-lg justify-content-between bg-${props.modechange} navbar-${props.modechange}`}>
                                <a className="navbar-brand" href="./index.html"><img src="../images/logo.png" alt="" className="logo" /></a>
                                <div className="d-flex flex-row-reverse">
                                    <div className="header-ctn d-flex order-1 order-md-2 text-white d-lg-none">
                                        <a href="/" className="material-symbols-outlined mx-4">shopping_cart</a>
                                        <span className="material-symbols-outlined mx-4 text-white">search</span>
                                    </div>
                                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                                        data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false"
                                        aria-label="Toggle navigation">
                                        <span className="navbar-toggler-icon"></span>
                                        <span className="navbar-toggler-icon"></span>
                                        <span className="navbar-toggler-icon"></span>
                                    </button>
                                </div>
                                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                                        <li className="nav-item dropdown">
                                            <Link className="nav-link" to={"/"} id="navbarDropdown" role="button"
                                                data-bs-toggle="dropdown" aria-expanded="false">{props.menu1}</Link>
                                        </li>
                                        <li className="nav-item dropdown">
                                            <Link className="nav-link" to={"../aboutUs/aboutUs.js"} id="navbarDropdown" role="button"
                                                data-bs-toggle="dropdown" aria-expanded="false">
                                                {props.menu2}
                                            </Link>
                                        </li>
                                        <li className="nav-item dropdown">
                                            <Link className="nav-link" to={"/"} id="navbarDropdown" role="button"
                                                data-bs-toggle="dropdown" aria-expanded="false">
                                                {props.menu3}
                                            </Link>
                                        </li>
                                    </ul>
                                    <div className="header-ctn d-flex order-1 order-md-2 text-white d-none d-lg-flex">
                                        <div className="position-relative d-flex">
                                            <a href="./cart.html" className="material-symbols-outlined mx-4">shopping_cart</a>
                                            <span className="no-of-products d-flex justify-content-center align-items-center">32</span>
                                        </div>
                                        <span className="material-symbols-outlined mx-4 text-white">search</span>
                                    </div>
                                    <div className="header-login order-2 order-md-3">
                                        <a href="./signIn.html" className="c-btn c-btn-ing mx-2">
                                            Login
                                        </a>
                                    </div>
                                    <div className={`form-check mx-2 form-switch text-${props.modechange === 'light' ? 'dark' : 'light'}`}>
                                        <input className="form-check-input" type="checkbox" id="flexSwitchCheckDefault" onClick={props.toggleMode} />
                                        <label className="form-check-label" htmlFor="flexSwitchCheckDefault">Set Dark Mode</label>
                                    </div>
                                </div>
                            </nav>
                        </div>
                    </div>
                </div>
            </header>
            <BrowserRouter>
                <Route path="/aboutUs" element={<aboutUs />} />
            </BrowserRouter>
        </>
    )
}
// Setting props type
Header.propTypes = {
    menu1: PropTypes.string.isRequired,
    menu2: PropTypes.string,
    menu3: PropTypes.string
};
// Setting default props
Header.defaultprops = {
    menu1: "let me test",
}