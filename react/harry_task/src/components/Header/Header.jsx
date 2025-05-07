import React from 'react';
import ReactDOM from 'react-dom/client';

function Header() {
    return <>
        <header className="header">
        <div className="container">
            <div className="row">
            <div className="col-12">
                <nav className="navbar navbar-expand-lg justify-content-between">
                <a className="navbar-brand" href="./index.html"><img src="../images/logo.png" alt="" className="logo" /></a>
                <div className="d-flex flex-row-reverse">
                    <div className="header-ctn d-flex order-1 order-md-2 text-white d-lg-none">
                    <a href="#" className="material-symbols-outlined mx-4">shopping_cart</a>
                    <span className="material-symbols-outlined mx-4 text-white" onclick="expandSearch()">search</span>
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
                        <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button"
                        data-bs-toggle="dropdown" aria-expanded="false">
                        Curriculum
                        </a>
                        <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                        <li>
                            <a className="dropdown-item" href="./subject-page.html">English</a>
                            <a className="dropdown-item" href="./subject-page.html">Hindi</a>
                            <a className="dropdown-item" href="./subject-page.html">Math</a>
                            <a className="dropdown-item" href="./subject-page.html">science</a>
                            <a className="dropdown-item view-more-subject" href="./subject-page.html">View More</a>
                        </li>
                        </ul>
                    </li>
                    <li className="nav-item dropdown">
                        <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button"
                        data-bs-toggle="dropdown" aria-expanded="false">
                        Company
                        </a>
                        <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                        <li className="dropdown-submenu">
                            <a className="dropdown-item" href="#">About</a>
                            <ul className="dropdown-menu">
                            <li><a className="dropdown-item" href="./about.html">Who We Are</a></li>
                            <li><a className="dropdown-item" href="./our-team.html">Meet the Team</a></li>
                            </ul>
                        </li>
                        <li>
                            <a className="dropdown-item" href="./career.html">Career</a>
                        </li>
                        <li>
                            <a className="dropdown-item" href="./new-and-media.html">Newsroom</a>
                        </li>
                        </ul>
                    </li>
                    <li className="nav-item dropdown">
                        <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button"
                        data-bs-toggle="dropdown" aria-expanded="false">
                        Resources
                        </a>
                        <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                            <li className="dropdown-submenu">
                                <a className="dropdown-item" href="#">Digital Solution</a>
                                <ul className="dropdown-menu">
                                  <li><a className="dropdown-item" href="./Eductional-page.html">Instructor</a></li>
                                  <li><a className="dropdown-item" href="./learner-page.html">Learner</a></li>
                                </ul>
                            </li>
                            <li>
                                <a className="dropdown-item" href="./blogs.html">Blogs</a>
                            </li>
                            <li>
                                <a className="dropdown-item" href="./webinar.html">Webinar</a>
                            </li>
                            <li>
                                <a className="dropdown-item" href="./events.html">Event</a>
                            </li>
                            <li>
                                <a className="dropdown-item" href="./testimonial.html">Testimonials</a>
                            </li>
                            <li>
                                <a className="dropdown-item" href="#">Esamples</a>
                            </li>
                        </ul>
                    </li>
                    </ul>
                    <div className="header-ctn d-flex order-1 order-md-2 text-white d-none d-lg-flex">
                    <div className="position-relative">
                        <a href="./cart.html" className="material-symbols-outlined mx-4">shopping_cart</a>
                        <span className="no-of-products d-flex justify-content-center align-items-center">32</span>
                    </div>
                    <span className="material-symbols-outlined mx-4 text-white" onclick="expandSearch()">search</span>
                    </div>
                    <div className="header-login order-2 order-md-3">
                    <a href="./signIn.html" className="c-btn c-btn-ing mx-2">
                        Login
                    </a>
                    </div>
                </div>
                </nav>
            </div>
            </div>
        </div>
        </header>
    </>;
}
export default Header;