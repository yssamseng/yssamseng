import React, { Fragment } from 'react'
import { Link, Button, Element, Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll'
import * as Const from '../utils/conts'

const Navbar = () => {
    const smooth = true
    const duration = 900
    return (
        <Fragment>
            <nav className="navbar navbar-expand-lg navbar-dark ftco_navbar ftco-navbar-light site-navbar-target" id="ftco-navbar">
                <div className="container">
                    <a className="navbar-brand" href="index.html">{Const.MyName}</a>
                    <button className="navbar-toggler js-fh5co-nav-toggle fh5co-nav-toggle" type="button" data-toggle="collapse" data-target="#ftco-nav" aria-controls="ftco-nav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="oi oi-menu"></span> Menu
                    </button>

                    <div className="collapse navbar-collapse" id="ftco-nav">
                        <ul className="navbar-nav nav ml-auto">
                            <li className="nav-item"><Link to="home-section" smooth={smooth} duration={duration} href="#home-section" className="nav-link"><span>Home</span></Link></li>
                            <li className="nav-item"><Link to="about-section" smooth={smooth} duration={duration} href="#about-section" className="nav-link"><span>About</span></Link></li>
                            <li className="nav-item"><Link to="resume-section" smooth={smooth} duration={duration} href="#resume-section" className="nav-link"><span>Resume</span></Link></li>
                            {/* <li className="nav-item"><Link to="services-section" smooth={smooth} duration={duration} href="#services-section" className="nav-link"><span>Services</span></Link></li> */}
                            <li className="nav-item"><Link to="skills-section" smooth={smooth} duration={duration} href="#skills-section" className="nav-link"><span>Skills</span></Link></li>
                            <li className="nav-item"><Link to="projects-section" smooth={smooth} duration={duration} href="#projects-section" className="nav-link"><span>Projects</span></Link></li>
                            <li className="nav-item"><Link to="blog-section" smooth={smooth} duration={duration} href="#blog-section" className="nav-link"><span>My Blog</span></Link></li>
                            <li className="nav-item"><Link to="contact-section" smooth={smooth} duration={duration} href="#contact-section" className="nav-link"><span>Contact</span></Link></li>
                        </ul>
                    </div>
                </div>
            </nav>
        </Fragment>
    )
}

export default Navbar