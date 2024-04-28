import React, { Fragment } from 'react'
import About from '../components/About'
import AvailableWork from '../components/AvailableWork'
import Blogs from '../components/Blogs'
import Contact from '../components/Contact'
import Counter from '../components/Counter'
import Footer from '../components/Footer'
import Home from '../components/Home'
import Navbar from '../components/Navbar'
import Projects from '../components/Projects'
import Resume from '../components/Resume'
import Services from '../components/Services'
import Skills from '../components/Skills'

function PersonalSite() {
    return (
        <Fragment>
            <div data-spy="scroll" data-target=".site-navbar-target" data-offset="300">
                <Navbar/>
                <Home/>
                <About/>
                <Resume/>
                {/* <Services/> */}
                <Skills/>
                <Projects/>
                <Blogs/>
                <Counter/>
                <AvailableWork/>
                <Contact/>
                <Footer/>
                {/* <!-- loader --> */}
                {/* <div id="ftco-loader" className="show fullscreen"><svg className="circular" width="48px" height="48px"><circle className="path-bg" cx="24" cy="24" r="22" fill="none" strokeWidth="4" stroke="#eeeeee" /><circle className="path" cx="24" cy="24" r="22" fill="none" strokeWidth="4" strokeMiterlimit="10" stroke="#F96D00" /></svg></div> */}
            </div>
        </Fragment>
    )
}

export default PersonalSite