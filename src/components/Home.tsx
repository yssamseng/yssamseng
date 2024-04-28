import React, { Fragment } from 'react'
import * as Const from '../utils/conts'

function Home() {
    return (
        <Fragment>
            <section id="home-section" className="hero">
                <div className="home-slider  owl-carousel">
                    <div className="slider-item ">
                        <div className="overlay"></div>
                        <div className="container">
                            <div className="row d-md-flex no-gutters slider-text align-items-end justify-content-end" data-scrollax-parent="true">
                                <div className="one-third js-fullheight order-md-last img" style={{ backgroundImage: 'url(myImages/bg_ys3.png)' }}>
                                    <div className="overlay"></div>
                                </div>
                                <div className="one-forth d-flex  align-items-center ftco-animate" data-scrollax=" properties: { translateY: '70%' }">
                                    <div className="text">
                                        <span className="subheading">Hello!</span>
                                        <h1 className="mb-4 mt-3">I'm <span>{Const.MyFullName}</span></h1>
                                        <h2 className="mb-4">{Const.AvailableForWork}</h2>
                                        <p><a href="#" className="btn btn-primary py-3 px-4">Hire me</a> <a href="#" className="btn btn-white btn-outline-white py-3 px-4">My works</a></p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="slider-item">
                        <div className="overlay"></div>
                        <div className="container">
                            <div className="row d-flex no-gutters slider-text align-items-end justify-content-end" data-scrollax-parent="true">
                                <div className="one-third js-fullheight order-md-last img" style={{ backgroundImage: 'url(myImages/bg_ys2.png)' }}>
                                    <div className="overlay"></div>
                                </div>
                                <div className="one-forth d-flex align-items-center ftco-animate" data-scrollax=" properties: { translateY: '70%' }">
                                    <div className="text">
                                        <span className="subheading">Hello!</span>
                                        <h1 className="mb-4 mt-3">I'm a <span>{Const.main_skill}</span> based in {Const.WorkBase}</h1>
                                        <p><a href="#" className="btn btn-primary py-3 px-4">Hire me</a> <a href="#" className="btn btn-white btn-outline-white py-3 px-4">My works</a></p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </Fragment>
    )
}

export default Home